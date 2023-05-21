<script lang="ts">
	import type { PageData } from './$types';

	import Post from '$lib/components/post.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Tristan Lukens</title>
	<meta name="description" content="My blog. Read some posts if you want!" />
</svelte:head>

<ul class="space-y-4">
	{#each data.posts as post}
		<li>
			<Post {post} />
		</li>
	{/each}
</ul>
