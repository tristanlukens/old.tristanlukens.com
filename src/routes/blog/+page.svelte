<script lang="ts">
	import type { PageData } from './$types';
	import type { post } from '$lib/server/database';

	import Post from '$lib/components/post.svelte';

	import { filters } from '$lib/stores';
	import Tag from '$lib/components/tag.svelte';

	export let data: PageData;

	// this is hilariously inefficient. O(n^3) lol

	let filteredPosts: post[] = [];
	$: data.posts.forEach((post) => {
		post.tags.forEach((tag) => {
			$filters.forEach((filter) => {
				if (tag === filter && !$filters.includes(filter)) {
					filteredPosts.push(post);
				}
			});
		});
	});
</script>

<svelte:head>
	<title>Blog | Tristan Lukens</title>
	<meta name="description" content="My blog. Read some posts if you want!" />
</svelte:head>

<div class="hidden sm:block">
	<p class="text-center font-bold">Current filters</p>
	{#if $filters.length !== 0}
		<div class="py-6">
			<ul class="flex list-none flex-wrap gap-1 items-center justify-center">
				{#each $filters as filter}
					<button
						on:click={() => {
							$filters.filter((item) => item !== filter);
							$filters = $filters;
							console.log($filters);
						}}
					>
						<Tag tag={filter} />
					</button>
				{/each}
			</ul>
		</div>
	{:else}
		<p class="text-center italic py-6">no filters selected</p>
	{/if}
</div>

<ul class="space-y-4">
	{#if $filters.length !== 0}
		{#each filteredPosts as post}
			<li>
				<Post {post} />
			</li>
		{/each}
	{:else}
		{#each data.posts as post}
			<li>
				<Post {post} />
			</li>
		{/each}
	{/if}
</ul>
