<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head';

export default {
  setup() {
    const siteData = reactive({
      title: `MARS Hotel - квартирное бюро`,
      description: `MARS Hotel – сеть посуточных квартир и гостиниц, предлагающая широкий выбор жилья от бюджетных вариантов до роскошных апартаментов. Удобное расположение, высокий уровень сервиса и гибкие условия бронирования сделают ваш отдых комфортным и незабываемым.`
    })
    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        }
      ]
    })
  }
}
</script>
