import { getCampaignList } from '../../common/db.js';

export async function load(event) {
	return {
		campaigns: await getCampaignList(),
		user: event.locals.user
	};
}
