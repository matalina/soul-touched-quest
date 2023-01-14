<script lang="ts">
	import { calculateStat } from '../lib/helpers';
  import type { Character } from '../data/types';
	import { worlds } from '../data/worlds';

  export let character: Character;
  export let edit = false;

  let disabled = true;
</script>

<div class="row">
  <div class="form-group w-1/2">
    <input {disabled}  name="name" value={character.name}/>
    <label for="name">Name</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="age" value={character.age} />
    <label for="age">Age</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="level" value={character.level.cr} />
    <label for="level">Level</label>
  </div>
  {#if character.level.nextLevel}
  <div class="form-group w-1/12">
    <input {disabled}  name="episodes" value={character.level.nextLevel.episodes} />
    <label for="episodes">Episodes</label>
  </div>
  <div class="form-group w-1/12">
    <input {disabled}  name="points" value={character.level.nextLevel.unspentPoints} />
    <label for="points">Points</label>
  </div>
  {/if}
</div>
<div class="row">
  <div class="form-group w-1/3">
    <input {disabled}  name="concept" value={character.concept} />
    <label for="concept">Concept</label>
  </div>
  <div class="form-group w-1/3">
    <input {disabled}  name="calling" value={character.calling} />
    <label for="calling">Calling</label>
  </div>
  <div class="form-group w-1/3">
    <input {disabled}  name="flaw" value={character.flaw} />
    <label for="flaw">Flaw</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/6">
    <input {disabled}  name="hits" value={calculateStat(character.stats.hits)} />
    <label for="hits">Hits</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="hit-dc" value={calculateStat(character.stats.hitDC)} />
    <label for="hit-dc">Hit DC</label>
  </div>
  <div class="form-group w-1/6">
    <div class="flex justify-center w-full border py-2 px-3 rounded-md bg-gray-50">
      {#each [1,2,3] as i}
        {#if (character.saves?.[i] === undefined)}
        <span class="px-6"></span>
        {:else if (character.saves?.[i])}
        <span class="text-green-600">S</span>
        {:else}
        <span class="text-red-600">F</span>
        {/if}
        {#if i < 3}
        <span>/</span>
        {/if}
      {/each}
    </div>

    <label for="saves">Saves</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="wealth" value={calculateStat(character.stats.wealth)} />
    <label for="wealth">Wealth</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="speed" value={calculateStat(character.stats.speed)} />
    <label for="speed">Speed</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="initiative" value={calculateStat(character.stats.initiative)} />
    <label for="initiative">Initiative</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/6">
    <input {disabled}  name="morality" value={calculateStat(character.stats.morality)} />
    <label for="morality">Morality</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="complexity" value={calculateStat(character.stats.complexity)} />
    <label for="complexity">Complexity</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="sanity" value={calculateStat(character.stats.sanity)} />
    <label for="sanity">Sanity</label>
  </div>
  <div class="form-group w-1/3">
    <input {disabled}  name="profession" value={character.profession?.name || ''} />
    <label for="profession">Profession</label>
  </div>
  <div class="form-group w-1/6">
    <input {disabled}  name="profession-level" value={character.profession?.level?.name || ''} />
    <label for="profession-level">Level</label>
  </div>
</div>
{#if worlds[character.world]?.stats}
<div class="row">
  {#each Object.keys(worlds[character.world]?.stats || {}) as key}
  <div class="form-group w-1/6">
    <input {disabled}  name={key} value={calculateStat(character.stats[key])} />
    <label for={key}>{key}</label>
  </div>
  {/each}
</div>
{/if}
<!--div class="row flex-wrap">
  <div class="form-group w-1/2">
    {#each Object.keys(character.skills) as key}
    {character.skills[key].name} <input {disabled}  value={skill.value} />
    {#each skill.skills || [] as subskill}
    {subskill.name} <input {disabled}  value={subskill.value} />
    {/each}
    {/each}
  </div>
</~div-->

<!--
{#each Object.keys(character.abilities) as key}
{abilities[key].name} <input {disabled}  value={character.abilities[key]} />
{/each}
-->

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