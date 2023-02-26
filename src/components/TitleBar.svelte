<script>
	import DropDownMenu from './DropDownMenu.svelte';
</script>

<header class="sticky top-0 z-30 w-full bg-slate-800 text-white p-2 drop-shadow-xl h-12 ">
	<div class="flex flex-row h-full content-start">
		<!-- data-sveltekit-preload-data="tap" 을 쓰면 tap 했을 때만 preload 한다 -->
		<div class="flex justify-start">
			<a href="/campaigns">
				<img src="/short-logo-red.png" alt="short-logo-red" class="h-8" />
			</a>
			<a href="/campaigns">
				<p class="align-middle text-left text-2xl font-semibold">Function</p>
			</a>
		</div>
		<div class="grow flex justify-end">
			<DropDownMenu />
		</div>
	</div>
</header>
