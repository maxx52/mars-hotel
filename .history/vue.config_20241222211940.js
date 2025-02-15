const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },

  pages: {
    index: {
      description: 'MARS Hotel – сеть посуточных квартир и гостиниц, предлагающая широкий выбор жилья от бюджетных вариантов до роскошных апартаментов. Удобное расположение, высокий уровень сервиса и гибкие условия бронирования сделают ваш отдых комфортным и незабываемым.'
    },
  },

  css: {
    extract: false
  },

  parallel: false
})
