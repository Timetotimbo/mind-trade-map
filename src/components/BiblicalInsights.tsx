import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { biblicalInsights } from '@/data/biblicalInsights';

const BiblicalInsights = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 rounded-xl border border-insight/20 bg-insight/5">
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div>
          <div className="font-mono text-[10px] tracking-widest uppercase text-insight mb-2">
            BIBLICAL INSIGHTS
          </div>
          <p className="text-sm text-secondary-foreground">
            {open ? 'What following Christ teaches about trading.' : `Tap to see ${biblicalInsights.length} correlations between trading and following Christ.`}
          </p>
        </div>
        <ChevronDown className={`w-4 h-4 shrink-0 ml-4 text-insight transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ol className="px-4 pb-4 space-y-3">
              {biblicalInsights.map((item, i) => (
                <li key={item.reference} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-mono text-[10px] text-insight">{String(i + 1).padStart(2, '0')}</span>
                    <h4 className="text-sm font-semibold text-foreground">{item.principle}</h4>
                  </div>
                  <blockquote className="text-sm italic text-secondary-foreground border-l-2 border-insight/40 pl-3 mb-1">
                    “{item.verse}”
                  </blockquote>
                  <p className="font-mono text-[10px] text-muted-foreground pl-3 mb-2">{item.reference} (KJV)</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.trading}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BiblicalInsights;
