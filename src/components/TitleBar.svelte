<script>
	import DropDownMenu from './DropDownMenu.svelte';
</script>

<header
	class="sticky top-0 z-30 w-full bg-slate-800 text-white p-2 drop-shadow-xl flex justify-between h-12"
>
	<!-- data-sveltekit-preload-data="tap" 을 쓰면 tap 했을 때만 preload 한다 -->
	<a href="/jobs" class="align-middle text-center text-2xl font-semibold">Joyfluencer</a>
	<DropDownMenu />
</header>
