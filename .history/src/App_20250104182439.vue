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
      const descEl = document.querySelector('head meta[name="description"]');
      const titleEl = document.querySelector('head title');

      descEl.setAttribute('content', items[0]['meta-desc']);
      titleEl.textContent = items[0]['meta-title'];
    })
}
</script>