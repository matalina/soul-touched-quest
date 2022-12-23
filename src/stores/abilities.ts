import type { Ability, AbilityList } from "./types";

const TherianCarrier = {
  name: 'Therian Carrier',
  cost: -2,
  atCreation: true,
  type: 'flavor',
  description: 'You were bitten by a therian, but you do not change form or gain any added benefits from the disease that now runs through your veins.  You now have essentially an STD and any transfer of bodily fluids between you and another being has a CR 10 of passing the therianthropy disease on to the other being. (-1)\n\nRecord what type of Therian bit you.',
  granted: ['rage'],
} as Ability;

const Rage = {
  name: 'Rage',
  atCreation: false,
  cost: -1,
  type: 'flavor',
  description: 'You gain +1 Rage on failures and damage taken in any form.  Rage above 10 has a CR 15 to cause a Rage Side effect. Five Rage can be spent as an to fill a spent Umbra charge. 2 Health Points can be spent to reduce Rage by 1 (this damage does not add to the Rage count).',
  granted: ['rage-to-umbra','hp-reduce-rage']
} as Ability;

const RageToUmbra = {
  name: 'Rage to Umbra Charge',
  cost: 0,
  atCreation: false,
  description: 'Five Rage can be spent as an to fill a spent Umbra charge',
  type: 'granted',
} as Ability;

const HealthToReduceRage = {
  name: 'Health Points to Reduce Rage',
  cost: 0,
  atCreation: false,
  description: '2 Health Points can be spent to reduce Rage by 1 (this damage does not add to the Rage count).',
  type: 'granted',
} as Ability;

const ShapeChange = {
  name: 'Shape Change',
  cost: 1,
  atCreation: false,
  description: 'Choose a type of dragon: air, earth, fire, shadow, water\n\nAs an action and expending an umbra charge unless otherwise stated.',
  levels: [
    'You can shift into another persona for 1 hour (You can expend all your umbra charges and change your look/persona permanently, you may not do this again for at least a year and a day)',
    'You can shift into a creature of about your size and shape for one hour',
    'You can shift into a hybrid dragon form for 1 hour',
    'You can shift into a smaller creature for 1 hour',
    'You can shift into your full size dragon form.  Doing so extends all your current umbra charges and it will take you a year and a day to regain enough umbra to shift back to your human form.',
  ],
  type: 'action',
} as Ability;

const DragonBreath = {
  name: 'Dragon\'s Breath',
  cost: 1,
  atCreation: false,
  description: '',
  type: 'action',
} as Ability;

const Hoard = {
  name: 'Hoard',
  cost: -1,
  atCreation: false,
  description: '',
  type: 'flavor',
} as Ability;

const Bloodline = {
  name: 'Bloodline',
  cost: 1,
  atCreation: false,
  description: '',
  type: 'granted',
  //options: [],
} as Ability;

const Mesmerize = {
  name: 'Mesmerize',
  cost: 1,
  atCreation: false,
  description: '',
  type: 'bonus-action',
} as Ability;

const VampireBite = {
  name: 'VampireBite',
  cost: 1,
  atCreation: false,
  description: '',
  type: 'action',
  //damage:[],
} as Ability;

const Bloodlust = {
  name: 'Bloodlust',
  cost: -1,
  atCreation: false,
  description: '',
  type: 'granted',
} as Ability;

const VulnerableFire = {
  name: 'Vulnerable to Fire',
  cost: -1,
  atCreation: true,
  description: '',
  type: 'granted',
} as Ability;

const VulnerableRadiant = {
  name: 'Vulnerable to Radiant',
  cost: -1,
  atCreation: true,
  description: '',
  type: 'granted',
} as Ability;

const PathicLine = {
  name: 'Pathic Line',
  cost: 1,
  atCreation: true,
  description: '',
  type: 'granted',
  options: [],
} as Ability;

export const abilities = { 
  'shape-change': ShapeChange,
  'dragon-breath': DragonBreath,
  'hoard': Hoard,
  'bloodline': Bloodline,
  'mesmerize': Mesmerize,
  'vampire-bite': VampireBite,
  'bloodlust': Bloodlust,
  'vulnerable-fire': VulnerableFire,
  'vulnerable-radiant': VulnerableRadiant,
  'pathic-line':  PathicLine,
  'therian-carrier': TherianCarrier,
  'rage': Rage,
  'rage-to-umbra': RageToUmbra,
  'hp-reduce-rage': HealthToReduceRage,
} as AbilityList;
