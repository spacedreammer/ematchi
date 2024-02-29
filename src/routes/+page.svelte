<script lang="ts">
	import Game from './Game.svelte';
	import '../app.css';
	import Modal from './Modal.svelte';
	import { levels } from './levels';
	import { confetti } from '@neoconfetti/svelte';
	let state: 'waiting' | 'paused' | 'won' | 'lost' | 'playing' = 'waiting';
	let game: Game;
</script>

<Game
	bind:this={game}
	on:play={() => {
		state = 'playing';
	}}
	on:pause={() => {
		state = 'paused';
	}}
	on:win={() => {
		state = 'won';
	}}
	on:lose={() => {
		state = 'lost';
	}}
/>

{#if state !== 'playing'}
	<Modal>
		<header>
			<h1 class="text-6xl">e<span class="text-purple-500">match</span>i</h1>
			<p class="font-phont">the emoji matching game</p>
		</header>
		{#if state === 'won' || state === 'lost'}
			<p>you {state} the game!</p>
		{:else if state === 'paused'}
			<p>Game paused</p>
		{:else}
			<p>choose a level:</p>
		{/if}

		<!-- confetti -->
		{#if state === 'won'}
			<div
				class="confetti"
				use:confetti={{
					stageHeight: innerHeight,
					stageWidth: innerWidth
				}}
			></div>
		{/if}

		<!-- buttons -->
		<div>
			{#if state === 'paused'}
				<button class="border bg-purple-500 text-gray-200 rounded mx-3">resume</button>
				<button class="border bg-purple-500 text-gray-200 rounded mx-3 w-auto">quite</button>
			{:else}
				{#each levels as level}
					<button
						class="border bg-slate-300 rounded mx-3"
						on:click={() => {
							game.start(level);
						}}>{level.label}</button
					>
				{/each}
			{/if}
		</div>
	</Modal>
{/if}

<style>
	.confetti {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 50%;
		top: 30%;
		pointer-events: none;
	}
</style>
