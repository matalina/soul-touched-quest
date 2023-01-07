export interface Skill {
  name: string;
  description: string;
  skills?: Skill[];
}

export interface Stat {
  base: number;
  modifiers?: {
    [key: string]: Modifier|undefined;
  }
}

export interface PlayerCharacter {
  name: string;
  age: number;
  species: string;
  level: Level;
  episodes: number;
  points: number;
  concept: string;
  calling: string;
  flaw: string;
  skills: {
    [key: keyof SkillList]: Stat;
  };
  hits: MaxCurrent;
  hitDC: Stat;
  saves: DeathSave[];
  umbra: Stat
  charges: MaxCurrent;
  wealth: Stat;
  profession: string;
  professionLevel: number;
  initiative: number;
  morality: Stat; // right/wrong
  complexity: Stat; // order/chaos
  sanity: Stat;
  reputation: Reputation;
  speed: Stat;
  hunger?: Hunger[];
  abilities: {
    [key: keyof AbilityList]: Stat;
  }|[];
  log: LogEntry[]|[];
}

export interface DeathSave {
  result: boolean; // true = save, false = fail
}

export interface MaxCurrent {
  max: Stat;
  current: number;
}

export interface Modifier {
  type: string;
  value: number;
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
}

export interface Ability {
  name: string;
  description: string;
  type: string; // action, bonus action, reaction, granted, flavor
  cost: number;
  atCreation: boolean;
  levels?: keyof AbilityList[]
  grant?: keyof AbilityList[],
  options?: keyof AbilityList[],
}

export interface SpeciesAbility extends Ability {
  species: keyof SpeciesList[];
}

export interface GrantedAbility extends Ability {
  canBuy: false;
}

export interface LevelAbilitiy extends Ability {
  level: number;
  parent: keyof AbilityList;
}

export interface AttackAbility extends Ability {
  damage: string;
  damageType: string;
  damageCost?: number;
  costType?: string;
}

export interface AttackLevelAbility extends LevelAbilitiy, AttackAbility {};

export interface SkillList {
  [key: string]: Skill;
}

export interface AbilityList {
  [key: string]: Ability;
}

export interface Reputation {
  name: string;
  value: Stat; // the average of the absolute value of all reputations not zero
  reputations?: Reputation[]|[];
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

export interface Modifier {
  type: string; // change, start
  value: number;
}

export interface SpeciesList {
  [key: string]: Species;
}

export interface Vulnerable {
  type: string;
  description: string;
}