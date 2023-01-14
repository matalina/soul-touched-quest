<script lang="ts">
	import { currentCharacter } from '../../../data/stores';
	import { worlds } from '../../../data/worlds';
	import { createEventDispatcher } from 'svelte';
	import { applyModifiers } from '../../../lib/helpers';

  let step = 0;
  let packages: {[key:string]: string} = {};
  const dispatch = createEventDispatcher();

  function nextStep() {
    step++;
  }

  function finishedConcept() {
    dispatch('nextstep');
  }

  function applyPackages() {
    for(let key in packages) {
      const packageList = worlds[$currentCharacter.world].packages[key];
      const content = packageList.packages[packages[key]];

      console.log(content);
      if($currentCharacter.level.nextLevel) {
        $currentCharacter.level.nextLevel.unspentPoints -= content.cost;
      }

      for(const key in content.stats) {
          let modifiers = content.stats[key];
          $currentCharacter.stats[key] = applyModifiers(key, $currentCharacter.stats[key], modifiers)
      }

      for(const key in content.skills) {
          let modifiers = content.skills[key];
          $currentCharacter.skills[key].stat = applyModifiers(key, $currentCharacter.skills[key].stat, modifiers)
      }

      // TODO: add abilities
    }
  }
</script>

<p>Now that you have a basic idea of what your character is going to be, we can start filling out the skills, stats and abilities you will have.  Every character starts out with 20 points to spend.  Some costs are negative which actually add to your point allotment.  These negative costs usually come as a determent to your character.  Like a flaw your character isn't perfect in everything and by allowing these negative costs you can make a well rounded character.</p>

<p>Each world in the system comes with a set of packages that you can apply to a character which spends a specific amount of your 20 points automatically to provide you with various stat changes, skills and abilities.</p>

{#if step === 1}
  {#if JSON.stringify(worlds[$currentCharacter.world].packages) === '{}'}
    This world has no packages.
  {:else}
    {#each Object.keys(worlds[$currentCharacter.world].packages) as key}
      <label>
        <span>{worlds[$currentCharacter.world].packages[key].name}</span>
        <select bind:value={packages[key]} on:change={applyPackages}>
          <option value="">Select a {worlds[$currentCharacter.world].packages[key].name}</option>
          {#each Object.keys(worlds[$currentCharacter.world].packages[key].packages) as key2}
          <option value={key2}>{worlds[$currentCharacter.world].packages[key].packages[key2].name}</option>
          {/each}
        </select>
      </label>
    {/each}
  {/if}
  <button on:click={finishedConcept}>Next Step &rarr;</button>
{/if}
{#if step < 1}
<button on:click={nextStep}>Apply World Packages</button>
{/if}

<style>
  label {
    @apply flex flex-col;
  }
  span {
    @apply mb-3 font-bold;
  }
  select {
    @apply mb-3;
  }
</style>