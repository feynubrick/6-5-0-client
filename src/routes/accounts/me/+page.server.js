import { fail, redirect } from '@sveltejs/kit';
import { getUser, createSession, removeSession } from '../../../common/db';

export const actions = {
	login: async ({ cookies, request, locals }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return fail(400, { email, password, missing: true });
		}

		const user = await getUser(email);
		cookies.set('sessionid', await createSession(user));
		locals.user = user;
		// TODO: 하드코드한 url 말고 알아서 url 가져오도록 변경하기
		throw redirect(303, '/accounts/me');
		// return { success: true };
	},
	logout: async (event) => {
		const user = event.locals.user;
		if (user) {
			event.cookies.delete('sessionid');
			event.locals.user = null;
			await removeSession(user);
		}
		// TODO: 하드코드한 url 말고 알아서 url 가져오도록 변경하기
		throw redirect(303, '/accounts/me');
	}
};

export function load(event) {
	return {
		user: event.locals.user
	};
}
