import { writable } from "svelte/store";

export interface PlayerCharacter {
  name: string;
  age: number;
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

export interface Skill {
  name: string;
  value: number;
  description: string;
  skills?: Skill[];
  modifiers?: Modifier[];
}

export interface Dice {
  side: number;
  count: number;
  modifiers?: Modifier[];
}

export interface Modifier {
  type: string;
  value: number;
}

export interface SpecialStat {
  name: string;
  value: string;
  challengeRating: number;
  sideEffects: SideEffect[];
  reduceMethod: ReduceMethod[];
}

export interface SideEffect {
  description: string;
  range: [number|null, number|null];
}

export interface ReduceMethod {
  description: string;
  reductionValue: number;
  costValue: number;
  costType: string;
}

export interface Ability {
  name: string;
  description: string;
  type: string; // action, bonus action, reaction, granted, flavor
  cost: number,
  atCreation: boolean;
  levels?: string[],
  grant?: keyof AbilityList[], // keys of AbilityList
  options?: string[],
}

export interface AbilityList {
  [key: string]: Ability;
}

export interface Reputation {
  name: string;
  value: number; // the average of the absolute value of all reputations
  reputations?: Reputation[];
}

export interface MaxCurrent {
  max: number;
  current: number;
}

export interface Level {
  value: number;
  unspentPoints: number;
}

export interface LogEntry {
  timestamp: number;
  type: string;
  data: {
    [key:string]: any;
   }
}

export interface Species {
  name: string;
  description: string;
  hitDiceSide: number;
  speed: number;
  physical: number;
  mental: number;
  social: number;
  occult: number;
  health: number;
  umbra: number;
  wealth: number;
  morality: number;
  reputation: number;
  pointsToSpend: number;
  abilities?: {
    [key: keyof AbilityList]: number|null;
  }
  flavor?: string[];
}

export interface SpeciesList {
  [key: string]: Species;
}

export interface Vulnerable {
  type: string;
  description: string;
}