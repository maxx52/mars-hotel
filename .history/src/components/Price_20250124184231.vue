<template>
	<section class="sect-price pt-10 pb-10" id="price">
		<v-container>
			<v-row>
				<h3 class="text-h3 text-center font-weight-bold mb-6 mt-5 ma-auto">Цены</h3>
				<h4 class="text-h5 text-center">Мы предлагаем отличный выбор квартир, которые подойдут для любого типа отдыха или
					командировки.
				</h4>
				<h4 class="text-h5 text-center mb-10">Наша команда поможет вам найти идеальное жилье, отвечающее вашим требованиям и бюджету.
				</h4>
				<v-col md="6" xs="12" sm="6" v-for="(card, i) of cards" :key="i">
					<v-card variant="outlined" class="text-center pa-4 pa-sm-5 bg-white" elevation="15" min-height="420">
						<v-card-title class="text-h6 text-sm-h5 font-weight-bold">{{ card.title }}</v-card-title>
						<v-card-text class="text-sm-subtitle-1 font-weight-thin">{{ card.subtitle }}</v-card-text>
						<v-card-text class="text-md-h3 text-sm-h4 text-h4 text-lg-h2 font-weight-bold">{{ card.text }}</v-card-text>
						<v-card-actions>
							<v-btn href="https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0" class="ml-auto mr-auto bg-red-lighten-3 text-white pa-3 pa-sm-3 pa-md-3 pb-7 mb-5">Забронировать</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<script>
export default {
	data: () => ({
		cards: [
			{ title: 'Апартаменты Люкс', subtitle: 'Погрузитесь в атмосферу элегантности. Дизайнерское оформление сочетает в себе современный стиль и уют, создавая идеальную обстановку для вашего отдыха.', text: 'от 2390 руб.' },
			{ title: 'Апартаменты Комфорт+', subtitle: 'Современное оформление и уютная атмосфера, идеально подходящая как для краткосрочного, так и для длительного проживания', text: 'от 2190 руб.' },
			{ title: 'Апартаменты Комфорт', subtitle: 'Уютные пространства идеально подходят для тех, кто ищет доступное и удобное жилье на время отдыха или командировки. Оснащенные необходимой мебелью и бытовой техникой, апартаменты обеспечивают все условия для комфортного проживания.', text: 'от 1190 руб.' },
			{ title: 'Апартаменты Эконом+', subtitle: 'Эти уютные и функциональные пространства идеально подходят для путешественников с ограниченным бюджетом, не жертвующих комфортом. Оснащены всем необходимым для проживания, включая удобную мебель и базовую бытовую технику.', text: 'от 1690 руб.' }
		]
	})
}
</script>

<style lang="sass" scoped>
.sect-price
	background-image: url(../assets/bg.png)
</style>
