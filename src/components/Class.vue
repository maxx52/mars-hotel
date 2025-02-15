<template>
	<section class="sect_class pt-10 pb-10">
		<v-container>
			<v-row>
				<h2 class="text-h4 text-sm-h3 text-center mb-13 mt-10 ml-auto mr-auto">Наши Предложения: Найдите Своё Место</h2>
				<v-col md="3" sm="3" lg="3" offset-sm="2" offset-lg="0" v-for="(item, i) of items" :key="i">
					<v-avatar :image='item.img' variant="elevated" size="200" class="ml-auto mr-auto mb-6"></v-avatar>
					<p class="font-weight-bold text-h5 text-center mb-2">{{ item.title }}</p>
					<p class="subheader font-weight-thin text-center">{{ item.value }}</p>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
export default {
	data: () => ({
		items: [
			{ img: require('@/assets/avatar-1.jpg'), title: 'Квартира в стиле \"Шебби шик\"', value: 'Люкс' },
			{ img: require('@/assets/avatar-2.jpg'), title: 'Квартира ЖК \"Времена года\"', value: 'Комфорт+' },
			{ img: require('@/assets/avatar-3.jpg'), title: 'Квартира ЖК \"Мичурин Парк\"', value: 'Комфорт' },
			{ img: require('@/assets/avatar-4.jpg'), title: 'Квартира \n\r ЖК \"Норд\"', value: 'Эконом+' }
		]
	})
}
</script>

<style lang="sass" scoped>
.v-avatar
	display: block !important

.sect_class
	background: #fff
</style>
