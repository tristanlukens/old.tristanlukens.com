<script lang="ts">
	import type { PageData } from './$types';

	import Cover from '$lib/components/cover.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Covers | Tristan Lukens</title>
	<meta
		name="description"
		content="All my drum covers, along with my bass covers. Watch one or two if you want!"
	/>
</svelte:head>

<ul class="space-y-4">
	{#each data.covers as cover}
		<li>
			<Cover {cover} />
		</li>
	{/each}
</ul>
