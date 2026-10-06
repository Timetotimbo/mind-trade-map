import { emotionNodes, type EmotionNode } from './emotionData';

/** The map as a graph: each card leads to its `connections`. */
export const byId = new Map(emotionNodes.map(n => [n.id, n]));
const parents = new Map<string, string[]>();
for (const n of emotionNodes) for (const c of n.connections) parents.set(c, [...(parents.get(c) || []), n.id]);

const walk = (start: string, next: (id: string) => string[]) => {
  const seen = new Set<string>();
  const stack = [start];
  while (stack.length) for (const id of next(stack.pop()!)) if (!seen.has(id)) { seen.add(id); stack.push(id); }
  return seen;
};
/** Everything that can lead to this card (its causes, and their causes). */
export const upstream = (id: string) => walk(id, x => parents.get(x) || []);
/** Everything this card can lead to. */
export const downstream = (id: string) => walk(id, x => byId.get(x)?.connections || []);

/** The whole chain through a card: what leads to it, it, and where it leads. */
export function chainOf(id: string) {
  const up = new Set([...upstream(id), id]);
  const down = new Set([...downstream(id), id]);
  return {
    nodes: new Set([...up, ...down]),
    // A line is part of the chain when both its ends are on the same side of the card
    edge: (from: string, to: string) => (up.has(from) && up.has(to)) || (down.has(from) && down.has(to)),
  };
}

export const nodesOf = (ids: Iterable<string>, zone?: EmotionNode['zone']) =>
  emotionNodes.filter(n => [...ids].includes(n.id) && (!zone || n.zone === zone));
