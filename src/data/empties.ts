import { MentalSkill, PhysicalSkill, SocialSkill } from "./skills";
import type { ChallengeRating, HitPool, PlayerCharacter } from "./types";

export const emptyLevel: ChallengeRating = {
  cr: 1,
  nextLevel: {
    episodes: 0,
    unspentPoints: 20,
  }
}

export const emptyHitPool: HitPool = {
  current: 5,
  tempHits: 0,
}

export const emptyCharacter: PlayerCharacter = {
  name: '',
  world: '',
  age: 0,
  concept: '',
  calling: '',
  flaw: '',
  level: emptyLevel,
  currentHits: emptyHitPool,
  saves: [],
  stats: {
    maxHits: {base:5},
    hitDC: {base:10},
    morality: {base:5},
    complexity: {base:0},
    sanity: {base:8},
    wealth: {base:0},
    speed: {base:0},
    initiative: {base:0},
  },
  abilities: {},
  skills: {
    physical: { stat: {base:0}, skill: PhysicalSkill },
    mental: { stat: {base:0}, skill: MentalSkill },
    social: { stat: {base:0}, skill: SocialSkill },
  },
  reputation: {name: 'overall', value: {base:0}, reputations: []},
  log: [],
};