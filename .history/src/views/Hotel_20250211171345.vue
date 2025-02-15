<template>
	<div>
			<AppBar />
			<Carousel />
			<Description />
			<Price />
			<Testimonials />
			<Photo />
			<Booking />
			<Contacts />
			<Footer />
	</div>
</template>

<script>
import AppBar from '@/components/hotel/AppBar.vue';
import Booking from '@/components/Booking.vue';
import Carousel from '@/components/Carousel.vue';
import Contacts from '@/components/Contacts.vue';
import Description from '@/components/hotel/Description.vue';
import Footer from '@/components/Footer.vue';
import Photo from '@/components/Photo.vue';
import Price from '@/components/Price.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
	name: 'Hotel',
	components: {
			AppBar, Carousel, Description, Price, Testimonials, Photo, Booking, Contacts, Footer
	}
}
</script>