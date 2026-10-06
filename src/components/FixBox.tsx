import { nodeFixes } from '@/data/nodeFixes';
import type { EmotionZone } from '@/data/emotionData';

/** "What to do": the steps for a card, its rule, and a KJV verse. */
const HEAD: Record<EmotionZone, string> = { trigger: 'HOW TO BE READY', emotion: 'HOW TO RESET', behavior: 'DO THIS INSTEAD', consequence: 'HOW TO RECOVER' };

const FixBox = ({ id, zone }: { id: string; zone: EmotionZone }) => {
  const fix = nodeFixes[id];
  if (!fix) return null;
  return (
    <div className="p-4 rounded-xl border border-calm/30 bg-calm/5">
      <div className="font-mono text-[10px] tracking-widest uppercase text-calm mb-3">{HEAD[zone]}</div>
      <ol className="space-y-2 mb-4">
        {fix.steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-sm text-foreground">
            <span className="flex-none w-5 h-5 rounded-full bg-calm/20 text-calm text-[11px] font-mono flex items-center justify-center">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <div className="rounded-lg bg-background/60 border border-border px-3 py-2 mb-3">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mr-2">RULE</span>
        <span className="text-sm font-semibold text-foreground">{fix.rule}</span>
      </div>
      <blockquote className="text-sm italic text-secondary-foreground border-l-2 border-warning/60 pl-3">
        “{fix.verse.text}”
        <footer className="not-italic font-mono text-[11px] text-warning mt-1">{fix.verse.reference} (KJV)</footer>
      </blockquote>
    </div>
  );
};

export default FixBox;
