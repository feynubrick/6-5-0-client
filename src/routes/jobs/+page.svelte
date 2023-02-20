<script>
	import JobCard from '../../components/JobCard.svelte';
	export let data;
</script>

<div>
	<div class="flex flex-col justify-items-center space-y-3 p-1 mt-1">
		{#each data.jobs as job}
			<JobCard {job} />
		{/each}
	</div>
</div>
