<script lang="ts">
	import type { PageData } from './$types';

	import Post from '$lib/components/post.svelte';

	export let data: PageData;
</script>

<ul class="space-y-4">
	{#each data.posts as post}
		<li>
			<Post {post} />
		</li>
	{/each}
</ul>
