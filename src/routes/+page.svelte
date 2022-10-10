<script>
	import {
		Tab,
		TabGroup,
		TabList,
		TabPanel,
		TabPanels,
	} from '@rgossiaux/svelte-headlessui'
</script>

<h1 class="font-semibold text-xl">Welcome to Nostroid</h1>

<p class="mt-4">
	Nostroid is a decentralized and censorship resistant social platform.
	Nostroid is powered by <a class="link" href="https://github.com/fiatjaf/nostr" target="_blank">The Nostr Protocol</a>.
	In order to participate in The Nostr Network, you will need to have PUBLIC and PRIVATE key pairs.
</p>

<div class="mt-4 grid gap-4 p-6 text-sm border border-dashed border-gray-700 rounded">
	<div class="space-y-1">
		<h2 class="font-semibold">PUBLIC KEY</h2>
		<p class="text-gray-400 text-xs">A publicly known unique ID, associated with your user on the Nostr network. Can be shared freely. Others can see your posts or follow you using only your public key.</p>
	</div>

	<div class="space-y-1">
		<h2 class="font-semibold">PRIVATE KEY</h2>
		<p class="text-gray-400 text-xs">A secret key is used to sign for (or unlock) your public key. All content from your user public key will need a signature derived from your private key before being relayed. If a lousy actor discovers your private key they can impersonate you on Nostr network.</p>
	</div>
</div>

<p class="mt-4">
	If you don't have a Nostr key pair you can either 
	<b>generate</b> a new key pair or just take a <strong>look around</strong>.
</p>

<div class="mt-4 flex gap-4">
	<button class="btn btn-brand btn-outline">Generate</button>
	<a class="btn btn-gray btn-outline" href="/">Look around</a>
</div>

<div class="mt-4">
	<h2>Enter your key pairs:</h2>
	
	<TabGroup class="mt-4">
		<TabList class="flex gap-1 bg-gray-50/5 rounded p-1">
			<Tab class="key-tab btn-base w-full text-xs">PUBLIC KEY</Tab>
			<Tab class="key-tab btn-base w-full text-xs">PRIVATE KEY</Tab>
		</TabList>
		<TabPanels class="mt-2">
			<TabPanel>
				<form class="relative" on:submit|preventDefault>
					<label class="flex items-center pr-2 border-2 border-gray-700 rounded" for>
						<input class="w-full h-14 px-4 bg-transparent text-sm font-code placeholder:text-gray-600 placeholder:font-base" type="text" placeholder="Enter your PUBLIC KEY" />
						<button class="btn btn-brand text-xs">PROCESS
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
							</svg>
						</button>
					</label>
				</form>
				<p class="mt-2 text-gray-400 text-xs">Entering a public key means you will need to enter a private key each time you post content (either manually or by Nostr browser extension).</p>
			</TabPanel>
			<TabPanel>
				<form class="relative" on:submit|preventDefault>
					<label class="flex items-center pr-2 border-2 border-gray-700 rounded" for>
						<input class="w-full h-14 px-4 bg-transparent text-sm font-code placeholder:text-gray-600 placeholder:font-base" type="text" placeholder="Enter your PRIVATE KEY" />
						<button class="btn btn-brand text-xs">PROCESS
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
							</svg>
						</button>
					</label>
				</form>
				<p class="mt-2 text-gray-400 text-xs">Entering a private key means Nostroid will automatically sign with your private key each time you post content.</p>
			</TabPanel>
		</TabPanels>
	</TabGroup>
</div>

<style lang="postcss">
	:global(.key-tab) {
		@apply relative;
	}
	:global(.key-tab::after) {
		content: "";
		@apply hide absolute top-full inset-x-center translate-y-0.5 duration-150 ease-in-out;
		border-style: solid;
		border-width: 4px 4px 0 4px;
		border-color: theme(colors.gray.700) transparent transparent transparent;
	}
	:global(.key-tab[aria-selected="true"]) {
		@apply bg-gray-700;
	}
	:global(.key-tab[aria-selected="true"]::after) {
		@apply show;
	}
</style>
