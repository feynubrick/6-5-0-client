import { getJobList } from '../../common/db.js';

export async function load(event) {
	console.log('event.locals.user: ', event.locals.user);
	return {
		jobs: await getJobList(),
		user: event.locals.user
	};
}
