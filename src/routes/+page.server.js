import { getJobList } from '../common/data';

export async function load() {
	return {
		jobs: await getJobList()
	};
}
