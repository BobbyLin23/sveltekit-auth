import { fail, type Actions } from '@sveltejs/kit'
import { superValidate } from 'sveltekit-superforms/server'

import type { PageServerLoad } from './$types'
import { LoginSchema } from '$lib/components/auth/login-form.svelte'

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(LoginSchema)
	}
}

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, LoginSchema)
		if (!form.valid) {
			return fail(400, {
				form
			})
		}
		return {
			form
		}
	}
}
