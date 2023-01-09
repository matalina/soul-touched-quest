import { worlds } from './worlds';
import { writable } from 'svelte/store';
import { emptyCharacter } from './empties';

export const worldList = writable(worlds);
export const characterList = writable([] as string[]);
export const currentCharacter = writable(emptyCharacter);

