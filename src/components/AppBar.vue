<template>
  <v-toolbar :elevation="8" class="bg_opacity fixed">
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up text-white"></v-app-bar-nav-icon>
    <router-link to="/" class="text-decoration-none">
      <v-app-bar-title
        class="text-white text-decoration-none font-weight-light text-h4 text-sm-h4 text-md-h4">МАРС
        Отель</v-app-bar-title>
    </router-link>
    <div class="hidden-sm-and-down">
      <a href="/hotel" class="text-decoration-none">
        <v-btn class="ml-2" variant="text">
          <span class="font-weight-medium text-white">Отель</span>
        </v-btn>
      </a>
    </div>
    <div class="hidden-sm-and-down">
      <a href="/apartments" class="text-decoration-none">
        <v-btn class="ml-2" variant="text">
          <span class="font-weight-medium text-white">Апартаменты</span>
        </v-btn>
      </a>
    </div>
    <div v-for="button of buttons" :key="button.id" class="hidden-sm-and-down">
      <a :href="button.link" v-smooth-scroll="{ duration: 1000 }">
        <v-btn class="ml-2" variant="text">
          <span class="font-weight-medium text-white">{{ button.title }}</span>
        </v-btn>
      </a>
    </div>
    <v-spacer></v-spacer>
    <a href="tel:+79095066777" class="text-white font-weight-bold text-h4 text-decoration-none hidden-md-and-down">+7 909 506 67 77</a>
    <a href="tel:+79095066777" class="text-white text-h6 hidden-lg-and-up">
      <v-icon>mdi-phone</v-icon>
    </a>
    <a href="https://wa.me/79095066777?text=Здравствуйте. Я хочу забронировать квартиру."
      class="text-white text-h6 ml-4 mr-3">
      <v-icon>mdi-whatsapp</v-icon>
    </a>
    <v-spacer class="hidden-md-and-down"></v-spacer>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-row class="pt-8 mx-0 d-inline-block" dense no-gutters>
      <div>
        <router-link to="/hotel" class="text-decoration-none">
          <v-btn class="mb-3" variant="text">
            <span class="font-weight-light text-grey">Отель</span>
          </v-btn>
        </router-link>
      </div>
      <div>
        <router-link to="/apartments" class="text-decoration-none">
          <v-btn class="mb-3" variant="text">
            <span class="font-weight-light text-grey">Апартаменты</span>
          </v-btn>
        </router-link>
      </div>
      <div v-for="button of buttons" :key="button.id">
        <a :href="button.link" v-smooth-scroll="{ duration: 1000 }" class="text-decoration-none">
          <v-btn class="mb-3" variant="text">
            <span class="font-weight-light text-grey">{{ button.title }}</span>
          </v-btn>
        </a>
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    buttons: [
      // { title: 'Отель', link: '/hotel', id: 5 },
      // { title: 'Апартаменты', link: '/apartments', id: 6 },
      { title: 'Цены', link: '#price', id: 1 },
      { title: 'Отзывы', link: '#testimonials', id: 2 },
      { title: 'Фотографии', link: '#photo', id: 3 },
      { title: 'Контакты', link: '#contacts', id: 4 }
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
