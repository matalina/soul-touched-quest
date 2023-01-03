<script lang="ts">
import type { PlayerCharacter } from '../../stores/types';
import { species } from '../../stores/species';
	import { MentalSkill, OccultSkill, PhysicalSkill, SocialSkill } from '../../stores/constants';
	import { abilities } from '../../stores/abilities';

const character = {
  name: '',
  age: 0,
  species: '',
  calling: '',
  flaw: '',
  level: 0,
  episodes: 0,
  points: 0,
  hits: 0,
  hitDC: 0,
  saves: [],
  morality: 0,
  complexity: 0,
  sanity: 8,
  umbra: 0,
  charges: 0,
  profession: '',
  professionLevel: 0,
  wealth: 0,
  speed: 0,
  initiative: 0,
  abilities: [],
  skills: [ PhysicalSkill, MentalSkill, SocialSkill, OccultSkill ],
} as unknown as PlayerCharacter;

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
    <select name="species" bind:value={character.species}>
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
<div class="row">
  <div class="form-group w-1/6">
    <input name="level" bind:value={character.level} />
    <label for="level">Level</label>
  </div>
  <div class="form-group w-1/6">
    <input name="episodes" bind:value={character.episodes} />
    <label for="episodes">Episodes</label>
  </div>
  <div class="form-group w-1/6">
    <input name="points" bind:value={character.points} />
    <label for="points">Points</label>
  </div>
  <div class="form-group w-1/6">
    <input name="hits" bind:value={character.hits} />
    <label for="hits">Hits</label>
  </div>
  <div class="form-group w-1/6">
    <input name="hit-dc" bind:value={character.hitDC} />
    <label for="hit-dc">Hit DC</label>
  </div>
  <div class="form-group w-1/6">
    <input name="saves" bind:value={character.saves} />
    <label for="saves">Saves</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/6">
    <input name="hunger" bind:value={character.hunger} />
    <label for="hunger">Hunger</label>
  </div>
  <div class="form-group w-1/6">
    <input name="morality" bind:value={character.morality} />
    <label for="morality">Morality</label>
  </div>
  <div class="form-group w-1/6">
    <input name="complexity" bind:value={character.complexity} />
    <label for="complexity">Complexity</label>
  </div>
  <div class="form-group w-1/6">
    <input name="sanity" bind:value={character.sanity} />
    <label for="sanity">Sanity</label>
  </div>
  <div class="form-group w-1/6">
    <input name="umbra" bind:value={character.umbra} />
    <label for="umbra">Umbra</label>
  </div>
  <div class="form-group w-1/6">
    <input name="charges" bind:value={character.charges} />
    <label for="charges">Charges</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/3">
    <input name="profession" bind:value={character.profession} />
    <label for="profession">Profession</label>
  </div>
  <div class="form-group w-1/6">
    <input name="profession-level" bind:value={character.professionLevel} />
    <label for="profession-level">Level</label>
  </div>
  <div class="form-group w-1/6">
    <input name="wealth" bind:value={character.wealth} />
    <label for="wealth">Wealth</label>
  </div>
  <div class="form-group w-1/6">
    <input name="speed" bind:value={character.speed} />
    <label for="speed">Speed</label>
  </div>
  <div class="form-group w-1/6">
    <input name="initiative" bind:value={character.initiative} />
    <label for="initiative">Initiative</label>
  </div>
</div>

<div class="row flex-wrap">
  <div class="form-group w-1/2">
    {#each character.skills as skill}
    {skill.name} <input bind:value={skill.value} />
    {#each skill.skills || [] as subskill}
    {subskill.name} <input bind:value={subskill.value} />
    {/each}
    {/each}
  </div>
</div>


{#each Object.keys(character.abilities) as key}
{abilities[key].name} <input bind:value={character.abilities[key]} />
{/each}

<style>
  .form-group {
    @apply flex flex-col p-3;
  }
  input, select {
    @apply w-full border py-2 px-3;
  }
  label {
    @apply w-full text-center;
  }
  .row  {
    @apply flex;
  }
</style>