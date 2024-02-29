<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { shuffle } from '../util';
	import Countdown from './Countdown.svelte';
	import Found from './Found.svelte';
	import Grid from './Grid.svelte';
	import { levels } from './levels';
	import type { Level } from './levels';

	const dispatch = createEventDispatcher();
	let size: number;
	let grid: string[] = [];
	let found: string[] = [];
	let remaining: number = 0;
	let duration: number = 0;
	let playing: boolean = false;

	export function start(level: Level) {
		size = level.size;
		duration = level.duration;
		remaining = level.duration;
		grid = create_grid(level);

		resume();
	}

	function resume() {
		playing = true;
		countdown();

		dispatch('play');
	}

	function create_grid(level: Level) {
		const copy = level.emoji.slice();
		const pairs: string[] = [];

		for (let i = 0; i < level.size ** 2 / 2; i += 1) {
			const index = Math.floor(Math.random() * copy.length);
			const emoji = copy[index];

			copy.splice(index, 1);
			pairs.push(emoji);
		}

		pairs.push(...pairs);

		return shuffle(pairs);
	}

	function countdown() {
		let start = Date.now();
		let remaining_at_start = remaining;

		function loop() {
			if (!playing) return;
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (Date.now() - start);

			if (remaining <= 0) {
				//the game is lost
				dispatch('lose');
				playing = false;
			}
		}
		loop();
	}
</script>

<div class="flex justify-center items-center flex-col mt-3 mb-3" style="--size: {size}">
	<div class="w-vmin h-tvmin text-xs">
		{#if playing}
			<Countdown
				{remaining}
				{duration}
				on:click={() => {
					//todo pause game
					playing = false;
					dispatch('pause');
				}}
			/>
		{/if}
	</div>

	<!-- grid template -->
	<div class="w-vmin h-vmin bg-teal-400">
		<Grid
			{grid}
			on:found={(e) => {
				found = [...found, e.detail.emoji];
				if (found.length === size ** 2 / 2) {
					//todo win the game
					dispatch('win');
				}
			}}
			{found}
		/>
	</div>

	<!-- found emoji here -->
	<div class="w-vmin h-tvmin"><Found {found} /></div>
</div>
