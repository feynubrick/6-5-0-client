<script>
	import CampaignCard from '../../components/CampaignCard.svelte';
	export let data;
	const campaigns = data.campaigns;
</script>

<div class="flex flex-col justify-items-center space-y-3 p-1 mt-1">
	{#each campaigns as campaign}
		<CampaignCard {campaign} />
	{/each}
</div>
