<script>
	import TitleBar from '../components/TitleBar.svelte';
	import '../app.css';
</script>

<TitleBar />
<div class="h-[calc(100vh-3rem)]">
	<slot />
</div>
