import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-warning/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-danger/5 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-insight/3 blur-[150px]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-warning mb-6">
            The Trader's Mind — Mapped
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[0.9] mb-8"
        >
          <span className="block">Atlas of</span>
          <span className="block text-glow-warning text-warning">Trading</span>
          <span className="block">Emotions</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Every blown account has a story. Every edge leak has an emotional origin.
          <span className="block mt-2 font-mono text-sm text-warning/80">
            Map your triggers. See the patterns. Break the cycle.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#atlas"
            className="px-8 py-4 bg-warning text-warning-foreground font-semibold rounded-lg hover:brightness-110 transition-all glow-warning"
          >
            Explore the Atlas
          </a>
          <a
            href="#insight"
            className="px-8 py-4 border border-border text-secondary-foreground font-medium rounded-lg hover:bg-secondary transition-all"
          >
            Key Insight
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 font-mono text-xs text-muted-foreground"
        >
          <span className="text-danger">▼</span> Scroll to begin
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
