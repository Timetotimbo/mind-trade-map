export type EmotionZone = 'trigger' | 'emotion' | 'behavior' | 'consequence';

export interface EmotionNode {
  id: string;
  label: string;
  zone: EmotionZone;
  description: string;
  connections: string[]; // ids of connected nodes
  innerVoice?: string; // the trader's inner monologue
}

export const ZONE_CONFIG: Record<EmotionZone, { label: string; color: string; glowClass: string; bgClass: string; borderClass: string; textClass: string }> = {
  trigger: {
    label: 'MARKET TRIGGERS',
    color: 'warning',
    glowClass: 'glow-warning',
    bgClass: 'bg-warning/10',
    borderClass: 'border-warning/30',
    textClass: 'text-warning',
  },
  emotion: {
    label: 'EMOTIONAL STATES',
    color: 'danger',
    glowClass: 'glow-danger',
    bgClass: 'bg-danger/10',
    borderClass: 'border-danger/30',
    textClass: 'text-danger',
  },
  behavior: {
    label: 'BEHAVIORS',
    color: 'insight',
    glowClass: 'glow-insight',
    bgClass: 'bg-insight/10',
    borderClass: 'border-insight/30',
    textClass: 'text-insight',
  },
  consequence: {
    label: 'CONSEQUENCES',
    color: 'calm',
    glowClass: 'glow-calm',
    bgClass: 'bg-calm/10',
    borderClass: 'border-calm/30',
    textClass: 'text-calm',
  },
};

