import { getCampaignList } from '../../common/db.js';

export async function load(event) {
	console.log('event.locals.user: ', event.locals.user);
	return {
		campaigns: await getCampaignList(),
		user: event.locals.user
	};
}
