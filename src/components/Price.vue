<template>
	<section class="sect-price pt-10 pb-10" id="price">
		<v-container>
			<v-row>
				<v-col md="6" xs="12" sm="6">
					<v-card variant="outlined" class="text-center pa-4 pa-sm-5 bg-white" elevation="15" min-height="420">
						<v-card-title class="text-h6 text-sm-h5 font-weight-bold">Забронировать номер</v-card-title>
						<v-card-text class="text-sm-subtitle-1 font-weight-thin">Погрузитесь в атмосферу элегантности. Дизайнерское
							оформление сочетает современный стиль и уют, создавая идеальную обстановку для отдыха</v-card-text>
						<v-carousel hide-delimiter-background hide-delimiters :show-arrows="false">
							<v-carousel-item v-for="item of items1" :key="item.id" :src="item.link" cover></v-carousel-item>
						</v-carousel>
						<v-card-text class="text-md-h3 text-sm-h4 text-h4 text-lg-h2 font-weight-bold bottom-0">от 2390
							руб.</v-card-text>
						<v-card-actions class="bottom-0 position-sticky">
							<section class="buttons">
								<div class="container">
									<a href="https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0" class="btn btn-1">
										<svg>
											<rect x="0" y="0" fill="none" width="100%" height="100%" />
										</svg>
										Забронировать номер
									</a>
								</div>
							</section>
						</v-card-actions>
					</v-card>
				</v-col>

				<v-col md="6" xs="12" sm="6">
					<v-card variant="outlined" class="text-center pa-4 pa-sm-5 bg-white" elevation="15" min-height="420">
						<v-card-title class="text-h6 text-sm-h5 font-weight-bold">Забронировать апартаменты</v-card-title>
						<v-card-text class="text-sm-subtitle-1 font-weight-thin">Современное оформление и уютная атмосфера, идеально
							подходящая как для краткосрочного, так и для вашего длительного проживания</v-card-text>
						<v-carousel hide-delimiter-background hide-delimiters :show-arrows="false">
							<v-carousel-item v-for="item of items" :key="item.id" :src="item.link" cover></v-carousel-item>
						</v-carousel>
						<v-card-text class="text-md-h3 text-sm-h4 text-h4 text-lg-h2 font-weight-bold mt-sm-6 mt-md-0">от 2190
							руб.</v-card-text>
						<v-card-actions class="bottom-0 position-sticky">
							<section class="buttons">
								<div class="container">
									<a href="https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0" class="btn btn-1">
										<svg>
											<rect x="0" y="0" fill="none" width="100%" height="100%" />
										</svg>
										Забронировать апартаменты
									</a>
								</div>
							</section>
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
			{
				title: 'Забронировать номер',
				subtitle: 'Погрузитесь в атмосферу элегантности. Дизайнерское оформление сочетает современный стиль и уют, создавая идеальную обстановку для отдыха',
				text: 'от 2390 руб.',
				link: 'https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0'
			},
			{
				title: 'Забронировать апартаменты',
				subtitle: 'Современное оформление и уютная атмосфера, идеально подходящая как для краткосрочного, так и для вашего длительного проживания',
				text: 'от 2190 руб.',
				link: 'https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0'
			},
		],
		items: [
			{ link: require('../assets/photo-1.jpg'), id: 1 },
			// { link: require('../assets/photo-10.jpg'), id: 2 },
			// { link: require('../assets/photo-8.jpg'), id: 3 },
		],
		items1: [
			{ link: require('../assets/1.jpg'), id: 1 },
			// { link: require('../assets/2.jpg'), id: 2 },
			// { link: require('../assets/hotel-4/22.jpg'), id: 3 },
		]
	})
}
</script>

<style lang="sass" scoped>
.sect-price
	background-image: url(../assets/bg.png)
	background-repeat: no-repeat
	background-size: 100% 100%

v-card-text::nth(2)
	margin-top: 16px
</style>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

//colors
$red: #ee9999;
$white: #fff;

a.btn.btn-1 {
	padding: 8px 25px;
	font-weight: 600;

	@media(max-width: 800px) {
		display: inline-flex;
		justify-content: center;
		max-width: max-content;
		margin: 10px 10px 0 5px;
		white-space: nowrap;
	}

	@media(max-width: 375px) {
		text-size: 14px;
	}
}

//base styles

* {
	box-sizing: inherit;
	transition-property: all;
	transition-duration: .6s;
	transition-timing-function: ease;
}

html,
body {
	box-sizing: border-box;
	height: 100%;
	width: 100%;
}

body {
	background: $red;
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
}

// Main wrap
.buttons {
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	text-align: center;
	width: 100%;
}

// Button wrap
.container {
	align-items: center;
	display: block;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	@media (min-width: 600px) {
		justify-content: space-between;
	}
}

p {
	color: $white;
	font-size: 12px;

	@media(min-width: 600px) {
		left: 50%;
		position: absolute;
		transform: translate(-50%, 0);
		top: 90%;
	}

	@media(max-width: 800px) {
		width: 100%;
	}

	@media(max-height: 500px) {
		left: 0;
		position: relative;
		top: 0;
		transform: translate(0, 0);
	}

	a {
		background: rgba($white, 0);
		border-bottom: 1px solid;
		color: $white;
		line-height: 1.4;
		padding: 15px 25px;
		text-decoration: none;
		min-width: max-content;
		display: block;

		&:hover {
			background: rgba($white, 1);
			color: $red;
		}
	}
}

//button styles
//default button
.btn {
	color: #000;
	cursor: pointer;
	// display: block;
	font-size: 16px;
	font-weight: 400;
	line-height: 45px;
	margin: 0 0 2em;
	max-width: 160px;
	position: relative;
	text-decoration: none;
	text-transform: uppercase;
	width: 100%;

	//   @media(min-width: 400px) {
	//     display: inline-block;
	//     margin-right: 2.5em;

	//     &:nth-of-type(even) {
	//       margin-right: 0;
	//     }
	//   }

	@media(min-width: 600px) {

		margin: 0 1em 2em;

		//     &:nth-of-type(even) {
		//       margin-right: 2.5em;
		//     }

		//     &:nth-of-type(5) {
		//       margin-right: 0;
		//     }

	}

	&:hover {
		text-decoration: none;
	}

}

/////////////////////////////////
//button one
///////////////////////////////
.btn-1 {
	background: darken($red, 1.5%);
	font-weight: 100;

	svg {
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	rect {
		fill: none;
		stroke: #fff;
		stroke-width: 2;
		stroke-dasharray: 422, 0;
		transition: all 0.35s linear;
	}
}

.btn-1:hover {
	background: rgba($red, 0);
	font-weight: 900;
	letter-spacing: 1px;

	rect {
		stroke-width: 5;
		stroke-dasharray: 15, 310;
		stroke-dashoffset: 48;
		transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
	}
}

////////////////////////////
//button two
//////////////////////////
.btn-2 {
	letter-spacing: 0;
}

.btn-2:hover,
.btn-2:active {
	letter-spacing: 5px;
}

.btn-2:after,
.btn-2:before {
	backface-visibility: hidden;
	border: 1px solid rgba(#fff, 0);
	bottom: 0px;
	content: " ";
	display: block;
	margin: 0 auto;
	position: relative;
	transition: all 280ms ease-in-out;
	width: 0;
}

.btn-2:hover:after,
.btn-2:hover:before {
	backface-visibility: hidden;
	border-color: #fff;
	transition: width 350ms ease-in-out;
	width: 70%;
}

.btn-2:hover:before {
	bottom: auto;
	top: 0;
	width: 70%;
}
</style>