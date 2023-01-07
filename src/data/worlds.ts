import { OccultSkill } from './soul-touched/types';
import type { World, WorldList } from './types'

const NormalWorld: World = {
  name: 'Normal World',
}

const SoulTouched: World = {
  name: 'Soul Touched',
  skills: {
    occult: {stat: {base:0}, skill:OccultSkill},
  },
  stats: {
    umbra: {
      stat: {base:0},
      modifiers: ['skills.occult'],
    },
    charges: {
      stat: {base:0},
      modifiers: ['stats.umbra'],
    },
    hunger: {
      stat: {base:0},
    }
  },
  packages: [
    {
      name: 'Species',
      packages: [],
    }
  ]
}

export const worlds: WorldList = {
  normal: NormalWorld,
  'soul-touched': SoulTouched,
};