<script>
	import Markdown from '../lib/components/markdown.svelte';

	const md = `# Uh oh!

<span class="font-mono">404</span>

The page you're trying to access does not exist.

<small>At least not in this universe...</small>`;
</script>

<svelte:head>
	<title>404 | Tristan Lukens</title>
	<meta name="description" content="404 page of my personal corner on the internet. Uh oh!" />
</svelte:head>

<main class="text-center">
	<Markdown {md} />
</main>
