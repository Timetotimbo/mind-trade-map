import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PsychologySection = () => {
  const horsemen = [
    {
      icon: '🧊',
      title: 'Fear — The Paralyzer',
      body: 'Fear makes you hesitate on planned entries, cut winners short, or freeze entirely after a loss. The fix isn\'t eliminating fear — it\'s shrinking its territory. A written plan with defined entries, stops, and exits leaves less room for fear to operate. Risk a small, fixed percentage so one loss never feels fatal.',
    },
    {
      icon: '🎰',
      title: 'Greed — The Gambler\'s Trap',
      body: 'Greed doesn\'t always scream. Sometimes it whispers: "just one more trade." Other times it convinces you to skip rules for a bigger move. Combat it by capping daily targets and walking away when you hit them. Celebrate discipline, not dollar signs.',
    },
    {
      icon: '🔁',
      title: 'Hope & Regret — The Revenge Loop',
      body: 'You hold a loser hoping it bounces. It doesn\'t. Regret floods in, and you rush a new trade to "make it back." This is revenge trading — the most toxic cycle in the game. Break it by separating your identity from your trades. A loss means the market disagreed, not that you\'re broken.',
    },
    {
      icon: '👑',
      title: 'Overconfidence — The Silent Killer',
      body: 'Success is often more dangerous than failure. After a win streak, traders feel untouchable — they size up, skip analysis, get sloppy with risk. Stay humble. Keep journaling. Every trade deserves equal scrutiny. Let process drive decisions, never mood.',
    },
  ];

  const practices = [
    { icon: '🧘', label: 'Daily self-check before every session — are you trading a signal or a feeling?' },
    { icon: '📓', label: 'Journal emotional state alongside every trade, not just the technicals.' },
    { icon: '🔍', label: 'Identify patterns — were you anxious? Overconfident? Did size or volatility shift your state?' },
    { icon: '🚶', label: 'Reset rituals — walk away after big wins or losses. A 5-minute break can snap the loop.' },
    { icon: '🧠', label: '5–10 minutes of mindfulness daily to regulate emotional reactivity.' },
    { icon: '🏋️', label: 'Physical fitness — exercise reduces cortisol and sharpens decision-making.' },
    { icon: '😴', label: 'Sleep discipline — poor sleep destroys willpower and amplifies impulsivity.' },
  ];

  return (
    <section id="psychology" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-warning mb-4">TRADING PSYCHOLOGY</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Your Edge Isn't Your Strategy.
            <span className="block text-muted-foreground mt-2">It's Your Mind.</span>
          </h2>
        </motion.div>

        {/* Opening */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="p-6 rounded-xl border border-border bg-card">
            <p className="text-secondary-foreground leading-relaxed mb-4">
              Most traders don't blow up because their system is broken. They blow up because they can't execute it under pressure. Fear, greed, frustration, and overconfidence hijack judgment — turning a disciplined plan into impulsive chaos.
            </p>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              The market is a mirror. One day you feel untouchable; the next, you hesitate on every click. That inconsistency isn't your strategy — it's how you respond to uncertainty and risk.
            </p>
            <p className="text-foreground font-medium">
              Emotional control doesn't mean suppressing what you feel. It means understanding it — and refusing to let it drive the next click.
            </p>
          </div>
        </motion.div>

        {/* Four Horsemen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-danger text-center mb-8">
            THE FOUR HORSEMEN OF EMOTIONAL TRADING
          </h3>
          <Accordion type="single" collapsible className="space-y-3">
            {horsemen.map((h, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl px-6 bg-card hover:border-danger/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center gap-3 text-left">
                    <span className="text-xl">{h.icon}</span>
                    <span className="font-semibold text-foreground">{h.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-secondary-foreground leading-relaxed pl-9">
                    {h.body}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Building the Mental Edge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-mono text-xs tracking-[0.3em] uppercase text-safe text-center mb-8">
            BUILDING THE MENTAL EDGE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {practices.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <span className="text-lg mt-0.5">{p.icon}</span>
                <p className="text-sm text-secondary-foreground leading-relaxed">{p.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-6 rounded-xl border border-warning/20 bg-warning/5 max-w-2xl">
            <p className="font-mono text-[10px] tracking-widest uppercase text-warning mb-3">PERFORMANCE TRUTH</p>
            <p className="text-foreground font-medium leading-relaxed">
              Elite traders treat this like a high-performance sport. Their edge isn't just mental — it's physical, emotional, and environmental. Train all of it, or none of it holds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsychologySection;
