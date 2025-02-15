<template>
	<div>
			<AppBar />
			<Carousel />
			<Description />
			<Price />
			<Testimonials />
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
import Price from '@/components/hotel/Price.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
	name: 'Hotel',
	components: {
			AppBar, Carousel, Description, Price, Testimonials, Booking, Contacts, Footer
	}
}
</script>