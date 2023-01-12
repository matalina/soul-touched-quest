import type { Package } from "../types";

const MundaneHuman: Package = {
  name: 'Mundane Human',
  id: 'mundane-human',
  description: '',
  cost: -1, // add 1 point to total amount spendable
  stats: {
    speed: { type: 'start', value: 6 },
    umbra: { type: 'change', value: -1 },
  },
  skills: {
    social: { type: 'change', value: 1 },
    occult: { type: 'change', value: -1 },
  }
};

const Dragon: Package = {
  name: 'Dragon',
  id: 'dragon',
  description: '',
  cost: 7,
  stats: {
    speed: { type: 'start', value: 7 },
    umbra: { type: 'change', value: 1},
    wealth: { type: 'change', value: 1 },
  },
  skills: {
    mental: { type: 'change', value: 1},
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'shape-change': { type: 'change', value: 1 },
    'dragon-breath':{ type: 'change', value: 1 },
    'hoard': { type: 'grant', value: 1 },
  },
  reputation: { type: 'change', value: 1},
};

const EmbracedVampire: Package = {
  name: 'Embraced Vampire',
  id: 'embraced-vampire',
  description: '',
  cost: 4,
  stats: {
    speed: { type: 'start', value: 7 },
    hits: { type: 'change', value: 1},
    umbra: { type: 'change', value: 1},
    wealth: { type: 'change', value: 1},
    morality: { type: 'change', value: -1},
  },
  skills: {
    physical: { type: 'change', value: 1},
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'bloodline': { type: 'change', value: 1},
    'mesmerize': { type: 'change', value: 1},
    'vampire-bite': { type: 'grant', value: 1 },
    'bloodlust': { type: 'grant', value: 1 },
    'vulnerable-fire': { type: 'grant', value: 1 },
    'vulnerable-radiant': { type: 'grant', value: 1 },
  },
};

const HumanPath: Package = {
  name: 'Human Path',
  description: '',
  id: 'human-path',
  cost: 5,
  stats: {
    speed: { type: 'start', value: 6 },
    umbra: { type: 'change', value: 1},
  },
  skills: {
    mental: { type: 'change', value: 1},
    social: { type: 'change', value: 1},
    occult: { type: 'change', value: 1},
    },
  abilities: {
    'pathic-line': { type: 'change', value: 1},
  },
};

const Minorem: Package = {
  name: 'Minorem',
  description: '',
  id: 'minorem',
  cost: 7,
  stats: {
    speed: { type: 'start', value: 6 },
    hits: { type: 'change', value: 1},
    umbra: { type: 'change', value: 1},
    wealth: { type: 'change', value: 1},
    morality: { type: 'start', value: 0 }
  },
  skills: {
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'personal-veil': { type: 'grant', value: 1 },
    'venatori-trained': { type: 'grant', value: 1 },
    'pathic-line': { type: 'change', value: 1},
    'magnus': { type: 'change', value: 1},
  },
  reputation: { type: 'change', value: -2 },
};

const Netherborn: Package = {
  name: 'Netherborn',
  description: '',
  id: 'netherborn',
  cost: 6,
  stats: {
    speed: { type: 'start', value: 6 },
    hits: { type: 'change', value: 1},
    umbra: { type: 'change', value: 1},
    wealth: { type: 'change', value: 1},
  },
  skills: {
    physical: { type: 'change', value: 1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'shape-change': { type: 'change', value: 1},
    'dragon-breath': { type: 'change', value: 1},
    'hoard': { type: 'grant', value: 1 },
  },
};

const PrimevalVampire: Package = {
  name: 'Primeval Vampire',
  description: '',
  id: 'primeval-vampire',
  cost: 6,
  stats: {
    speed: { type: 'start', value: 7 },
    hits: { type: 'change', value: 1},
    umbra: { type: 'change', value: 1},
    wealth: { type: 'change', value: 1},
    morality: { type: 'change', value: -1},
  },
  skills: {
    physical: { type: 'change', value: 1},
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'bloodline': { type: 'change', value: 1},
    'bloodlust': { type: 'grant', value: 1 },
    'mesmerize': { type: 'change', value: 1},
    'vampire-bite': { type: 'change', value: 1},
    'shadow-walk': { type: 'change', value: 1},
    'vulnerable-fire': { type: 'grant', value: 1 },
  },
};

const SussuriWitch: Package = {
  name: 'Sussuri Witch',
  description: '',
  id: 'sussuri Witch',
  cost: 2,
  stats: {
    speed: { type: 'start', value: 6 },
    umbra: { type: 'change', value: 1},
  },
  skills: {
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    craft: { type: 'change', value: 1} ,
  },
};

const Therian: Package = {
  name: 'Therian',
  description: '',
  id: 'therian',
  cost: 3,
  stats: {
    speed: { type: 'start', value: 7 },
    hits: { type: 'change', value: 1},
    },
  skills: {
    physical: { type: 'change', value: 1},
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'therian-beast': { type: 'change', value: 1},
    'rage': { type: 'grant', value: 1 },
  },
  reputation: { type: 'change', value: -1},
};

const Venatori: Package = {
  name: 'Venatori',
  description: '',
  id: 'venatori',
  cost: 10,
  stats: {
    speed: { type: 'start', value: 7 },
    hits: { type: 'change', value: 1},
    umbra: { type: 'change', value: 1},
    wealth: { type: 'change', value: 1},
    morality: { type: 'start', value: 0},
  },
  skills: {
    physical: { type: 'change', value: 1},
    mental: { type: 'change', value: 1},
    social: { type: 'change', value: -1},
    occult: { type: 'change', value: 1},
  },
  abilities: {
    'personal-veil': { type: 'grant', value: 1 },
    'venatori-trained': { type: 'grant', value: 1 },
    'pathic-line': { type: 'change', value: 1},
  },
  reputation: { type: 'change', value: -1},
};

export {
  MundaneHuman,
  Dragon,
  EmbracedVampire,
  Netherborn,
  HumanPath,
  SussuriWitch,
  PrimevalVampire,
  Minorem,
  Venatori,
  Therian,
};