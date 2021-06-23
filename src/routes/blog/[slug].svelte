<svelte:head>
	<title>{post.title}-GzhiYi's blog</title>
	<meta name="description" content="{post.description || site.description}">
	<meta name="keywords" content="{post.keywords || site.keywords}">
</svelte:head>

<div class="base">
	{#each post.labels as label}
		<div class="label">{label}</div>
	{/each}
	<div class="title">{post.title}</div>
	<span class="author">GzhiYi · {post.date}</span>
</div>
<div class="content">{@html post.html}</div>

<script context="module" lang="ts">
	export async function preload({ params }) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		console.log(res)
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
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
	console.log(post)
	export const site = config.site
</script>

<style>
.base {
	padding: 60px 0 60px 200px;
	background-color: #C3CEB9;
}
.title {
	font-size: 48px;
	font-weight: 500;
	margin-bottom: 16px;
}
.author {
	font-size: 18px;
	font-weight: 400;
}
.content {
	overflow: hidden;
	color: #3C3C3C;
	padding: 36px 36px 236px 200px;
	max-width: 1000px;
}

:global(pre) {
	padding: 20px;
	border-radius: 8px;
	background-color: #f8fdf3;
}
:global(code) {
	background-color: #f8fdf3;
	margin: 0 4px;
}
:global(blockquote) {
	background: #d7e0cf;
	padding: 10px;
	margin: 0 0 0 20px;
	border-radius: 16px;
	border-left: 4px solid #a5a5a5;
}
</style>