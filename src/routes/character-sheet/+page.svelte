<script type="ts">
	import Ability from './ability.svelte';

  import { character } from '../../stores/character';

  let { str, dex, con, int, wis, cha } = $character.abilities;

</script>

<div>{character.name}</div>
