<script lang="ts">
	import { ExclamationTriangle } from 'radix-icons-svelte'

	export let message: string | undefined
</script>

{#if message}
	<div
		class="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive"
	>
		<ExclamationTriangle class="h-4 w-4" />
		<p>{message}</p>
	</div>
{/if}
