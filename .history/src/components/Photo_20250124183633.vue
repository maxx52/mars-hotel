<template>
	<section class="sect_photo" id="photo">
		<v-container>
			<v-row>
				<h2 class="text-h4 text-center ml-auto mr-auto mt-10 mb-8 font-weight-bold">Реальные фото квартир</h2>
				<v-carousel hide-delimiter-background>
					<v-carousel-item v-for="(image, i) of images" :key="i" :src="image.src" cover></v-carousel-item>
				</v-carousel>
			</v-row>
		</v-container>
	</section>
</template>

<script>
export default {
	data: () => ({
		images: [
			{ src: require('@/assets/photo-1.jpg') },
			{ src: require('../assets/photo-2.jpg') },
			{ src: require('../assets/photo-3.jpg') },
			{ src: require('../assets/photo-4.jpg') },
			{ src: require('../assets/photo-5.jpg') },
			{ src: require('../assets/photo-6.jpg') },
			{ src: require('../assets/photo-7.jpg') },
			{ src: require('../assets/photo-8.jpg') },
			{ src: require('../assets/photo-9.jpg') },
			{ src: require('../assets/photo-10.jpg') },
			{ src: require('../assets/photo-11.jpg') },
			{ src: require('../assets/photo-12.jpg') },
			{ src: require('../assets/photo-13.jpg') },
			{ src: require('../assets/photo-14.jpg') },
			{ src: require('../assets/photo-15.jpg') },
			{ src: require('../assets/photo-16.jpg') },
			{ src: require('../assets/photo-17.jpg') },
			{ src: require('../assets/photo-18.jpg') },
			{ src: require('../assets/photo-19.jpg') },
		]
	})
}
</script>

<style lang="sass" scoped>
.sect_photo
	background: url('../assets/bg.png') no-repeat
</style>
