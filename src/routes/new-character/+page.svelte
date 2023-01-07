<script lang="ts">
import { currentCharacter } from './../../stores/character';
import { species } from '../../data/species';
import { onMount } from 'svelte';

let step = 1;

$: character = $currentCharacter;

function speciesChanged() {
  const selected = species[character.species];
  console.log(selected);
  character.points += selected.pointsToSpend;
  for(const i in selected.abilities) {
    character.abilities[i as any] = {
      base: 0,
      modifiers: {'species': selected.abilities[i]},
    }
  }
  character.hits.max = {base: character.hits.max.base, modifiers: {'species': selected.hits}};
  console.log(character);
}


onMount( () => currentCharacter.set({
  name: '',
  age: 0,
  species: '',
  concept: '',
  calling: '',
  flaw: '',
  level: {value: 0, unspentPoints: 0},
  episodes: 0,
  points: 0,
  hits: {max: {base:0}, current: 0},
  hitDC: {base:0},
  saves: [],
  morality: {base:0},
  complexity: {base:0},
  sanity: {base:8},
  umbra: {base:0},
  charges: {max: {base:0}, current: 0},
  profession: '',
  professionLevel: 0,
  wealth: {base:0},
  speed: {base:0},
  initiative: 0,
  abilities: [],
  skills: {
    physical: {base:0},
    mental: {base:0},
    social: {base:0},
    occult: {base:0},
  },
  reputation: {name: 'overall', value: {base:0}, reputations: []},
  log: [],
}));
</script>


<div class="row">
  <div class="form-group w-1/2">
    <input name="name" bind:value={character.name} />
    <label for="name">Character Name</label>
  </div>
  <div class="form-group w-1/6">
    <input name="age" bind:value={character.age} />
    <label for="age">Age</label>
  </div>
  <div class="form-group w-1/3">
    <select
      name="species"
      bind:value={character.species}
      on:change={speciesChanged}
    >
      <option value="">Select a Species</option>
      {#each Object.keys(species) as key}
      <option value={key}>{species[key].name}</option>
      {/each}
    </select>
    <label for="species">Species</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/3">
    <input name="concept" bind:value={character.concept} />
    <label for="concept">Concept</label>
  </div>
  <div class="form-group w-1/3">
    <input name="calling" bind:value={character.calling} />
    <label for="calling">Calling</label>
  </div>
  <div class="form-group w-1/3">
    <input name="flaw" bind:value={character.flaw} />
    <label for="flaw">Flaw</label>
  </div>
</div>

{#if step === 2}
  Step 2
{/if}

<div class="p-3 flex justify-end">
  <button
    class="bg-orange-600 text-orange-100 border-orange-900 w-40"
    on:click={() => step++}
  >
    Next &rarr;
  </button>
</div>



<style>
  .form-group {
    @apply flex flex-col p-3;
  }
  input, select, button {
    @apply border py-2 px-3 rounded-lg;
  }
  input, select {
    @apply w-full;
  }
  label {
    @apply w-full text-center;
  }
  .row  {
    @apply flex;
  }
</style>