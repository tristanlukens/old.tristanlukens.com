<script>
	import '../app.css';

	import Header from '$lib/components/header.svelte';
</script>

<svelte:head>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
</svelte:head>

<div class="max-w-prose tracking-wide mx-auto px-8 pt-8 pb-16 text-neutral-900 text-justify">
	<Header />
	<hr class="my-10" />
	<slot />
	<hr class="my-10" />
	<footer>
		<p class="text-xs text-center">That's it. You've reached the bottom.</p>
	</footer>
</div>
