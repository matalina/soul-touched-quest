import type { Species, SpeciesList } from "./types";

const MundaneHuman = {
  name: 'Mundane Human',
  description: '',
  speed: { type: 'start', value: 6},
  physical: { type: 'change', value: 0},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: 1},
  occult: { type: 'change', value: -1},
  hits: { type: 'change', value: 0},
  umbra: { type: 'change', value: -1},
  wealth: { type: 'change', value: 0},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: 0},
  pointsToSpend: 21,
} as Species;

const Dragon = {
  name: 'Dragon',
  description: '',

  speed: { type: 'start', value: 7},
  physical: { type: 'change', value: 0},
  mental: { type: 'change', value: 1},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 0},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 1},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: 1},
  pointsToSpend: 13,
  abilities: {
    'shape-change': { type: 'change', value: 1},
    'dragon-breath': { type: 'change', value: 1},
    'hoard': null,
  },
} as Species;

const EmbracedVampire = {
  name: 'Embraced Vampire',
  description: '',

  speed: { type: 'start', value: 7},
  physical: { type: 'change', value: 1},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 1},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 1},
  morality: { type: 'change', value: -1},
  reputation: { type: 'change', value: 0},
  abilities: {
    'bloodline': { type: 'change', value: 1},
    'mesmerize': { type: 'change', value: 1},
    'vampire-bite': null,
    'bloodlust': null,
    'vulnerable-fire': null,
    'vulnerable-radiant': null,
  },
  pointsToSpend: 16,
} as Species;

const HumanPath = {
  name: 'Human Path',
  description: '',

  speed: { type: 'start', value: 6},
  physical: { type: 'change', value: 0},
  mental: { type: 'change', value: 1},
  social: { type: 'change', value: 1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 0},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 0},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: 0},
  abilities: {
    'pathic-line': { type: 'change', value: 1},
  },
  pointsToSpend: 15,

} as Species;

const Minorem = {
  name: 'Minorem',
  description: '',

  speed: { type: 'start', value: 6},
  physical: { type: 'change', value: 0},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 1},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 1},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: -2},
  abilities: {
      'personal-veil': null,
      'venatori-trained': null,
      'pathic-line': { type: 'change', value: 1},
      'magnus': { type: 'change', value: 1},
    },
  pointsToSpend: 13
} as Species;

const Netherborn = {
  name: 'Netherborn',
  description: '',

  speed: { type: 'start', value: 6},
  physical: { type: 'change', value: 1},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: 0},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 1},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 1},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: 0},
  abilities: {
    'shape-change': { type: 'change', value: 1},
    'dragon-breath': { type: 'change', value: 1},
    'hoard': null,
  },
  pointsToSpend: 14,
} as Species;

const PrimevalVampire = {
  name: 'Primeval Vampire',
  description: '',

  speed: { type: 'start', value: 7},
  physical: { type: 'change', value: 1},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 1},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 1},
  morality: { type: 'change', value: -1},
  reputation: { type: 'change', value: 0},
  abilities: {
    'bloodline': { type: 'change', value: 1},
    'bloodlust': null,
    'mesmerize': { type: 'change', value: 1},
    'vampire-bite': { type: 'change', value: 1},
    'shadow-walk': { type: 'change', value: 1},
    'vulnerable-fire': null,
  },
  pointsToSpend: 14,
} as Species;

const SussuriWitch = {
  name: 'Sussuri Witch',
  description: '',

  speed: { type: 'start', value: 6},
  physical: { type: 'change', value: 0},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 0},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 0},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: 0},
  abilities: {
    craft: { type: 'change', value: 1} ,
  },
  pointsToSpend: 18,
} as Species;

const Therian = {
  name: 'Therian',
  description: '',

  speed: { type: 'start', value: 7},
  physical: { type: 'change', value: 1},
  mental: { type: 'change', value: 0},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 1},
  umbra: { type: 'change', value: 0},
  wealth: { type: 'change', value: 0},
  morality: { type: 'change', value: 0},
  reputation: { type: 'change', value: -1},
  abilities: {
    'therian-beast': { type: 'change', value: 1},
    'rage': null,
  },
  pointsToSpend: 17,
} as Species;

const Venatori = {
  name: 'Venatori',
  description: '',

  speed: { type: 'start', value: 7},
  physical: { type: 'change', value: 1},
  mental: { type: 'change', value: 1},
  social: { type: 'change', value: -1},
  occult: { type: 'change', value: 1},
  hits: { type: 'change', value: 1},
  umbra: { type: 'change', value: 1},
  wealth: { type: 'change', value: 1},
  morality: { type: 'change', value: -1},
  reputation: { type: 'change', value: -1},
  abilities: {
    'personal-veil': null,
    'venatori-trained': null,
    'pathic-line': { type: 'change', value: 1},
  },
  pointsToSpend: 10,
} as Species;

export const species = {
  'mundane-human':  MundaneHuman,
  'dragon': Dragon,
  'embraced-vampire': EmbracedVampire,
  'human-path': HumanPath,
  'minorem': Minorem,
  'netherborn': Netherborn,
  'primeval-vampire': PrimevalVampire,
  'sussuri-witch': SussuriWitch,
  'therian': Therian,
  'venatori': Venatori,
} as SpeciesList;