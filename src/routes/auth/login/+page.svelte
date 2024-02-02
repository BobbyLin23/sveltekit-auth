<script lang="ts">
	import type { PageData } from './$types'
	import LoginForm from '$lib/components/auth/login-form.svelte'

	export let data: PageData
</script>

<LoginForm form={data.form} />
