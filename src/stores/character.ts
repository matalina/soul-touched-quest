import { writable } from "svelte/store";

export interface PlayerCharacter {
  name: string;
  age: string;
  species: string;
  level: Level;
  concept: string;
  skills: Skill[];
  healthPoints: MaxCurrent;
  hitDice: Dice;
  umbra: number;
  umbraCharges: MaxCurrent;
  wealthBonus: number;
  morality: number; // right/wrong
  complexity: number; // order/chaos
  reputation: Reputation;
  speed: number;
  special?: SpecialStat;
  abilities: Ability[];
  log: LogEntry[];
}

export const character = writable({
  name: ''
} as PlayerCharacter);

interface Skill {
  name: string;
  value: number;
  description: string;
  skills?: Skill[];
  modifiers?: Modifier[];
}

interface Dice {
  side: number;
  count: number;
  modifiers?: Modifier[];
}

interface Modifier {
  type: string;
  value: number;
}

interface SpecialStat {
  name: string;
  value: string;
  challengeRating: number;
  sideEffects: SideEffect[];
  reduceMethod: ReduceMethod[];
}

interface SideEffect {
  description: string;
  range: [number|null, number|null];
}

interface ReduceMethod {
  description: string;
  reductionValue: number;
  costValue: number;
  costType: string;
}

interface Ability {
  name: string;
  description: string;
  type: string; // action, bonus action, reaction, granted
}

interface Reputation {
  name: string;
  value: number; // the average of the absolute value of all reputations
  reputations?: Reputation[];
}

interface MaxCurrent {
  max: number;
  current: number;
}

interface Level {
  value: number;
  unspentPoints: number;
}

interface LogEntry {
  timestamp: number;
  change: { }
}