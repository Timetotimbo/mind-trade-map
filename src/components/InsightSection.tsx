import { motion } from 'framer-motion';

const InsightSection = () => {
  const insights = [
    { icon: '⚡', title: 'Every controllable trigger = edge leak', desc: 'Your system might be profitable. But if you can\'t execute it, the edge is meaningless.' },
    { icon: '🔄', title: 'The cycle repeats until you see it', desc: 'Trigger → Emotion → Behavior → Consequence. Map it. Journal it. Break it.' },
    { icon: '🧠', title: 'You can\'t break rules you never wrote', desc: 'A written plan is your only defense against your emotional self.' },
    { icon: '🎯', title: 'Trade for setups, not for dollars', desc: 'When you trade for money, fear controls you. When you trade for process, discipline frees you.' },
  ];

  return (
    <section id="insight" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-insight mb-4">CORE TRUTHS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The Market Doesn't Care.
            <span className="block text-muted-foreground mt-2">Your Psychology Does.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-insight/30 transition-all"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightSection;
