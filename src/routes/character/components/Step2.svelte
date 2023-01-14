<script type="ts">
	import { currentCharacter } from '../../../data/stores';
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

{#if step === 1}
<p>The most important part of character creation is coming up with a viable concept between you, your Game Master and the rest of the players. A character should be compelling for you and work with in the world your Game Master provided. Interactions between other players will be the fundamental part of you and your players fun and working together to create a certain dynamic is part of the planning process.</p>
<button on:click={nextStep}>Let's Get Started</button>
{/if}

{#if step === 2}
<p>There are four parts to creating your character's concept.  The general concept which details what you'd like your character start off as and work towards in your character development.</p>
<label>
  <span>What is your character's concept?</span>
  <input bind:value={$currentCharacter.concept} />
</label>
{/if}
{#if step === 3}
<p>The second part is creating a calling for your character.  This is what drives your character into the world.</p>
<label>
  <span>What is your character's calling?</span>
  <input bind:value={$currentCharacter.calling} />
</label>
{/if}
{#if step ===4}
<p>The third part is your characters flaw.  Everyone has one, and every character needs one.  This should be a flaw that may come up during play, things like being butt ugly, or a perfectionist to the point you can't make decisions.
</p>
<label>
  <span>What is your character's flaw?</span>
  <input bind:value={$currentCharacter.flaw} />
</label>

{/if}
{#if step > 1 && step < 5}
<button on:click={nextStep}>Next Step &rarr;</button>
{/if}
{#if step === 5}
<p>The final part to creating your character's concept is giving your character a name.  Names are important and it may take you a while to come up with one, you can always change it later during the creation process.  Names are how the world will know your character.  Some like really long unpronounceable names, others like short and sweet.  It is totally up to you what you want the world to know your character as.</p>
<label>
  <span>What is your character's name?</span>
  <input bind:value={$currentCharacter.name} />
</label>
<button on:click={finishedConcept}>Next Step &rarr;</button>
{/if}

<style>
  label {
    @apply flex flex-col;
  }
  span {
    @apply mb-3 font-bold;
  }
  input {
    @apply mb-3;
  }
</style>