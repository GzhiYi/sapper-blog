<svelte:head>
	<title>{post.fmData.attributes.title}-GzhiYi's blog</title>
	<meta name="description" content="{post.fmData.attributes.description || `GzhiYi's blog`}">
	<meta name="keywords" content="{post.fmData.attributes.keywords || `GzhiYi's blog`}">
</svelte:head>
<div class='content'>
	<h1>{post.fmData.attributes.title}</h1>
	<p class="desc">
		{new Date(post.fmData.attributes.date).toLocaleDateString()}
		{#each post.fmData.attributes.labels as label}
			<span class="label">{label}</span>
		{/each}
	</p>
	{@html post.html}
</div>
<div class="divide relative">
	<span class="line"></span>
	<img class="absolute w-6 h-6 cat" src="favicon.png" alt="catcat!">
</div>
<div id="gitalk-container"></div>
<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import { onMount, onDestroy } from 'svelte'
	let zoom = null
	onMount(() => {
		try {
			import('../../../static/medium-zoom.esm.js').then(mediumZoom => {
				zoom = mediumZoom.default('[data-zoomable]')
			})
		} catch (error) {
			console.log('import error', error)
		}
		const gitalk = new Gitalk({
			clientID: '1ceb416f2f4ca6ba6c84',
			clientSecret: '9feefebe3e29a96416c667fc8f2f633edf3c51da',
			repo: 'sapper-blog',
			owner: 'GzhiYi',
			admin: ['GzhiYi'],
			id: document.title,  // Ensure uniqueness and length less than 50
			distractionFreeMode: false  // Facebook-like distraction free mode
		})

		gitalk.render('gitalk-container')
	})
	onDestroy(() => {
		if (zoom) {
			zoom.detach()
		}
	})
	export let post
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h1) {
		margin: 0 0 0.9rem;
	}
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
		margin: 3rem 0 1.5rem;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
    padding: 0.5em;
    border-radius: 0.3rem;
    overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.2em 0;
	}

	.content :global(p) {
		margin: 0.3rem 0 1rem;
	}

	.divide {
		width: 100%;
	}
	.divide .line {
		height: 1px;
    width: 100%;
    display: inline-block;
    background-color: #ebeef5;
    margin: 2rem 0;
	}
	.divide .cat {
		top: calc(50% - 0.95rem);
    left: 0;
    right: 0;
    margin: auto;
	}
	.desc{
		color: #757575;
		font-size: 0.9rem;
		margin-bottom: 3rem !important;
	}
	.label {
		background-color: #f2f2f2;
		color: #757575;
		padding: 0.3rem 0.6rem;
		border-radius: 4px;
		margin-left: 0.5rem;
	}
	.label:first-child {
		margin-left: 1rem;
	}
</style>