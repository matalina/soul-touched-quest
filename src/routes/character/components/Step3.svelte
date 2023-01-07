<script lang="ts">
	import { npm_package_json } from '$env/static/private';
	import { currentCharacter } from '@quest/data/stores';
	import { worlds } from '@quest/data/worlds';
	import { createEventDispatcher } from 'svelte';

  let step = 1;
  const dispatch = createEventDispatcher();

  function nextStep() {
    step++;
  }

  function finishedConcept() {
    dispatch('nextstep');
  }
</script>

<p>Now that you have a basic idea of what your character is going to be, we can start filling out the skills, stats and abilities you will have.  Every character starts out with 20 points to spend.  Some costs are negative which actually add to your point allotment.  These negative costs usually come as a detrement to your character.  Like a flaw your character isn't perfect in everything and by allowing these negative costs you can make a well rounded character.</p>

<p>Each world in the system comes with a set of packages that you can apply to a character which spends a specific amount of your 20 points automatically to provide you with various stat changes, skills and abilities.</p>

<button on:click={nextStep}>Apply World Packages</button>

{#if step === 1}
  {#if worlds[$currentCharacter.world].packages.length === 0}
    This world has packages.
  {/if}
{/if}