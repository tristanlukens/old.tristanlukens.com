<script lang="ts">
	import type { post } from '$lib/server/database';

	import Tag from './tag.svelte';

	import { filters } from '$lib/stores';

	export let post: post;
</script>

<form action="/blog/post/{post.slug}">
	<button class="w-full">
		<div
			class="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between bg-neutral-50 py-6 px-4 text-left hover:border-amber-400 hover:cursor-pointer border-l-4 border-amber-500 rounded transition space-y-2"
		>
			<p class="flex items-center sm:max-w-[65%] sm:min-w-[50%]">{post.title}</p>
			<div class="flex flex-col space-y-2">
				<p class="text-xs italic sm:text-right line-clamp-1">
					written on {post.uploadDate}
				</p>
				<ul class="justify-end flex-wrap gap-1 hidden sm:flex">
					{#each post.tags as tag}
						<button
							on:click|preventDefault={() => {
								$filters.push(tag);
								$filters = $filters;
							}}
						>
							<li>
								<Tag xsText {tag} />
							</li>
						</button>
					{/each}
				</ul>
			</div>
		</div>
	</button>
</form>
