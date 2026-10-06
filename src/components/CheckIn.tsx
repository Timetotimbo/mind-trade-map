import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { emotionNodes, ZONE_CONFIG } from '@/data/emotionData';
import { downstream, nodesOf } from '@/data/graph';
import FixBox from './FixBox';

/**
 * "I'm feeling…": tap what you feel right now (during or after a trade) and see where it leads if nothing changes,
 * the steps to reset, a rule, and a verse. "Show on the map" lights up its chain.
 */
const emotions = emotionNodes.filter(n => n.zone === 'emotion');

const CheckIn = ({ onShowOnMap }: { onShowOnMap: (id: string) => void }) => {
  const [feel, setFeel] = useState<string | null>(null);
  const node = emotions.find(e => e.id === feel);
  const ahead = node ? downstream(node.id) : new Set<string>();
  const behaviors = nodesOf(ahead, 'behavior');
  const consequences = nodesOf(ahead, 'consequence');
  return (
    <section id="check-in" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-danger text-center mb-3">CHECK IN</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">What are you feeling right now?</h2>
        <p className="text-center text-muted-foreground mb-8">Before the next click: name it, see where it leads, and reset.</p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {emotions.map(e => (
            <button
              key={e.id}
              onClick={() => setFeel(f => (f === e.id ? null : e.id))}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                feel === e.id ? 'border-danger bg-danger/20 text-danger glow-danger' : 'border-border text-secondary-foreground hover:border-danger/50'
              }`}
            >
              {e.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {node && (
            <motion.div key={node.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="space-y-5">
              {node.innerVoice && <p className="text-center text-lg italic text-danger">“{node.innerVoice}”</p>}
              <div className="p-4 rounded-xl border border-danger/30 bg-danger/5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-danger mb-3">IF NOTHING CHANGES, IT LEADS TO</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {behaviors.map(b => <span key={b.id} className={`px-2.5 py-1 rounded-md border text-xs ${ZONE_CONFIG.behavior.borderClass} ${ZONE_CONFIG.behavior.bgClass}`}>{b.label}</span>)}
                </div>
                <div className="font-mono text-xs text-muted-foreground my-1">↓ and then</div>
                <div className="flex flex-wrap gap-2">
                  {consequences.map(c => <span key={c.id} className={`px-2.5 py-1 rounded-md border text-xs ${ZONE_CONFIG.consequence.borderClass} ${ZONE_CONFIG.consequence.bgClass}`}>{c.label}</span>)}
                </div>
              </div>
              <FixBox id={node.id} zone="emotion" />
              <div className="text-center">
                <button onClick={() => onShowOnMap(node.id)} className="px-5 py-2.5 rounded-lg border border-border text-sm hover:bg-secondary transition-all">
                  Show it on the map ↓
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CheckIn;
