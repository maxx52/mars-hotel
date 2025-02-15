<template>
	<section class="sect_book" cover>
		<v-container>
			<v-row>
				<v-col cols="12">
					<v-col md="6" sm="4" offset-md="3" height="100%">
						<div class="book_form">
							<h2 class="text-sm-h3 text-h4 text-center text-white">Забронируйте квартиру сейчас!</h2>
							<v-col>
								<a href="https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0"
									class="animated-button1 text-center ml-auto mr-auto">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									Написать на WhatsApp
								</a>
							</v-col>
						</div>
					</v-col>
				</v-col>
			</v-row>
		</v-container>
	</section>
</template>

<style lang="sass" scoped>
.sect_book
	background-image: url("../assets/photo-1.jpg")
	background-repeat: no-repeat
	background-size: cover
	.book_form
		margin-top: 50%
		margin-bottom: 50%
</style>
