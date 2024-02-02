<script lang="ts" context="module">
	import { z } from 'zod'

	export const LoginSchema = z.object({
		email: z.string().email({
			message: 'Email is required'
		}),
		password: z.string().min(1, {
			message: 'Password is required'
		})
	})
</script>

<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms'

	import * as Form from '$lib/components/ui/form'
	import CardWrapper from './card-wrapper.svelte'

	export let form: SuperValidated<typeof LoginSchema>
</script>

<CardWrapper
	headerLabel="Welcome back"
	backButtonLabel="Don't have an account?"
	backButtonHref="/auth/register"
	showSocial
>
	<Form.Root
		method="POST"
		{form}
		schema={LoginSchema}
		class="space-y-6"
		let:config
	>
		<div class="space-y-4">
			<Form.Item>
				<Form.Field {config} name="email">
					<Form.Label>Email</Form.Label>
					<Form.Input type="email" placeholder="john.doe@example.com" />
					<Form.Validation />
				</Form.Field>
			</Form.Item>
			<Form.Item>
				<Form.Field {config} name="password">
					<Form.Label>Password</Form.Label>
					<Form.Input type="password" placeholder="******" />
					<Form.Validation />
				</Form.Field>
			</Form.Item>
		</div>
		<Form.Button class="w-full">Login</Form.Button>
	</Form.Root>
</CardWrapper>
