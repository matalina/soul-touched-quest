import { writable } from "svelte/store";

export interface PlayerCharacter {
  abilities: {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
  }
}

export const character = writable({
  abilities: {
    str: 8,
    dex: 8,
    con: 8,
    int: 8,
    wis: 8,
    cha: 8,
  }
} as PlayerCharacter)