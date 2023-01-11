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