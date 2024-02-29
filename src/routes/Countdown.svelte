<script lang="ts">
	export let remaining: number;
	export let duration: number;
</script>

<!-- countdown -->
<div class="countdown">
	<!-- pause button -->
	<button class="flex text-xl border-none bg-transparent" on:click
		><svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><title>pause-circle</title><path
				d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
				fill="#999"
			/></svg
		></button
	>
	<!-- duration bar -->
	<div class="duration">
		<!-- bar showing remaining time -->
		<div class="remaining" style="--p: {remaining / duration}" />
	</div>
</div>

<style>
	.remaining {
		position: absolute;
		height: 1em;
		width: calc(100% * var(--p));
		background: #999;
	}
	.duration {
		flex: 1;
		overflow: hidden;
		position: relative;
		height: 1em;
		background: #ccc;
	}

	.countdown {
		display: flex;
		align-items: center;
		gap: 1em;
	}
</style>
