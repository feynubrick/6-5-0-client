import { getJobList } from '../../common/db.js';

export async function load() {
	return {
		jobs: await getJobList()
	};
}
