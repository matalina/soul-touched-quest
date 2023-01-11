import type { Skill } from "../types";

export const OccultSkill: Skill = {
  name: 'occult',
  description: 'This is a generic occult skill, this covers the basics all things supernatural and magical',
  skills: [],
};

/* export interface Species {
  name: string;
  description: string;
  pointsToSpend: number;
  speed?: Modifier;
  skills?: {
    physical?: Modifier;
    mental?: Modifier;
    social?: Modifier;
    occult?: Modifier;
  },
  hits?: Modifier;
  hitDC?: Modifier;
  umbra?: Modifier;
  wealth?: Modifier;
  morality?: Modifier;
  reputation?: Modifier;
  charges?: Modifier;
  initiative?: Modifier;
  hunger?: Modifier;
  sanity?: Modifier;
  complexity?: Modifier;
  abilities?: {
    [key: keyof AbilityList]: Modifier;
  }
  flavor?: string[];
}

export interface SpeciesList {
  [key: string]: Species;
}

export interface Hunger {
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
} */