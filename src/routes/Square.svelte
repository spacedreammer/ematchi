<script lang="ts">
	import { get_twemoji_url } from '../util';
	import { send } from './transition';
	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
	export let group: 'a' | 'b';
</script>

<!-- squre -->
<div class="square" class:flipped={selected || found}>
	<button on:click />
	<div class="background" />
	{#if !found}
		<img src={get_twemoji_url(emoji)} alt={emoji} out:send={{ key: `${emoji}:${group}` }} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #eee;
		transform-style: preserve-3d;
		transition: transform 0.4s;
		border: 0;

		border-radius: 1em;
	}
	img {
		width: 6em;
		height: 6em;
		pointer-events: none;
		transform: rotateY(180deg);
		backface-visibility: hidden;
	}

	.flipped {
		transform: rotateY(180deg);
	}

	.background {
		position: absolute;
		border: 0.5em solid #eee;
		background: white;
		transform: rotateY(180deg);
		backface-visibility: hidden;
		width: 100%;
		height: 100%;
		border-radius: 1em;
	}
	button {
		width: 100%;
		height: 100%;
		position: absolute;
		backface-visibility: hidden;
		background: #eee;
		border: 0;
		border-radius: 1em;
		font-size: inherit;
	}
</style>
