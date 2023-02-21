import { getUser, createSession } from '../../common/db';

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const user = await getUser(email);
		cookies.set('sessionid', await createSession(user));

		return { success: true };
	}
};
