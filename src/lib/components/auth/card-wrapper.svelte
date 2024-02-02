<script lang="ts">
	import * as Card from '$lib/components/ui/card'
	import Header from './header.svelte'
	import Social from './social.svelte'
	import BackButton from './back-button.svelte'

	export let headerLabel: string
	export let showSocial: boolean
	export let backButtonLabel: string
	export let backButtonHref: string
</script>

<Card.Root class="w-[400px] shadow-md">
	<Card.Header>
		<Header label={headerLabel} />
	</Card.Header>
	<Card.Content>
		<slot />
	</Card.Content>
	{#if showSocial}
		<Card.Footer>
			<Social />
		</Card.Footer>
	{/if}
	<Card.Footer>
		<BackButton label={backButtonLabel} href={backButtonHref} />
	</Card.Footer>
</Card.Root>
