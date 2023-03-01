import { getUserWithSessionId } from './common/db';

export async function handle({ event, resolve }) {
	const user = await getUserWithSessionId(event.cookies.get('sessionid'));
	event.locals.user = user;
	return resolve(event);
}
