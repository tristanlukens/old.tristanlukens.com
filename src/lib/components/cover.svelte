<script lang="ts">
	import type { cover } from '$lib/server/database';

	export let cover: cover;
</script>

<a href="/covers/cover/{cover.slug}">
	<div
		class="bg-neutral-50 py-6 px-4 md:gap-4 text-left hover:border-amber-400 hover:cursor-pointer border-l-4 flex flex-col justify-between border-amber-500 rounded transition md:flex-row md:items-center space-y-2"
	>
		<p>{cover.artist} - {cover.song} | {cover.type} cover</p>
		<p class="text-xs italic md:text-right">
			recorded on <span class="md:line-clamp-1">{cover.uploadDate}</span>
		</p>
	</div>
</a>
