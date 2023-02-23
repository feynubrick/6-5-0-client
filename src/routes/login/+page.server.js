import { fail, redirect } from '@sveltejs/kit';
import { getUser, createSession } from '../../common/db';

export const actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return fail(400, { email, password, missing: true });
		}

		const user = await getUser(email);
		cookies.set('sessionid', await createSession(user));
		throw redirect(303, '/');
	}
};

export async function load(event) {
	console.log('event.locals.user: ', event.locals.user);
	console.log('event: ', event.data.user);
	return {
		user: event.locals.user
	};
}
