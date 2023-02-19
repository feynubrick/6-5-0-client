<script>
	export let data;
</script>

<div class="bg-slate-200 w-full h-full p-1">
	<div class="w-full flex justify-center">
		<img src={data.thumbnail} alt={data.thumbnail} class="object-contain w-48 h-48 rounded-3xl" />
	</div>
	<div class="w-full flex flex-col justify-center col-span-2">
		<div class="mb-3 text-center">
			<span class="text-lg font-bold">{data.title}</span>
		</div>
		<div>
			{#each data.tags as tag}
				<span class="bg-slate-600 text-white rounded-2xl px-2 py-1 text-md">{'#' + tag}</span>
			{/each}
		</div>
		<div class="text-left text-md">
			<span class="font-bold">· 연령대: </span>
			<span class="">{data.ageGroups.join(', ')}</span>
		</div>
		<div class="text-left text-md">
			<span class="font-bold">· 성별:</span>
			<span>{data.gender}</span>
		</div>
		<div class="text-left text-md ">
			<span class="font-bold">· 업무내용:</span>
			<span class="">{data.summary}</span>
		</div>
		<button class="bg-slate-500 text-white rounded-sm px-2 py-1 text-lg font-bold w-full"
			>신청하기</button
		>
	</div>
</div>
