<script type="ts">
	import Ability from './ability.svelte';

  import { character } from '../../stores/character';

  let { str, dex, con, int, wis, cha } = $character.abilities;

</script>

<h1>Character Sheet</h1>

<Ability abilityName="STR" abilityValue={str}/>
<Ability abilityName="DEX" abilityValue={dex}/>
<Ability abilityName="CON" abilityValue={con}/>
<Ability abilityName="INT" abilityValue={int}/>
<Ability abilityName="WIS" abilityValue={wis}/>
<Ability abilityName="CHA" abilityValue={cha}/>
