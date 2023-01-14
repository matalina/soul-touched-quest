<script lang="ts">
	import { calculateStat } from '../lib/helpers';
  import type { Creature } from '../data/types';
	import { worlds } from '../data/worlds';

  export let character: Creature;
  export let edit = false;

</script>

<div class="row">
  <div class="form-group w-1/2">
    <input name="name" value={character.name}/>
    <label for="name">Name</label>
  </div>
  <div class="form-group w-1/6">
    <input name="level" value={character.level.cr} />
    <label for="level">Level</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/6">
    <input name="hits" value={calculateStat(character.stats.hits)} />
    <label for="hits">Hits</label>
  </div>
  <div class="form-group w-1/6">
    <input name="hit-dc" value={calculateStat(character.stats.hitDC)} />
    <label for="hit-dc">Hit DC</label>
  </div>
  <div class="form-group w-1/6">
    <div class="flex justify-center w-full border py-2 px-3 rounded-md">
      {#each [1,2,3] as i}
        {#if (character.saves?.[i] === undefined)}
        <span class="px-6">-</span>
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
    <input name="wealth" value={calculateStat(character.stats.wealth)} />
    <label for="wealth">Wealth</label>
  </div>
  <div class="form-group w-1/6">
    <input name="speed" value={calculateStat(character.stats.speed)} />
    <label for="speed">Speed</label>
  </div>
  <div class="form-group w-1/6">
    <input name="initiative" value={calculateStat(character.stats.initiative)} />
    <label for="initiative">Initiative</label>
  </div>
</div>
<div class="row">
  <div class="form-group w-1/6">
    <input name="morality" value={calculateStat(character.stats.morality)} />
    <label for="morality">Morality</label>
  </div>
  <div class="form-group w-1/6">
    <input name="complexity" value={calculateStat(character.stats.complexity)} />
    <label for="complexity">Complexity</label>
  </div>
  <div class="form-group w-1/6">
    <input name="sanity" value={calculateStat(character.stats.sanity)} />
    <label for="sanity">Sanity</label>
  </div>
</div>
{#if worlds[character.world]?.stats}
<div class="row">
  {#each Object.keys(worlds[character.world]?.stats || {}) as key}
  <div class="form-group w-1/6">
    <input name={key} value={calculateStat(character.stats[key])} />
    <label for={key}>{key}</label>
  </div>
  {/each}
</div>
{/if}
<!--div class="row flex-wrap">
  <div class="form-group w-1/2">
    {#each Object.keys(character.skills) as key}
    {character.skills[key].name} <input value={skill.value} />
    {#each skill.skills || [] as subskill}
    {subskill.name} <input value={subskill.value} />
    {/each}
    {/each}
  </div>
</~div-->

<!--
{#each Object.keys(character.abilities) as key}
{abilities[key].name} <input value={character.abilities[key]} />
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