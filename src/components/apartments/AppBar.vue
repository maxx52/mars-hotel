<template>
  <v-toolbar :elevation="8" class="bg_opacity fixed">
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up text-white"></v-app-bar-nav-icon>
    <router-link to="/" class="text-decoration-none">
      <v-app-bar-title
        class="text-white text-decoration-none font-weight-light text-h5 text-sm-h4 text-md-h4">МАРС
        Отель</v-app-bar-title>
    </router-link>
    <router-link to="/hotel" class="text-decoration-none">
      <div class="hidden-sm-and-down">
        <v-btn class="ml-2" variant="text">
          <span class="font-weight-medium text-white">Отель</span>
        </v-btn>
      </div>
    </router-link>
    <div v-for="button of buttons" :key="button.id" class="hidden-sm-and-down">
      <a :href="button.link" v-smooth-scroll="{ duration: 1000 }">
        <v-btn class="ml-2" variant="text">
          <span class="font-weight-medium text-white">{{ button.title }}</span>
        </v-btn>
      </a>
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
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-navigation-drawer v-model="drawer" temporary>
    <div>
      <v-row class="pt-8 mx-0 d-inline-block" dense no-gutters>
        <router-link to="/hotel" class="text-decoration-none">
          <div class="hidden-sm-and-down">
            <v-btn class="ml-2" variant="text">
              <span class="font-weight-medium text-white">Отель</span>
            </v-btn>
          </div>
        </router-link>
        <router-link to="/apartments" class="text-decoration-none">
          <div class="hidden-sm-and-down">
            <v-btn class="ml-2" variant="text">
              <span class="font-weight-medium text-white">Апартаменты</span>
            </v-btn>
          </div>
        </router-link>
        <v-btn class="mb-3" variant="text" href="/hotel">
          <span class="font-weight-light">Отель</span>
        </v-btn>
        <v-btn class="d-block" variant="text" href="/apartments">
          <span class="font-weight-light">Апартаменты</span>
        </v-btn>
        <v-divider></v-divider>
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
