<script type="ts">
	import { currentCharacter } from '../../data/stores';
  import Step1 from './components/Step1.svelte';
  import Step2 from './components/Step2.svelte';
  import Step3 from './components/Step3.svelte';
	import Step4 from './components/Step4.svelte';
	import Step0 from './components/Step0.svelte';
	import Modal from '../../components/Modal.svelte';

  let step = 1;
  let open = true;
  $: console.log($currentCharacter);

  function nextStep() {
    step++;
  }

  function finish() {
    open = false;
  }
</script>

<h1>Character Creation</h1>

<Step0/>

{#if open}
<Modal width="small">
  <div slot="header" class="border-b pb-3 mb-3 text-center">
    <h2>Character Wizard</h2>
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

  {#if step === 4}
  <Step4 on:nextstep={nextStep}/>
  {/if}

  <div slot="footer" class="border-t pt-3 mt-3 flex justify-center">
    <button on:click={finish}>
      Finish
    </button>
  </div>
</Modal>
{/if}
