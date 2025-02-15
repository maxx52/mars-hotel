<template>
  <v-toolbar :elevation="8" class="bg_opacity fixed">
    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up text-white"></v-app-bar-nav-icon>
    <v-app-bar-title class="text-white font-weight-bold text-subtitle-2 text-sm-h4 text-md-h4">
      <router-link href="/" class="text-decoration-none text-white">
        МАРС Отель
      </router-link>
    </v-app-bar-title>
    <div v-for="button of buttons" :key="button.id" class="hidden-sm-and-down">
      <router-link :to="button.link">
        <v-btn class="ml-2" variant="text" v-smooth-scroll="{ duration: 1000 }">
          <span class="font-weight-think text-white">{{ button.title }}</span>
        </v-btn>
      </router-link>
    </div>
    <v-spacer></v-spacer>
    <a href="tel:+79095066777" class="text-white font-weight-bold text-h4 text-decoration-none hidden-md-and-down">+7
      909 506 67 77</a>
    <a href="tel:+79095066777" class="text-white text-h6 hidden-lg-and-up">
      <v-icon>mdi-phone</v-icon>
    </a>
    <a href="https://wa.me/79095066777?text=Здравствуйте. Я хочу забронировать квартиру."
      class="text-white text-h6 ml-4 mr-3">
      <v-icon>mdi-whatsapp</v-icon>
    </a>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" temporary>
    <div>
      <v-row class="pt-8 mx-0 d-inline-block" dense no-gutters>
        <div v-for="button of buttons" :key="button.id">
          <v-btn class="mb-3" variant="text" :href="button.link" v-smooth-scroll="{ duration: 1000 }">
            <span class="font-weight-light">{{ button.title }}</span>
          </v-btn>
        </div>
      </v-row>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    buttons: [
      { title: 'Апартаменты', link: '/apartments', id: 1 },
      { title: 'Цены', link: '#price', id: 2 },
      { title: 'Отзывы', link: '#testimonials', id: 3 },
      { title: 'Фотографии', link: '#photo', id: 4 },
      { title: 'Контакты', link: '#contacts', id: 5 }
    ]
  })
}
</script>

<style lang="sass" scoped>
.bg_opacity
  background: rgba(0, 0, 0, 0.5)

.fixed
  position: fixed
  z-index: 1000
</style>
