<script type="ts">
	import { currentCharacter } from '../../data/stores';
  import Step1 from './components/Step1.svelte';
  import Step2 from './components/Step2.svelte';
  import Step3 from './components/Step3.svelte';
	import Step4 from './components/Step4.svelte';

  let step = 1;
  $: console.log($currentCharacter);

  function nextStep() {
    step++;
  }
</script>

<h1>Character Creation</h1>
<div>
  <strong>Unspent Points:</strong> {$currentCharacter.level.nextLevel?.unspentPoints}
</div>

{#if step === 1}
<Step1 on:nextstep={nextStep}/>
{/if}

{#if step === 2}
<Step2 on:nextstep={nextStep}/>
{/if}

{#if step === 3}
<Step3 on:nextstep={nextStep}/>
{/if}

{#if step >= 4}
<Step4 on:nextstep={nextStep}/>
{/if}
