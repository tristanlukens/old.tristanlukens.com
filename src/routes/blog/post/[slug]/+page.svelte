<script lang="ts">
	import type { PageData } from './$types';

	import Markdown from '$lib/components/markdown.svelte';
	import Tag from '$lib/components/tag.svelte';

	export let data: PageData;
	console.log(data.post?.tags?.join(', '));
</script>

<!-- ts kept crying like a baby about post being null. I don't know why, but at least this works -->

<svelte:head>
	<title>{data.post?.title} | Tristan Lukens</title>
	<meta
		name="description"
		content="Blog post, written by Tristan Lukens on {data.post
			?.uploadDate}. Tags: {data.post?.tags?.join(', ')}"
	/>
</svelte:head>

<Markdown>
	<h1>{data.post?.title}</h1>

	{#if data.post?.tags}
		<ul class="flex p-0 list-none items-center justify-center">
			{#each data.post?.tags as tag}
				<li>
					<Tag {tag} />
				</li>
			{/each}
		</ul>
	{/if}

	<p class="text-center uppercase text-sm font-bold">
		Written on {data.post?.uploadDate} by yours truly
	</p>

	<hr class="mb-10" />
</Markdown>

<Markdown md={data.post?.content} />
