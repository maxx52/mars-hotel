<template>
	<section class="sect_test" id="testimonials" style="background-color: #fff;">
		<v-container>
			<v-row>
				<v-col cols="12">
					<h2 class="text-center text-h2 font-weight-bold">Отзывы</h2>
				</v-col>
				<v-col md="6" sm="6" cols="12" lg="4" v-for="(item, i) in items" :key="i">
					<v-col class="text-center mb-5">
						<v-icon size="50" color="yellow" class="ml-auto mr-auto shadow" v-for="(star, i) in stars" :key="i">{{ star.icon
						}}</v-icon>
					</v-col>
					<p class="text-h4 text-center font-weight-bold mb-5">{{ item.name }}</p>
					<p class="text-h6 font-weight-light text-center">{{ item.text }}</p>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
export default {
	data: () => ({
		stars: [
			{ icon: 'mdi-star-outline' },
			{ icon: 'mdi-star-outline' },
			{ icon: 'mdi-star-outline' },
			{ icon: 'mdi-star-outline' },
			{ icon: 'mdi-star-outline' }
		],
		items: [
			{ name: 'Елена', text: 'Квартира хорошая, чисто, уютно. Вид из окна шикарный. По бронированию прекрасное сопровождение: инструкции все подробные! Возврат залога моментальный. Благодарю вас за сервис.' },
			{ name: 'Алексей', text: 'Выручили! В ожидании самолета арендовали квартиру. Чисто, уютно. Залог вернули полностью. Цены прям очень классные. Спасибо!' },
			{ name: 'Потапова Настя', text: 'Все отлично. Квартира соответствует фотографиям. Спасибо за ваш комфорт))' },
			{ name: 'Махабат', text: 'Квартира была очень чистой, уютной. Новый ремонт, в хорошем районе. Посуда есть. Чай, сахар, все необходимое есть после дальней дороги быстро что то приготовить.' },
			{ name: 'Оксана Шидловская', text: 'Квартира чистая, ухоженная, соответствует фото. Передача ключей очень упрощенная процедура, не надо никого ждать, сразу возле квартиры можно их получить. Имеется вай фай и вся необходимая техника, посуда чистая. Обязательно буду рекомендовать эту квартиру' },
			{ name: 'Андрей Ерёмин', text: 'Всё очень понравилось! Чисто, уютно, спокойный район. В квартире есть все необходимое. Большое Вам спасибо!' }
		]
	})
}
</script>

<style lang="sass" scoped>
.shadow
	text-shadow: black 1px 0 1px
</style>
