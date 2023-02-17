<script>
	import MenuIcon from 'svelte-material-icons/Menu.svelte';
	let isOpen = false;
	const onClickMenuButton = function () {
		isOpen = !isOpen;
	};
</script>

<div class="relative">
	<button class="block" on:click={onClickMenuButton}>
		<MenuIcon color="white" size="32" />
	</button>
	{#if isOpen}
		<div class="absolute right-1 bg-white text-black rounded-lg py-2 w-48 mt-2 shadow-2xl">
			<a href="#" class="block px-4 py-2 text-slate-700 hover:bg-slate-700 hover:text-white"
				>로그인</a
			>
			<a href="#" class="block px-4 py-2 text-slate-700 hover:bg-slate-700 hover:text-white"
				>더보기</a
			>
		</div>
	{/if}
</div>
