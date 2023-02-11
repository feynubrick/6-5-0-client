<script>
	export let job;
</script>

<div
	class="grid grid-cols-3 content-center bg-slate-200 rounded-lg drop-shadow-lg w-full h-32 gap-1 justify-center"
>
	<img
		src={job.thumbnail}
		alt={job.thumbnail}
		class="object-contain w-24 h-24 rounded-3xl mx-auto"
	/>
	<div class="w-full text-left col-span-2">
		<span class="text-sm font-bold">{job.title}</span>
		{#each job.tags as tag}
			<span class="bg-slate-700 text-white rounded-2xl p-1.5 text-xs">{'#' + tag}</span>
		{/each}
	</div>
</div>
