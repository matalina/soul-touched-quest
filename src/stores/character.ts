import type { PlayerCharacter } from "src/data/types";
import { writable } from "svelte/store";

export const currentCharacter = writable({} as PlayerCharacter);