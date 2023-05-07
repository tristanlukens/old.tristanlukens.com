<script lang="ts">
	import type { PageData } from './$types';

	import Cover from '$lib/components/cover.svelte';

	export let data: PageData;
</script>

<ul class="space-y-4">
	{#each data.covers as cover}
		<li>
			<Cover {cover} />
		</li>
	{/each}
</ul>
