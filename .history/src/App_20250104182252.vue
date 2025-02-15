<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
created() {
  fetch('test.json')
    .then(resp => resp.json())
    .then(items => {
      this.items = items;
      const descEl = document.querySelector('head meta[name="description", content="MARS Hotel – сеть посуточных квартир и гостиниц, предлагающая широкий выбор жилья от бюджетных вариантов до роскошных апартаментов. Удобное расположение, высокий уровень сервиса и гибкие условия бронирования сделают ваш отдых комфортным и незабываемым."]');
      const titleEl = document.querySelector('head title');

      descEl.setAttribute('content', items[0]['meta-desc']);
      titleEl.textContent = items[0]['meta-title'];
    })
}
</script>