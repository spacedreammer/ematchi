<script lang="ts">
	import { get_twemoji_url } from '../util';
	import { receive } from './transition';

	export let found: string[];
</script>

<div class="flex justify-center mt-2 gap-6 drop-shadow-2xl">
	{#each found as emoji (emoji)}
		<div class="w-16 h-16 bg-white p-4 border rounded-full flex justify-center items-center mt-6">
			<img
				class="w-9 h-9 pointer-events-none"
				src={get_twemoji_url(emoji)}
				alt={emoji}
				in:receive={{ key: `${emoji}:a` }}
			/>
			<img
				class="w-9 h-9 pointer-events-none"
				src={get_twemoji_url(emoji)}
				alt={emoji}
				in:receive={{ key: `${emoji}:b` }}
			/>
		</div>
	{/each}
</div>

<style>
	img {
		position: absolute;
	}
</style>
