<script lang="ts">
	import Sheet from "src/components/Sheet.svelte";
	import { currentCharacter } from "src/data/stores";


</script>

<Sheet character={$currentCharacter} edit={false} />