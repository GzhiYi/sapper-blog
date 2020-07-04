<script context="module">
	export function preload({ params, query }) {

		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
	a {
		margin: 6px 0;
	}
</style>

<svelte:head>
	<title>GzhiYi's Blog</title>
	<meta name="description" content="一枚前端工程师，编程是一份兴趣，热爱着生活。喜欢开发一些有兴趣的产品，践行程序员的乐趣。">
	<meta name="keywords" content="前端开发者，web，vue，React，svelte，小程序，JavaScript，CSS，blog">
</svelte:head>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a class="e-underline" rel='prefetch' href='blog/{post.slug}'>{new Date(post.fmData.attributes.date).toLocaleDateString()} {post.fmData.attributes.title}   </a></li>
	{/each}

</ul>