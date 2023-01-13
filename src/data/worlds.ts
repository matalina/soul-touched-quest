import { OccultSkill, VenatoriHunter } from './soul-touched/types';
import { Dragon, EmbracedVampire, HumanPath, Minorem, MundaneHuman, Netherborn, PrimevalVampire, SussuriWitch, Therian, Venatori } from './soul-touched/species';
import type { World, WorldList } from './types'

const NormalWorld: World = {
  name: 'Normal World',
  packages: {},
}

const SoulTouched: World = {
  name: 'Soul Touched',
  skills: {
    occult: {stat: {base:0}, skill:OccultSkill},
  },
  professionLevels: [VenatoriHunter],
  stats: {
    umbra: {
      stat: {base:0},
      modifiers: ['skills.occult'],
    },
    charges: {
      stat: {base:3},
      modifiers: ['stats.umbra'],
    },
    hunger: {
      stat: {base:0},
    }
  },
  packages: {
    species: {
      name: 'Species',
      packages: {
        'mundane-human': MundaneHuman,
        'human-path': HumanPath,
        'sussuri-witch': SussuriWitch,
        'embraced-vampire': EmbracedVampire,
        'primeval-vampire': PrimevalVampire,
        'therian': Therian,
        'dragon': Dragon,
        'netherborn': Netherborn,
        'venatori': Venatori,
        'minorem': Minorem,
      }
    }
  }
}

export const worlds: WorldList = {
  normal: NormalWorld,
  'soul-touched': SoulTouched,
};