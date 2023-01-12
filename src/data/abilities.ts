import type { Ability } from "./types"

export {
  UnarmedAttack,
}

const UnarmedAttack: Ability = {
  name: 'unarmed attack',
  description: 'an attack without any weapon',
  cost: 0,
  type: 'attack',
}