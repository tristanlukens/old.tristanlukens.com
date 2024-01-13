<script lang="ts">
	import { marked } from 'marked';

	export let md: string = '';

	marked.use({ headerIds: false, mangle: false });
</script>

<section
	class="prose prose-amber prose-a:transition prose-a:text-amber-500 hover:prose-a:text-amber-400 prose-headings:text-center"
>
	<slot>{@html marked.parse(md)}</slot>
</section>
