<script lang="ts" context="module">
	import { z } from 'zod'

	export const RegisterSchema = z.object({
		email: z.string().email({
			message: 'Email is required'
		}),
		password: z.string().min(6, {
			message: 'Minimum 6 characters required'
		}),
		name: z.string().min(1, {
			message: 'Name is required'
		})
	})
</script>

<script lang="ts">
	import type { SuperValidated } from 'sveltekit-superforms'

	import * as Form from '$lib/components/ui/form'
	import CardWrapper from './card-wrapper.svelte'
	import FormSuccess from '$lib/components/form-success.svelte'
	import FormError from '$lib/components/form-error.svelte'

	export let form: SuperValidated<typeof RegisterSchema>

	let error: string | undefined = ''
	let success: string | undefined = ''
</script>

<CardWrapper
	headerLabel="Create an account"
	backButtonLabel="Already have an account?"
	backButtonHref="/auth/login"
	showSocial
>
	<Form.Root
		method="POST"
		{form}
		schema={RegisterSchema}
		class="space-y-6"
		let:config
	>
		<div class="space-y-4">
			<Form.Item>
				<Form.Field {config} name="email">
					<Form.Label>Name</Form.Label>
					<Form.Input placeholder="john.doe@example.com" />
					<Form.Validation />
				</Form.Field>
			</Form.Item>
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
		<FormError message={error} />
		<FormSuccess message={success} />
		<Form.Button class="w-full">Create an account</Form.Button>
	</Form.Root>
</CardWrapper>
