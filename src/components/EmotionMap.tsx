import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { emotionNodes, ZONE_CONFIG, type EmotionZone, type EmotionNode } from '@/data/emotionData';
import NodeDetail from './NodeDetail';

const zones: EmotionZone[] = ['trigger', 'emotion', 'behavior', 'consequence'];

const EmotionMap = () => {
  const [activeZone, setActiveZone] = useState<EmotionZone | null>(null);
  const [selectedNode, setSelectedNode] = useState<EmotionNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const filteredNodes = activeZone
    ? emotionNodes.filter(n => n.zone === activeZone)
    : emotionNodes;

  const getConnectedIds = (nodeId: string): string[] => {
    const node = emotionNodes.find(n => n.id === nodeId);
    if (!node) return [];
    // Get direct connections AND nodes that connect TO this node
    const forward = node.connections;
    const backward = emotionNodes.filter(n => n.connections.includes(nodeId)).map(n => n.id);
    return [...new Set([...forward, ...backward])];
  };

  const connectedIds = hoveredNode ? getConnectedIds(hoveredNode) : [];

  return (
    <section id="atlas" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Zone Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button
            onClick={() => setActiveZone(null)}
            className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all border ${
              activeZone === null
                ? 'border-foreground/30 bg-foreground/10 text-foreground'
                : 'border-border text-muted-foreground hover:border-foreground/20'
            }`}
          >
            ALL ZONES
          </button>
          {zones.map(zone => {
            const config = ZONE_CONFIG[zone];
            return (
              <button
                key={zone}
                onClick={() => setActiveZone(zone)}
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider transition-all border ${
                  activeZone === zone
                    ? `${config.borderClass} ${config.bgClass} ${config.textClass} ${config.glowClass}`
                    : `border-border text-muted-foreground hover:${config.borderClass}`
                }`}
              >
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Flow indicator */}
        {!activeZone && (
          <div className="flex items-center justify-center gap-4 mb-12 font-mono text-xs text-muted-foreground">
            <span className="text-warning">TRIGGERS</span>
            <span>→</span>
            <span className="text-danger">EMOTIONS</span>
            <span>→</span>
            <span className="text-insight">BEHAVIORS</span>
            <span>→</span>
            <span className="text-calm">CONSEQUENCES</span>
          </div>
        )}

        {/* Node Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredNodes.map((node) => {
              const config = ZONE_CONFIG[node.zone];
              const isConnected = connectedIds.includes(node.id);
              const isDimmed = hoveredNode && hoveredNode !== node.id && !isConnected;

              return (
                <motion.button
                  key={node.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isDimmed ? 0.25 : 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedNode(node)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`relative text-left p-4 rounded-xl border transition-all cursor-pointer group ${config.borderClass} ${config.bgClass} hover:${config.glowClass}`}
                >
                  <div className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${config.textClass} opacity-60`}>
                    {config.label}
                  </div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-foreground/90">
                    {node.label}
                  </div>
                  {node.innerVoice && (
                    <div className="mt-2 text-xs italic text-muted-foreground line-clamp-2">
                      "{node.innerVoice}"
                    </div>
                  )}
                  {/* Connection count */}
                  <div className={`absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono ${config.bgClass} ${config.textClass}`}>
                    {node.connections.length}
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Panel */}
      <AnimatePresence>
        {selectedNode && (
          <NodeDetail node={selectedNode} onClose={() => setSelectedNode(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default EmotionMap;
