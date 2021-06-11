<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<div class="flex">
	<div class="base">
		<div class="title">{post.title}</div>
		<span>{fixDate(post.fmData.attributes.date)}</span>
	</div>
	<div class="content">{@html post.html}</div>
</div>

<script context="module" lang="ts">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();
		console.log(data)
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
	function fixDate(date: string): string {
		if (!date) return ''
		return date.split('T')[0]
	}
</script>

<script lang="ts">
	export let post: { slug: string; title: string, html: any, fmData: any };
</script>

<style>
</style>