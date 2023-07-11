<script lang="ts">
	export let tag: string;

	export let xsText = false;
</script>

<p
	class="{xsText
		? 'text-xs'
		: 'text-sm'} py-1 px-2 select-none bg-amber-500 hover:bg-amber-400 transition hover:cursor-default rounded text-white font-bold uppercase"
>
	{tag}
</p>
