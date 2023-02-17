<script>
	import DropDownMenu from '../components/DropDownMenu.svelte';
	import '../app.css';
</script>

<div>
	<a
		href="/"
		class="sticky top-0 z-50 w-full bg-slate-800 text-white p-2 drop-shadow-xl flex justify-between"
	>
		<p class="align-middle text-center text-2xl">🤣FUNction</p>
		<DropDownMenu />
	</a>
	<slot />
</div>
