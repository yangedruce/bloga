<script setup lang="ts">
	const swiper = useSwiper();
</script>

<template>
	<div class="flex items-center justify-center gap-4 mt-8 mb-16">
		<button @click="swiper.slidePrev()" class="bg-green-50 text-gray-950 border rounded px-4 py-1 w-32">
			Previous
		</button>
		<button @click="swiper.slideNext()" class="bg-green-50 text-gray-950 border rounded px-4 py-1 w-32">Next</button>
	</div>
</template>
