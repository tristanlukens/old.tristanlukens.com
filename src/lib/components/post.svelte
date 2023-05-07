<script lang="ts">
	import type { post } from '$lib/server/database';

	export let post: post;
</script>

<a href="/blog/post/{post.slug}">
	<div
		class="bg-neutral-50 py-6 px-4 md:gap-4 text-left hover:border-amber-400 hover:cursor-pointer border-l-4 flex flex-col justify-between border-amber-500 rounded transition md:flex-row md:items-center space-y-2"
	>
		<p>{post.title}</p>
		<p class="text-xs italic md:text-right">written on {post.uploadDate}</p>
	</div>
</a>
