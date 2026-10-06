import { useLayoutEffect, useRef, useState } from 'react';
import { emotionNodes, ZONE_CONFIG, type EmotionZone } from '@/data/emotionData';
import { byId, chainOf, downstream, nodesOf, upstream } from '@/data/graph';

/**
 * The atlas as a real map: four columns (triggers → emotions → behaviors → consequences) with a line for every
 * connection. Tap a card and its whole chain lights up (what leads to it and where it leads); tap it again for the
 * details and what to do. On a phone the map scrolls sideways.
 */
const zones: EmotionZone[] = ['trigger', 'emotion', 'behavior', 'consequence'];
const STROKE: Record<EmotionZone, string> = { trigger: 'hsl(var(--warning))', emotion: 'hsl(var(--danger))', behavior: 'hsl(var(--insight))', consequence: 'hsl(var(--calm))' };

type Line = { from: string; to: string; d: string; zone: EmotionZone };

const MindMap = ({ selected, onSelect, onOpen }: { selected: string | null; onSelect: (id: string | null) => void; onOpen: (id: string) => void }) => {
  const box = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<Line[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Draw the lines from where the cards actually are
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const draw = () => {
      const base = el.getBoundingClientRect();
      const at = (id: string) => el.querySelector(`[data-node="${id}"]`)?.getBoundingClientRect();
      const out: Line[] = [];
      for (const n of emotionNodes) {
        const a = at(n.id);
        if (!a) continue;
        for (const c of n.connections) {
          const b = at(c);
          if (!b) continue;
          const x1 = a.right - base.left, y1 = a.top + a.height / 2 - base.top;
          const x2 = b.left - base.left, y2 = b.top + b.height / 2 - base.top;
          const dx = Math.max(30, (x2 - x1) / 2);
          out.push({ from: n.id, to: c, zone: n.zone, d: `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}` });
        }
      }
      setLines(out);
      setSize({ w: el.scrollWidth, h: el.scrollHeight });
    };
    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const chain = selected ? chainOf(selected) : null;
  const lit = (l: Line) => !chain || chain.edge(l.from, l.to);

  const sel = selected ? byId.get(selected) : null;
  const chips = (ids: Set<string>, zone: EmotionZone) =>
    nodesOf(ids, zone).map(n => (
      <button key={n.id} onClick={() => onSelect(n.id)} className={`px-2.5 py-1 rounded-md border text-xs ${ZONE_CONFIG[zone].borderClass} ${ZONE_CONFIG[zone].bgClass}`}>{n.label}</button>
    ));
  const order = zones;
  return (
    <>
    <div className="overflow-x-auto -mx-6 px-6 pb-4" onClick={() => onSelect(null)}>
      <div ref={box} className="relative grid grid-cols-4 gap-x-10 min-w-[760px]">
        <svg className="absolute inset-0 pointer-events-none" width={size.w} height={size.h} aria-hidden>
          {/* Dim lines first, the chain's on top */}
          {[...lines].sort((a, b) => Number(lit(a)) - Number(lit(b))).map(l => (
            <path
              key={`${l.from}-${l.to}`}
              d={l.d}
              fill="none"
              stroke={STROKE[l.zone]}
              strokeWidth={chain && lit(l) ? 2.5 : 1}
              strokeOpacity={chain ? (lit(l) ? 0.9 : 0.05) : 0.22}
              style={{ transition: 'stroke-opacity .25s, stroke-width .25s' }}
            />
          ))}
        </svg>
        {zones.map(zone => {
          const config = ZONE_CONFIG[zone];
          return (
            <div key={zone} className="relative flex flex-col gap-2.5">
              <div className={`sticky top-0 font-mono text-[10px] tracking-widest uppercase ${config.textClass} mb-1`}>{config.label}</div>
              {emotionNodes.filter(n => n.zone === zone).map(n => {
                const on = !chain || chain.nodes.has(n.id);
                const isSel = selected === n.id;
                return (
                  <button
                    key={n.id}
                    data-node={n.id}
                    onClick={e => {
                      e.stopPropagation();
                      if (isSel) onOpen(n.id);
                      else onSelect(n.id);
                    }}
                    className={`relative text-left px-3 py-2 rounded-lg border text-[13px] leading-snug transition-all ${config.borderClass} ${config.bgClass} ${
                      isSel ? `${config.glowClass} ring-2 ring-offset-0 ring-current ${config.textClass}` : 'text-foreground'
                    } ${on ? 'opacity-100' : 'opacity-20'}`}
                  >
                    <span className={isSel ? 'font-semibold' : ''}>{n.label}</span>
                    {isSel && <span className="block mt-1 font-mono text-[10px] opacity-80">TAP AGAIN FOR WHAT TO DO →</span>}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
    {/* The chain in words (on a phone the map is wider than the screen) */}
    {sel && (
      <div className="mt-4 p-4 rounded-xl border border-border bg-card space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className={`font-mono text-[10px] tracking-widest uppercase ${ZONE_CONFIG[sel.zone].textClass}`}>{ZONE_CONFIG[sel.zone].label}</div>
            <div className="font-semibold">{sel.label}</div>
          </div>
          <button onClick={() => onOpen(sel.id)} className="flex-none px-4 py-2 rounded-lg bg-calm/15 border border-calm/40 text-calm text-sm font-medium">What to do →</button>
        </div>
        {order.slice(0, order.indexOf(sel.zone)).some(z => nodesOf(upstream(sel.id), z).length) && (
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">CAUSED BY</div>
            <div className="flex flex-wrap gap-1.5">{order.slice(0, order.indexOf(sel.zone)).flatMap(z => chips(upstream(sel.id), z))}</div>
          </div>
        )}
        {order.slice(order.indexOf(sel.zone) + 1).map(z => {
          const list = chips(downstream(sel.id), z);
          return list.length ? (
            <div key={z}>
              <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1.5">{z === order[order.indexOf(sel.zone) + 1] ? 'LEADS TO' : 'AND THEN'}</div>
              <div className="flex flex-wrap gap-1.5">{list}</div>
            </div>
          ) : null;
        })}
      </div>
    )}
    </>
  );
};

export default MindMap;
