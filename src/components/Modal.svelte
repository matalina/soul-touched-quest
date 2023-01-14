<script lang="ts">

export let width = 'small';

let modalWidth = 'w-96';

$: if (width === 'small') modalWidth = 'w-96';
   else if (width === 'medium') modalWidth = 'w-1/2';
   else if (width === 'large') modalWidth = 'w-3/4';
   else modalWidth = 'w-full';
</script>


<!--Overlay Effect-->
<div
	class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
	id="my-modal"
></div>


<!--modal content-->
<div class="absolute top-0 left-0 w-full h-full flex">
<div
	class={`z-10 my-auto mx-auto p-5 border ${modalWidth} shadow-lg rounded-md bg-white`}
>
  <slot name="header"></slot>
	<slot></slot>
  <slot name="footer"></slot>
</div>
</div>