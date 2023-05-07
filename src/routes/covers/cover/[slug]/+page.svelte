<script lang="ts">
	import type { PageData } from './$types';

	import Markdown from '$lib/components/markdown.svelte';

	export let data: PageData;

	const title = `${data.cover?.artist} - ${data.cover?.song} | ${data.cover?.type} cover`;
</script>

<!-- ts kept crying like a baby about post being null. I don't know why, but at least this works -->

<svelte:head>
	<title>{title} | Tristan Lukens</title>
	<meta
		name="description"
		content="{data.cover?.type.toUpperCase()} cover of {data.cover?.song} by {data.cover
			?.artist}, by Tristan Lukens"
	/>
</svelte:head>

<Markdown>
	<h1>{title}</h1>

	<p class="text-center uppercase text-sm font-bold">
		Recorded on {data.cover?.uploadDate} by yours truly
	</p>

	<hr class="mb-10" />
</Markdown>

<div class="my-8 aspect-video">
	<iframe
		width="100%"
		height="100%"
		src="https://www.youtube.com/embed/{data.cover?.youtubeID}"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
	/>
</div>

<Markdown md={data.cover?.content} />
