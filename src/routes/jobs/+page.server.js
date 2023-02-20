import { getJobList } from '../../common/data.js';

export async function load() {
	return {
		jobs: await getJobList()
	};
}
