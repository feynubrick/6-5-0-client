<script>
	import MenuIcon from 'svelte-material-icons/Menu.svelte';
	import { page } from '$app/stores';
	let isOpen = false;
	const onClickMenuButton = function () {
		isOpen = !isOpen;
	};
	const user = $page.data.user;
</script>

<div class="relative">
	<button class="block" on:click={onClickMenuButton}>
		<MenuIcon color="white" size="32" />
	</button>
	{#if isOpen}
		<div class="absolute right-1 bg-white text-black rounded-lg py-2 w-24 mt-2 shadow-2xl">
			{#if user}
				<a
					href="/login?/logout"
					class="block px-4 py-2 text-slate-700 hover:bg-slate-700 hover:text-white text-center"
					on:click={onClickMenuButton}
				>
					로그아웃
				</a>
			{:else}
				<a
					href="/login"
					class="block px-4 py-2 text-slate-700 hover:bg-slate-700 hover:text-white text-center"
					on:click={onClickMenuButton}
				>
					로그인
				</a>
			{/if}
		</div>
	{/if}
</div>
