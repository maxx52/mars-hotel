<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import VueMeta from 'vue-meta';

export default {
  metaInfo: {
    title: 'MARS Hotel - квартирное бюро',
    meta: [
      { name: 'description', content: 'MARS Hotel – сеть посуточных квартир и гостиниц, предлагающая широкий выбор жилья от бюджетных вариантов до роскошных апартаментов. Удобное расположение, высокий уровень сервиса и гибкие условия бронирования сделают ваш отдых комфортным и незабываемым.' },
      { property: 'og:title', content: 'MARS Hotel - квартирное бюро' },
    ],
  },
}
</script>
