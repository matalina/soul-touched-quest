<script lang="ts">
import type { WorldList } from '../../../data/types';
import { createEventDispatcher } from 'svelte';
import { emptyCharacter } from '../../../data/empties';
import { currentCharacter } from '../../../data/stores';
import { worlds } from "../../../data/worlds";

let world = '';
const dispatch = createEventDispatcher();

function setWorld() {
  $currentCharacter  = emptyCharacter;
  $currentCharacter.world = world;

  let worldRules = worlds[world];
  for(let i in worldRules.stats) {
    $currentCharacter.stats = { ...$currentCharacter.stats, [i]: worldRules.stats[i].stat };
  }
  for(let i in worldRules.skills) {
    $currentCharacter.skills = { ...$currentCharacter.skills, [i]: worldRules.skills[i] };
  }

  dispatch('nextstep');
}

function getKey(key: string) {
  return key as keyof WorldList;
}
</script>

<p>The first thing we need to do is select which world you want to create a character in.</p>

<select
  bind:value={world}
  on:change={setWorld}
>
  <option value="">Select a World</option>
  {#each Object.keys(worlds) as key}
  <option value={key}>{worlds[getKey(key)].name}</option>
  {/each}
</select>