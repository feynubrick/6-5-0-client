import { error } from '@sveltejs/kit';
import { getCampaign } from '../../../common/db';

export async function load({ params }) {
	const campaignData = await getCampaign(params.campaignId);

	if (campaignData) {
		return campaignData;
	}
	throw error(404, 'Not Found');
}
