import type { Ability, AbilityList, AttackLevelAbility, GrantedAbility, LevelAbilitiy, SpeciesAbility, SpeciesList } from "./types";

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
  granted: ['rage-to-umbra','hp-reduce-rage'],
  canBuy: false,
} as GrantedAbility;

const RageToUmbra = {
  name: 'Rage to Umbra Charge',
  cost: 0,
  atCreation: false,
  description: 'Five Rage can be spent as an to fill a spent Umbra charge',
  type: 'granted',
  canBuy: false,
} as GrantedAbility;

const HealthToReduceRage = {
  name: 'Health Points to Reduce Rage',
  cost: 0,
  atCreation: false,
  description: '2 Health Points can be spent to reduce Rage by 1 (this damage does not add to the Rage count).',
  type: 'granted',
  canBuy: false,
} as GrantedAbility;

const ShapeChange = {
  name: 'Shape Change',
  cost: 1,
  atCreation: false,
  description: 'Choose a type of dragon: air, earth, fire, shadow, water\n\nAs an action and expending an umbra charge unless otherwise stated.',
  levels: [ 
    'shape-change-persona',
    'shape-change-medium',
    'shape-change-hybrid-dragon',
    'shape-change-small',
    'shape-change-dragon',
  ] as unknown as keyof AbilityList[],
  type: 'action',
  species: ['dragon','netherborn'] as unknown as keyof SpeciesList[],
} as SpeciesAbility;

const ShapeChangeMedium =  {
  name: 'Shape Change - Medium Size',
  description: 'You can shift into a creature of about your size and shape for one hour',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 2,
  parent: 'shape-change',
} as LevelAbilitiy;

const ShapeChangeDragon =  {
  name: 'Shape Change - Full Dragon Form',
  description: 'You can shift into your full size dragon form.  Doing so extends all your current umbra charges and it will take you a year and a day to regain enough umbra to shift back to your human form.',
  cost: 2,
  atCreation: false,
  type: 'action',
  level: 5,
  parent: 'shape-change',
} as LevelAbilitiy;

const ShapeChangeSmall =  {
  name: 'Shape Change - Small Size',
  description: 'You can shift into a smaller creature for 1 hour',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 4,
  parent: 'shape-change',
} as LevelAbilitiy;

const ShapeChangeHybridDragon =  {
  name: 'Shape Change - Hybrid Dragon Form',
  description: 'You can shift into a hybrid dragon form for 1 hour',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 3,
  parent: 'shape-change',
} as LevelAbilitiy;

const ShapeChangePersona = {
  name: 'Shape Change - Persona',
  description: 'You can shift into another persona for 1 hour (You can expend all your umbra charges and change your look/persona permanently, you may not do this again for at least a year and a day)',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 1,
  parent: 'shape-change',
} as LevelAbilitiy;

const DragonBreath = {
  name: 'Dragon\'s Breath',
  cost: 1,
  atCreation: false,
  description: 'Whatever type chosen for shape change will be the damage type of your dragon\'s breathe. It will create a 15ft cone in front of the dragon in any form',
  type: 'action',
  species: ['dragon','netherborn'] as unknown as keyof SpeciesList[],
  levels: [
    'dragon-breath-attack-1',
    'dragon-breath-attack-2',
    'dragon-breath-attack-3',
    'dragon-breath-attack-4',
    'dragon-breath-attack-5',
  ] as unknown as keyof AbilityList,
} as SpeciesAbility;

const DragonBreathAttack1 = {
  name: 'Dragon Breath Attack 1',
  description: '1d8+:physical: expending 1 umbra charge',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 1,
  parent: 'dragon-breath',
  damage: '1d8+:physical:',
  damageType: 'dragon type',
  damageCost: 1,
  costType: 'umbra charge',
} as AttackLevelAbility;

const DragonBreathAttack2 = {
  name: 'Dragon Breath Attack 2',
  description: '2d8+:physical: expending 1 umbra charge',
  cost: 2,
  atCreation: false,
  type: 'action',
  level: 1,
  parent: 'dragon-breath',
  damage: '2d8+:physical:',
  damageType: 'dragon type',
  damageCost: 1,
  costType: 'umbra charge',
} as AttackLevelAbility;

const DragonBreathAttack3 = {
  name: 'Dragon Breath Attack 3',
  description: '3d8+:physical: expending 1 umbra charge',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 3,
  parent: 'dragon-breath',
  damage: '3d8+:physical:',
  damageType: 'dragon type',
  damageCost: 1,
  costType: 'umbra charge',
} as AttackLevelAbility;

const DragonBreathAttack4 = {
  name: 'Dragon Breath Attack 4',
  description: '4d8+:physical: expending 2 umbra charge',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 4,
  parent: 'dragon-breath',
  damage: '4d8+:physical:',
  damageType: 'dragon type',
  damageCost: 2,
  costType: 'umbra charge',
} as AttackLevelAbility;

const DragonBreathAttack5 = {
  name: 'Dragon Breath Attack 1',
  description: '5d8+:physical: expending 3 umbra charge',
  cost: 1,
  atCreation: false,
  type: 'action',
  level: 5,
  parent: 'dragon-breath',
  damage: '5d8+:physical:',
  damageType: 'dragon type',
  damageCost: 3,
  costType: 'umbra charge',
} as AttackLevelAbility;

const Hoard = {
  name: 'Hoard',
  cost: -1,
  atCreation: false,
  description: 'As a dragon you are a collector of things and because of this you can have an extensive hoard and thus you remain local to one area.  You must be careful of your reputation, tarnishing it will make it difficult to move in the future.',
  type: 'flavor',
  species: ['dragon','netherborn'] as unknown as keyof SpeciesList[],
} as SpeciesAbility;

const Bloodline = {
  name: 'Bloodline',
  cost: 1,
  atCreation: false,
  canBuy: false,
  description: 'Choose a Bloodline.  For a Primeval Vampire this is merely a proficiency, for all other vampires this is the bloodline of your sire. (Domination, Lust/Desire, Animal Ken, Shadow, Fear, Necromancy, Dream Walking, Cursed)',
  type: 'granted',
  options: [
    'bloodline-animal-ken',
    'bloodline-cursed',
    'bloodline-domination',
    'bloodline-dream-walking',
    'bloodline-fear',
    'bloodline-lust-desire',
    'bloodline-necromancy',
    'bloodline-shadow'
  ] as unknown as keyof AbilityList[],
} as GrantedAbility;

const BloodlineAnimalKen = { 
  name: 'Bloodline - Animal Ken',
  description: 'Choose an animal type: bat, rat, wolf, raven, spider (You may choose this ability more than once to control different types)',
  cost: 1,
  type: 'granted',
  atCreation: false,
  levels: [
    'animal-ken-l',
    'animal-ken-2',
    'animal-ken-3',
    'animal-ken-4',
    'animal-ken-5',
  ] as unknown as keyof AbilityList[],
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
  'shape-change-persona': ShapeChangePersona,
  'shape-change-medium': ShapeChangeMedium,
  'shape-change-hybrid-dragon': ShapeChangeHybridDragon,
  'shape-change-small': ShapeChangeSmall,
  'shape-change-dragon': ShapeChangeDragon,
  'dragon-breath-attack-1': DragonBreathAttack1,
  'dragon-breath-attack-2': DragonBreathAttack2,
  'dragon-breath-attack-3': DragonBreathAttack3,
  'dragon-breath-attack-4': DragonBreathAttack4,
  'dragon-breath-attack-5': DragonBreathAttack5,
} as AbilityList;
