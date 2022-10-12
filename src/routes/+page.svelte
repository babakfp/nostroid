<script>
	import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription,
  } from '@rgossiaux/svelte-headlessui'

  let keyType = 'public-key'

	const keyTypeOptions = [
		{
			label: 'PUBLIC KEY',
			value: 'public-key',
			description: 'A publicly known unique ID, associated with your user on the Nostr network. Can be shared freely. Others can see your posts or follow you using only your public key.',
		},
		{
			label: 'PRIVATE KEY',
			value: 'private-key',
			description: 'A secret key is used to sign for (or unlock) your public key. All content from your user public key will need a signature derived from your private key before being relayed. If a lousy actor discovers your private key they can impersonate you on Nostr network.',
		},
	]
</script>

<h1 class="font-semibold text-xl">Welcome to Nostroid</h1>

<p class="mt-4">
	Nostroid is a decentralized and censorship resistant social platform.
	Nostroid is powered by <a class="link" href="https://github.com/fiatjaf/nostr" target="_blank">The Nostr Protocol</a>.
	In order to participate in The Nostr Network, you will need to have PUBLIC and PRIVATE key pairs.
</p>

<p class="mt-6">
	If you don't have a Nostr key pair, you can either 
	<a class="link" href="/">take a look around</a> or generate a new key pair below.
</p>

<form class="mt-6" on:submit|preventDefault>

	<RadioGroup class="grid gap-2 text-sm sm:grid-cols-2 sm:gap-4" value={keyType} on:change={(e) => keyType = e.detail}>
		{#each keyTypeOptions as option}
			<RadioGroupOption class="duration-150 ease-in-ou origin-bottom active:scale-y-95" value={option.value} let:checked>
				<div class="h-full p-4 border-2 border-gray-800 rounded flex justify-between gap-4 duration-150 cursor-pointer {checked && 'bg-brand/50 border-transparent'}">
					<div class="space-y-2">
						<RadioGroupLabel>{option.label}</RadioGroupLabel>
						<RadioGroupDescription class="text-gray-50/60 text-xs leading-5">{option.description}</RadioGroupDescription>
					</div>
					<div class="flex items-center justify-center w-6 min-w-6 h-6 border-2 border-gray-800 rounded-full duration-150 {checked && 'bg-white/10 border-transparent'}">
						<svg class="w-3 h-3 scale-0 duration-150 {checked && 'scale-100'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
					</div>
				</div>
			</RadioGroupOption>
		{/each}
	</RadioGroup>

	<button class="mt-6 btn btn-brand btn-outline">Generate
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
			<path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
		</svg>
	</button>

	<label class="mt-2 flex items-center pr-2 border-2 border-gray-800 rounded" for>
		<input class="w-full h-14 px-4 bg-transparent text-sm font-code placeholder:text-gray-600 placeholder:font-base" type="text" placeholder="Enter your {keyType.toUpperCase().replace('-', ' ')}" />
		<button class="btn btn-brand text-xs">PROCESS
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
			</svg>
		</button>
	</label>

	<p class="text-gray-400 text-xs leading-5">
		{#if keyType === 'public-key'}
			<p class="mt-2">Entering a public key means you will need to enter a private key each time you post content (either manually or by Nostr browser extension).</p>
		{:else}
			<p class="mt-2">Entering a private key means Nostroid will automatically sign with your private key each time you post content.</p>
		{/if}
	</p>
</form>
