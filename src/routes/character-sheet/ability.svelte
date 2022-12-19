<script type="ts">

export let abilityName = '';
export let abilityValue = 0;

$: abilityModifier = Math.floor((abilityValue - 10) / 2)

</script>

<label for="ability-{abilityName}">{abilityName}</label>
<input name="ability-{abilityName}" bind:value={abilityValue} placeholder={abilityName} />
<div>{abilityModifier}</div>