<script lang="ts">
	import { Button } from '../ui/button'

	export let label: string
	export let href: string
</script>

<Button variant="link" class="w-full font-normal" size="sm">
	<a {href}>
		{label}
	</a>
</Button>
