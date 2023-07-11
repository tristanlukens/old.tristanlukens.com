<script lang="ts">
	import Tag from '$lib/components/tag.svelte';

	export let tags: string[];
</script>

<ul class="flex list-none flex-wrap gap-1 items-center justify-center">
	{#if tags}
		{#each tags as tag}
			<Tag {tag} />
		{/each}
	{/if}
</ul>
