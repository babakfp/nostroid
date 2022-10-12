<script>
	import { copy } from 'svelte-copy'
	import { onMount } from 'svelte'
	import toast, { Toaster } from 'svelte-french-toast'
	
	const userCode = 'dd105dc79827efb778178f76c983ef14d474966d554baab31a74eb6077211114'
</script>

<Toaster />

<div class="h-20 absolute top-0 inset-x-0 bg-gradient-to-b from-gray-800 to-transparent" />

<div class="relative flex items-end justify-between gap-4">
	<div class="w-20 min-w-20 bg-gray-900 rounded-full">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img class="border-3 border-transparent rounded-full aspect-square" src="https://pbs.twimg.com/profile_images/1557379074322046978/nopS1woe_200x200.png" alt="Your profile image" />
	</div>
	
	<a class="mt-4 btn btn-gray btn-outline rounded-full text-xs h-8 px-3" href="/">Edit profile</a>
</div>

<h1 class="mt-4 font-semibold text-white text-lg">Liam Smith</h1>

<div class="flex items-center gap-2">
	<h2 class="font-code overflow-hidden text-gray-50/60">{userCode}</h2>
	<button class="btn h-auto p-1.5 py-1 btn-gray" use:copy={userCode} on:click={_=> toast.success('Copied to Clipboard!')}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
		</svg>
	</button>
</div>
