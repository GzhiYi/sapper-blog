<svelte:head>
	<title>{post.title}-GzhiYi's blog</title>
	<meta name="description" content="{post.description || site.description}">
	<meta name="keywords" content="{post.keywords || site.keywords}">
</svelte:head>
<div class="flex">
	<div class="base">
		<div class="title">{post.title}</div>
		<span>{post.date}</span>
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
	import { onMount } from 'svelte'
	import config from '../../config'

	let zoom = null

	onMount(() => {
		try {
			import('../../../static/medium-zoom.esm.js').then(mediumZoom => {
				zoom = mediumZoom.default('[data-zoomable]')
			})
		} catch (error) {
			console.log('import zoom error', error)
		}
	})

	export let post: {
		title: string,
		description: string,
		keywords: string,
		labels: any,
		date: string,
		path: string,
		slug: string,
		html: string
	}
	export const site = config.site
</script>

<style>
</style>