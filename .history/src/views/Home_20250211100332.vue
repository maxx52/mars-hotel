<template>
	<div>
			<AppBar />
			<Carousel />
			<Description />
			<Price />
			<Testimonials />
			<Contacts />
			<Footer />
	</div>
</template>

<script>
import AppBar from '@/components/apartments/AppBar.vue';
import Carousel from '@/components/Carousel.vue';
import Contacts from '@/components/Contacts.vue';
import Description from '@/components/Description.vue';
import Footer from '@/components/Footer.vue';
import Price from '@/components/Price.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
	name: 'Home',
	components: {
			AppBar, Carousel, Description, Price, Testimonials, Contacts, Footer
	}
}
</script>