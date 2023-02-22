<script>
	import JobCard from '../../components/JobCard.svelte';
	export let data;
	const jobs = data.jobs;
</script>

<div class="flex flex-col justify-items-center space-y-3 p-1 mt-1">
	{#each jobs as job}
		<JobCard {job} />
	{/each}
</div>
