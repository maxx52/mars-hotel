<template>
    <div>
        <AppBar />
        <Carousel />
        <Description />
        <Class />
        <Price />
        <Testimonials />
        <Photo />
        <Booking />
        <Contacts />
        <Footer />
    </div>
</template>

<script>
import AppBar from '@/components/apartments/AppBar.vue';
import Booking from '@/components/Booking.vue';
import Carousel from '@/components/apartments/Carousel.vue';
import Class from '@/components/Class.vue';
import Contacts from '@/components/Contacts.vue';
import Description from '@/components/Description.vue';
import Footer from '@/components/Footer.vue';
import Photo from '@/components/Photo.vue';
import Price from '@/components/apartments/Price.vue';
import Testimonials from '@/components/Testimonials.vue';

export default {
    name: 'Apartments',
    components: {
        AppBar, Carousel, Description, Class, Price, Testimonials, Photo, Booking, Contacts, Footer
    }
}
</script>