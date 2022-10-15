<script>
  import '$styles/app.postcss'
	import MobileBottomNav from '$parts/MobileBottomNav/Index.svelte'

</script>

<main class="container py-8 pb-20 min-h-screen">
	<slot />
</main>

<MobileBottomNav />
