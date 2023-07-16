<script lang="ts">
	import type { PageData } from './$types';
	import type { post } from '$lib/server/database';

	import { filters } from '$lib/stores';

	import Post from '$lib/components/post.svelte';
	import Tag from '$lib/components/tag.svelte';

	export let data: PageData;

	// this does not work yet...
	// O(n^3) lol
	let filteredPosts: post[] = [];
	filteredPosts = data.posts;
	$: filteredPosts.forEach((post) => {
		post.tags.forEach((tag) => {
			$filters.forEach((filter) => {
				if (filter !== tag) {
					const index = filteredPosts.indexOf(post);
					filteredPosts.splice(index, 1);
				}
			});
		});
	});
	$filters = $filters;
</script>

<svelte:head>
	<title>Blog | Tristan Lukens</title>
	<meta name="description" content="My blog. Read some posts if you want!" />
</svelte:head>

<p class="italic text-center">Click tags to add filters. Applied filters:</p>
<ul class="flex flex-wrap gap-1 mb-8 mt-2 justify-center">
	{#each $filters as tag}
		<li>
			<button
				on:click={() => {
					const index = $filters.indexOf(tag);
					$filters.splice(index, 1);
					$filters = $filters;
				}}
			>
				<Tag {tag} />
			</button>
		</li>
	{/each}
</ul>

<ul class="space-y-4">
	{#each filteredPosts as post}
		<li>
			<Post {post} />
		</li>
	{/each}
</ul>
