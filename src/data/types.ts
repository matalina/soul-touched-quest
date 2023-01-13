export type DotString = string;

const modifiers = [
  'start', 'change', 'grant'
];
export type ModifierType = typeof modifiers[number];

export interface Modifier {
  type: ModifierType;
  value: number;
}

export interface Stat {
  base: number;
  modifiers?: {
    [key: string]: Modifier;
  }
}
export interface StatList {
  [key: string]: Stat;
}

export interface RuleStat{
  stat: Stat;
  modifiers?: DotString[];
}

export interface RuleList {
  [key: string]: RuleStat;
}

export interface Package {
  name: string;
  description: string;
  id: string;
  cost: number;
  stats?: {
    [key: string]: Modifier;
  };
  skills?: {
    [key: string]: Modifier;
  };
  abilities?: {
    [key: string]: Modifier;
  },
  reputation?: Modifier;
}

export interface PackageList {
  [key: string]: {
    name: string;
    packages: {
      [key: string]: Package;
    }
  }
}

export interface World {
  name: string;
  stats?: {
    [key: keyof RuleList]: RuleStat;
  };
  skills?: {
    [key: keyof SkillList]: SkillStat;
  };
  professionLevels?: ProfessionLevel[];
  packages: PackageList;
}

export interface WorldList {
  [key: string]: World;
}
export interface Skill {
  name: string;
  description: string;
  skills?: Skill[];
}

export interface SkillStat {
  stat: Stat;
  skill: Skill;
}

export interface SkillList {
  [key: string]: Skill;
}

const actions = [
  'action','reaction','bonus-action','granted', 'attack'
] as const;
export type ActionType = typeof actions[number];

export interface Ability {
  name: string;
  description: string;
  type: ActionType;
  cost: number;
  atCreation?: boolean;
  levels?: keyof AbilityList[]
  grant?: keyof AbilityList[],
  options?: keyof AbilityList[],
}

export interface AbilityList {
  [key: string]: {
    modifiers?: Modifier;
    ability: Ability;
  }
}

export interface DeathSave {
  result: boolean; // true = save, false = fail
}

export interface HitPool {
  current: number;
  tempHits: number;
}

export interface Reputation {
  name: string;
  value: Stat; // the average of the absolute value of all reputations not zero
  reputations?: Reputation[]|[];
}

export interface ChallengeRating {
  cr: number;
  nextLevel?: NextLevel;
}

export interface NextLevel {
  episodes: number;
  unspentPoints: number;
}

export interface LogEntry {
  timestamp: number;
  type: string;
  data: {
    [key:string]: any;
   }
}

export interface PlayerCharacter extends Character {
  log: LogEntry[];
}

export interface Character extends Creature {
  age: number;
  concept: string;
  calling: string;
  flaw: string;
  profession: Profession;
}

export interface Profession {
  name: string;
  level: ProfessionLevel;
  skill: Skill;
};

export interface ProfessionLevel {
  name: string;
  description: string;
  wealth: Modifier;
  minAge?: number;
  morality?: Modifier;
}

export interface Creature {
  world: keyof WorldList;
  name: string;
  level: ChallengeRating;
  currentHits: HitPool;
  saves: DeathSave[];
  stats: {
    hits: Stat;
    hitDC: Stat;
    wealth: Stat;
    initiative: Stat;
    morality: Stat; // right/wrong
    complexity: Stat; // order/chaos
    sanity: Stat;
    speed: Stat;
    [key: keyof StatList]: Stat;
  };
  skills: {
    [key: keyof SkillList]: SkillStat;
  };
  abilities: {
    [key: keyof AbilityList]: Ability;
  };
  reputation: Reputation;
}