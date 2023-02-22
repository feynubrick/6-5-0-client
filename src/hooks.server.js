import { getUserWithSessionId } from './common/db';

export async function handle({ event, resolve }) {
	console.log('handle hooks called');
	const user = await getUserWithSessionId(event.cookies.get('sessionid'));
	console.log('user: ', user);
	event.locals.user = user;
	return resolve(event);
}
