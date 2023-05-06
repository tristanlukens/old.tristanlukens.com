<script lang="ts">
	import { marked } from 'marked';

	// todo: add an automatic way to color spans in h2 tags

	export let md: string;
</script>

<section
	class="prose prose-amber prose-a:transition hover:prose-a:text-amber-500 prose-headings:text-center"
>
	{@html marked.parse(md)}
</section>
