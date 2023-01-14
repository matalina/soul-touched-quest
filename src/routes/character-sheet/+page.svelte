<script lang="ts">
	import Sheet from "src/components/CharacterSheet.svelte";
	import { currentCharacter } from "src/data/stores";


</script>

<Sheet character={$currentCharacter} edit={false} />