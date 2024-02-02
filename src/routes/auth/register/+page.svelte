<script lang="ts">
	import type { PageData } from './$types'
	import RegisterForm from '$lib/components/auth/register-form.svelte'

	export let data: PageData
</script>

<RegisterForm form={data.form} />