export const emotionNodes: EmotionNode[] = [
  // TRIGGERS (external/market)
  {
    id: 't1', label: 'Sudden Market Spikes', zone: 'trigger',
    description: 'Liquidity sweeps and sudden price movements that catch traders off guard.',
    connections: ['e1', 'e2', 'b1'],
  },
  {
    id: 't2', label: 'News Spikes (CPI, FOMC)', zone: 'trigger',
    description: 'Unexpected economic data releases and Fed speaker announcements creating volatile conditions.',
    connections: ['e1', 'e5', 'b3'],
  },
  {
    id: 't3', label: 'PnL Swings (+ to −)', zone: 'trigger',
    description: 'Your P&L goes from positive to negative in a split second. "What just happened?!"',
    connections: ['e2', 'e3', 'b2', 'b5'],
    innerVoice: 'What just happened?! I was up and now I\'m down!',
  },
  {
    id: 't4', label: 'PnL Swings (− to +)', zone: 'trigger',
    description: 'Your P&L goes from negative to a huge gain in a split second.',
    connections: ['e4', 'b7', 'b8'],
    innerVoice: 'Look at me, I\'m the sh*t!! I knew it!',
  },
  {
    id: 't5', label: 'Price Wicks Your SL', zone: 'trigger',
    description: 'Price barely wicks your stop loss, then reverses. Your trade would have worked.',
    connections: ['e1', 'e3', 'b4'],
    innerVoice: 'Are you kidding me?! It would have worked!',
  },
  {
    id: 't6', label: 'Algorithmic Stop Runs', zone: 'trigger',
    description: 'Institutional algorithms hunting stop losses, triggering you out before the move.',
    connections: ['e3', 'e6', 'b4'],
  },
  {
    id: 't7', label: 'Overnight Gaps', zone: 'trigger',
    description: 'Market opens significantly different from close, destroying overnight positions.',
    connections: ['e1', 'e2', 'b1'],
  },
  {
    id: 't8', label: 'Broker Slippage / Tech Glitches', zone: 'trigger',
    description: 'Platform crashes, data feed delays, internet lag — technology failing at the worst moment.',
    connections: ['e3', 'e6', 'b5'],
  },
  {
    id: 't9', label: 'Target Missed by 1 Tick', zone: 'trigger',
    description: 'Price comes 1 tick from your target then reverses. So close yet so far.',
    connections: ['e3', 'e5', 'b6'],
    innerVoice: 'One tick! ONE TICK! This market is rigged!',
  },
  {
    id: 't10', label: 'Volatility Compression → Expansion', zone: 'trigger',
    description: 'NQ volatility compression suddenly expanding, catching the unprepared.',
    connections: ['e1', 'b1', 'b3'],
  },
  {
    id: 't11', label: 'Black Swan Events', zone: 'trigger',
    description: 'Unprecedented market events that no plan accounted for.',
    connections: ['e1', 'e2', 'c1'],
  },
  {
    id: 't12', label: 'Prop Firm Rule Changes', zone: 'trigger',
    description: 'Prop firms changing rules mid-evaluation, causing emotional destabilization.',
    connections: ['e3', 'e6', 'b5'],
    innerVoice: 'They changed the rules on me! This isn\'t fair!',
  },

  // EMOTIONS (internal states)
  {
    id: 'e1', label: 'Fear', zone: 'emotion',
    description: 'Fear of blowing the account. Fear of not paying bills. Fear of giving back profits. Fear of missing the move.',
    connections: ['b1', 'b4', 'b6', 'b9'],
    innerVoice: 'What if I lose it all? What about the bills?',
  },
  {
    id: 'e2', label: 'Panic / Shock', zone: 'emotion',
    description: 'The paralysis when everything goes wrong at once. Can\'t think, can\'t act.',
    connections: ['b1', 'b2', 'c1'],
  },
  {
    id: 'e3', label: 'Anger / Revenge', zone: 'emotion',
    description: '"The market did this to me!" Feeling cheated, wanting to fight back, wanting to get even.',
    connections: ['b5', 'b7', 'b8'],
    innerVoice: 'The market did this to me! I\'ll get it back!',
  },
  {
    id: 'e4', label: 'Overconfidence / Ecstasy', zone: 'emotion',
    description: 'The dangerous high after 2-3 wins. Feeling invincible. "Look at me, I\'m the sh*t!"',
    connections: ['b7', 'b8', 'b3'],
    innerVoice: 'I\'m on fire! I can\'t lose! Let me size up!',
  },
  {
    id: 'e5', label: 'FOMO / Impatience', zone: 'emotion',
    description: 'Fear of missing out. Desire to "be right." Need to make the day green. Boredom clicking.',
    connections: ['b3', 'b7', 'b10'],
    innerVoice: 'I need to be in this! The move is happening without me!',
  },
  {
    id: 'e6', label: 'Frustration / Tilt', zone: 'emotion',
    description: 'Knew what the market was going to do but didn\'t listen. Self-doubt after 2 losses. Shame from breaking rules.',
    connections: ['b5', 'b8', 'b10'],
    innerVoice: 'I knew it! Why didn\'t I listen to myself?!',
  },
  {
    id: 'e7', label: 'Hope Replacing Logic', zone: 'emotion',
    description: 'When hope takes over analysis. "Just one more trade to top off." Emotional attachment to bias.',
    connections: ['b2', 'b4', 'b6'],
    innerVoice: 'It\'ll come back... just hold a little longer...',
  },
  {
    id: 'e8', label: 'Life Pressure Bleeding In', zone: 'emotion',
    description: 'Can\'t pay car payment. Can\'t buy gifts for wife or kids. Trading to escape family pressures. Non-trading stress bleeding in.',
    connections: ['b3', 'b10', 'b11'],
    innerVoice: 'If I win this... I can show everyone I\'m a trader now.',
  },
  {
    id: 'e9', label: 'Need for Validation', zone: 'emotion',
    description: 'Comparing yourself to other traders. Trading to prove something. Fear of public failure in journals/groups.',
    connections: ['b7', 'b8', 'b10'],
    innerVoice: 'If I win... I can show everyone I\'m a trader now.',
  },

  // BEHAVIORS (controllable actions)
  {
    id: 'b1', label: 'Moving Stops', zone: 'behavior',
    description: 'Moving your stop loss further away, turning a small loss into a potential catastrophe.',
    connections: ['c1', 'c2'],
  },
  {
    id: 'b2', label: 'DCA Into Losers', zone: 'behavior',
    description: 'Adding to a losing trade impulsively. Creating that nervous feeling when you know you\'re oversized.',
    connections: ['c1', 'c3'],
    innerVoice: 'That nervous feeling when you know you oversized & could blow the account...',
  },
  {
    id: 'b3', label: 'Impulsive Entry / No Setup', zone: 'behavior',
    description: 'Clicking without confirmation. Entering without stop defined. Trading without a written plan.',
    connections: ['c2', 'c3'],
  },
  {
    id: 'b4', label: 'Ignoring Max Loss Rules', zone: 'behavior',
    description: 'Trading past daily stop. We don\'t add to losers. We don\'t do that.',
    connections: ['c1', 'c4'],
    innerVoice: 'We don\'t oversize... We don\'t do that. But...',
  },
  {
    id: 'b5', label: 'Revenge Trading', zone: 'behavior',
    description: 'Trading to "get back" what was lost. Forcing trades when no setup exists.',
    connections: ['c1', 'c3', 'c4'],
  },
  {
    id: 'b6', label: 'Taking Profits Too Early', zone: 'behavior',
    description: 'Cutting winners short out of fear. Reducing size emotionally when the trade is working.',
    connections: ['c5'],
  },
  {
    id: 'b7', label: 'Oversizing / Increasing Size', zone: 'behavior',
    description: 'Increasing size impulsively after wins. Trying to make up for losses with bigger bets.',
    connections: ['c1', 'c3'],
  },
  {
    id: 'b8', label: 'Overtrading', zone: 'behavior',
    description: 'Overtrading after first loss. Overtrading after first win. "Just one more trade."',
    connections: ['c2', 'c3', 'c4'],
    innerVoice: 'Just 1 more trade to top off...',
  },
  {
    id: 'b9', label: 'Not Trading (Paralysis)', zone: 'behavior',
    description: 'Fear of stopping too early. Fear of trading too late. Frozen by analysis paralysis.',
    connections: ['c5', 'c6'],
  },
  {
    id: 'b10', label: 'Trading While Impaired', zone: 'behavior',
    description: 'Trading during fatigue. Trading while distracted. Checking social media mid-trade. Trading when emotionally charged.',
    connections: ['c2', 'c3'],
  },
  {
    id: 'b11', label: 'Not Journaling', zone: 'behavior',
    description: 'Not journaling losses. Not journaling wins. Can\'t break rules if you never had any to begin with.',
    connections: ['c4', 'c6'],
    innerVoice: 'You can\'t break rules if you didn\'t have any to begin with!',
  },

  // CONSEQUENCES
  {
    id: 'c1', label: 'Blown Account', zone: 'consequence',
    description: 'Blowing 7 days of work, and a PA live account. The ultimate consequence of edge leaks.',
    connections: [],
    innerVoice: 'I knew I shouldn\'t have done that. I knew that wasn\'t going to work!',
  },
  {
    id: 'c2', label: 'Death by 1000 Cuts', zone: 'consequence',
    description: 'Slow bleed of small losses from undisciplined trading. Each one feels manageable until they\'re not.',
    connections: [],
  },
  {
    id: 'c3', label: 'Emotional Exhaustion', zone: 'consequence',
    description: 'Trying to control the uncontrollable → emotional exhaustion. The burnout of fighting yourself.',
    connections: [],
    innerVoice: 'Red day — you suck! You\'re just like the last times when you blew accounts.',
  },
  {
    id: 'c4', label: 'Cycle Repeats', zone: 'consequence',
    description: 'Same patterns, different day. Without awareness and journaling, the cycle never breaks.',
    connections: [],
  },
  {
    id: 'c5', label: 'Reduced Edge', zone: 'consequence',
    description: 'Every controllable trigger = edge leak. Your system works, but you don\'t let it.',
    connections: [],
  },
  {
    id: 'c6', label: 'Lost Self-Trust', zone: 'consequence',
    description: 'Self-doubt compounds. Feeling small after a big loss. "I\'m not cut out for this."',
    connections: [],
    innerVoice: 'Maybe I\'m not cut out for this...',
  },
];
