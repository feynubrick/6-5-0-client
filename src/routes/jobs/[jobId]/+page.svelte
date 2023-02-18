<script>
	export let data;
</script>

<div
	class="grid grid-cols-3 content-center bg-slate-200 rounded-lg drop-shadow-lg w-full h-full gap-1 justify-center p-1"
>
	<div class="w-full items-center ml-1">
		<img src={data.thumbnail} alt={data.thumbnail} class="object-contain w-24 h-24 rounded-3xl " />
	</div>
	<div class="w-full text-left col-span-2">
		<div class="mb-3">
			<span class="text-sm font-bold">{data.title}</span>
			{#each data.tags as tag}
				<span class="bg-slate-600 text-white rounded-2xl px-2 py-1 text-xs">{'#' + tag}</span>
			{/each}
		</div>
		<div class="text-left text-xs">
			<span class="font-bold">· 연령대: </span>
			<span class="">{data.ageGroups.join(', ')}</span>
		</div>
		<div class="text-left text-xs">
			<span class="font-bold">· 성별:</span>
			<span>{data.gender}</span>
		</div>
		<div class="text-left text-xs ">
			<span class="font-bold">· 업무내용:</span>
			<span class="">{data.summary}</span>
		</div>
		<div class="mt-2">
			<a href={'/jobs/' + data.id} class="bg-slate-500 text-white rounded-3xl px-2 py-1 text-xs"
				>자세히 보기</a
			>
			<button class="bg-slate-500 text-white rounded-3xl px-2 py-1 text-xs">신청하기</button>
		</div>
	</div>
</div>
