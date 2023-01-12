<script lang="ts">
import { currentCharacter } from '../../../data/stores';
import Sheet from '../../../components/Sheet.svelte';
</script>

<Sheet character={$currentCharacter} edit={true} />