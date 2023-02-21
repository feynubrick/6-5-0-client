import { error } from '@sveltejs/kit';
import { getJob } from '../../../common/db';

export async function load({ params }) {
	const jobData = await getJob(params.jobId);

	if (jobData) {
		return jobData;
	}
	throw error(404, 'Not Found');
}
