<script>
	export let campaign;
</script>

<div
	class="grid grid-cols-3 content-center bg-slate-200 rounded-lg drop-shadow-lg w-full h-44 gap-1 justify-center p-1"
>
	<div class="flex items-center ml-1">
		<img
			src={campaign.thumbnail}
			alt={campaign.thumbnail}
			class="object-contain w-24 h-24 rounded-3xl "
		/>
	</div>
	<div class="w-full text-left col-span-2">
		<div class="mb-3">
			<span class="text-sm font-bold">{campaign.title}</span>
			{#each campaign.tags as tag}
				<span class="bg-slate-600 text-white rounded-2xl px-2 py-1 text-xs">{'#' + tag}</span>
			{/each}
		</div>
		<div class="text-left text-xs">
			<span class="font-bold">· 연령대: </span>
			<span class="">{campaign.ageGroups.join(', ')}</span>
		</div>
		<div class="text-left text-xs">
			<span class="font-bold">· 성별:</span>
			<span>{campaign.gender}</span>
		</div>
		<div class="text-left text-xs ">
			<span class="font-bold">· 업무내용:</span>
			<span class="">{campaign.summary}</span>
		</div>
		<div class="mt-2">
			<a
				href={'/campaigns/' + campaign.id}
				class="bg-slate-500 text-white rounded-3xl px-2 py-1 text-xs"
			>
				자세히 보기
			</a>
			<button class="bg-slate-500 text-white rounded-3xl px-2 py-1 text-xs">신청하기</button>
		</div>
	</div>
</div>
