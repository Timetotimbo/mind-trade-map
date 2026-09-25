import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { type EmotionNode, ZONE_CONFIG, emotionNodes } from '@/data/emotionData';
import BiblicalInsights from '@/components/BiblicalInsights';

interface NodeDetailProps {
  node: EmotionNode;
  onClose: () => void;
}

const NodeDetail = ({ node, onClose }: NodeDetailProps) => {
  const config = ZONE_CONFIG[node.zone];
  const connectedNodes = emotionNodes.filter(n => node.connections.includes(n.id));
  const incomingNodes = emotionNodes.filter(n => n.connections.includes(node.id));

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${config.textClass}`}>
                {config.label}
              </div>
              <h2 className="text-2xl font-bold text-foreground">{node.label}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
            >
              <X size={20} />
            </button>
          </div>

          {/* Description */}
          <p className="text-secondary-foreground leading-relaxed mb-8">
            {node.description}
          </p>

          {/* Inner Voice */}
          {node.innerVoice && (
            <div className={`p-4 rounded-xl border ${config.borderClass} ${config.bgClass} mb-8`}>
              <div className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-2">
                THE INNER VOICE
              </div>
              <p className={`text-lg italic ${config.textClass}`}>
                "{node.innerVoice}"
              </p>
            </div>
          )}

          {/* Incoming Connections */}
          {incomingNodes.length > 0 && (
            <div className="mb-8">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                ← TRIGGERED BY
              </h3>
              <div className="space-y-2">
                {incomingNodes.map(n => {
                  const c = ZONE_CONFIG[n.zone];
                  return (
                    <div key={n.id} className={`p-3 rounded-lg border ${c.borderClass} ${c.bgClass}`}>
                      <span className={`font-mono text-[10px] ${c.textClass} mr-2`}>{c.label.split(' ')[0]}</span>
                      <span className="text-sm text-foreground">{n.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Outgoing Connections */}
          {connectedNodes.length > 0 && (
            <div className="mb-8">
              <h3 className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-4">
                → LEADS TO
              </h3>
              <div className="space-y-2">
                {connectedNodes.map(n => {
                  const c = ZONE_CONFIG[n.zone];
                  return (
                    <div key={n.id} className={`p-3 rounded-lg border ${c.borderClass} ${c.bgClass}`}>
                      <span className={`font-mono text-[10px] ${c.textClass} mr-2`}>{c.label.split(' ')[0]}</span>
                      <span className="text-sm text-foreground">{n.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Key Insight */}
          <div className="p-4 rounded-xl border border-warning/20 bg-warning/5">
            <div className="font-mono text-[10px] tracking-widest uppercase text-warning mb-2">
              KEY INSIGHT
            </div>
            <p className="text-sm text-secondary-foreground">
              Every controllable trigger = edge leak. Awareness is the first step to breaking the cycle.
            </p>
          </div>

          <BiblicalInsights />
        </div>
      </motion.div>
    </>
  );
};

export default NodeDetail;
