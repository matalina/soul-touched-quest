import type { Modifier, Stat } from '../data/types';

export function applyModifiers(key: string, stat: Stat, modifier: Modifier) {
  console.log(key);
  if (!stat?.modifiers) {
    stat.modifiers = { [key]: modifier };
  }
  else {
    stat.modifiers = { ...stat.modifiers, [key]: modifier };
  }

  return stat;
}

export function calculateStat(stat: Stat) {
  if (!stat) return 0;
  let base = stat.base || 0;
  let modifier = 0;
  if (!stat.modifiers) return base;
  for (const i in stat.modifiers) {
    const mod = stat?.modifiers[i] ;
    switch (mod.type) {
      case 'start':
        base = mod.value;
        break;
      case 'change':
        modifier += mod.value;
        break;
      default:
        break;
    }
  }

  return base + modifier;
}