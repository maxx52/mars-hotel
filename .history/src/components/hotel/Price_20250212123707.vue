<template>
  <section class="sect-price pt-10 pb-10" id="price">
    <h3 class="text-h3 text-center font-weight-bold mb-6 mt-5 ma-auto">Номера и цены</h3>
    <v-container>
      <v-row>
        <v-col md="6" xs="12" sm="6" v-for="(card, i) of cards" :key="i">
          <v-card variant="outlined" class="text-center pa-4 pa-sm-5 bg-white" elevation="15" min-height="420">
            <v-card-title class="text-h6 text-sm-h5 font-weight-bold">{{ card.title }}</v-card-title>
            <v-carousel height="300" hide-delimiter-background hide-delimiters cycle interval="8000">
              <v-carousel-item v-for="(slide, i) of slides" :key="i" src="{{slide.src}}" cover>
              </v-carousel-item>
            </v-carousel>
            <v-card-text class="text-sm-subtitle-1 font-weight-thin">{{ card.subtitle }}</v-card-text>
            <v-card-text class="text-md-h3 text-sm-h4 text-h4 text-lg-h2 font-weight-bold">{{ card.text
              }}</v-card-text>
            <v-card-actions>
              <section class="buttons">
                <div class="container">

                  <a :href="card.link" class="btn btn-1">
                    <svg>
                      <rect x="0" y="0" fill="none" width="100%" height="100%" />
                    </svg>
                    Забронировать
                  </a>
                </div>
              </section>
              <!-- <v-btn href="https://api.whatsapp.com/send/?phone=79095066777&text&type=phone_number&app_absent=0" class="ml-auto mr-auto bg-red-lighten-3 text-white pa-3 pa-sm-3 pa-md-3 pb-7 mb-5">Забронировать</v-btn> -->
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
        title: 'Двухместный стандартный улучшенный номер с одной кроватью (1)',
        subtitle: 'Погрузитесь в атмосферу элегантности. Дизайнерское оформление сочетает в себе современный стиль и уют, создавая идеальную обстановку для вашего отдыха.',
        text: 'от 2390 руб.',
        link: '/hotel',
        slides: [
          { src: require('../../assets/photo-1.jpg') },
          // { src: require('../../assets/photo-2.jpg') },
          // { src: require('../../assets/photo-3.jpg') },
          // { src: require('../../assets/photo-4.jpg') },
          // { src: require('../../assets/photo-5.jpg') },
          // { src: require('../../assets/photo-6.jpg') },
        ],
        // photos: [
        //   { src: require('../../assets/hotel-1/1.jpg') },
          // { src: require('@/assets/hotel-1/main.jpg') },
          // { src: require('@/assets/hotel-1/1.jpg') },
          // { src: require('../../assets/hotel-1/2.jpg') },
          // { src: require('../../assets/hotel-1/3.jpg') },
          // { src: require('../../assets/hotel-1/4.jpg') },
          // { src: require('../../assets/hotel-1/5.jpg') },
          // { src: require('../../assets/hotel-1/6.jpg') },
          // { src: require('../../assets/hotel-1/7.jpg') },
          // { src: require('../../assets/hotel-1/8.jpg') },
          // { src: require('../../assets/hotel-1/9.jpg') },
          // { src: require('../../assets/hotel-1/10.jpg') },
          // { src: require('../../assets/hotel-1/11.jpg') },
          // { src: require('../../assets/hotel-1/12.jpg') },
          // { src: require('../../assets/hotel-1/13.jpg') },
          // { src: require('../../assets/hotel-1/14.jpg') },
          // { src: require('../../assets/hotel-1/15.jpg') },
          // { src: require('../../assets/hotel-1/16.jpg') },
          // { src: require('../../assets/hotel-1/17.jpg') },
          // { src: require('../../assets/hotel-1/18.jpg') },
          // { src: require('../../assets/hotel-1/19.jpg') },
          // { src: require('../../assets/hotel-1/20.jpg') },
          // { src: require('../../assets/hotel-1/21.jpg') },
          // { src: require('../../assets/hotel-1/22.jpg') },
          // { src: require('../../assets/hotel-1/23.jpg') },
          // { src: require('../../assets/hotel-1/24.jpg') }
        //]
      },
      {
        title: 'Забронировать апартаменты',
        subtitle: 'Современное оформление и уютная атмосфера, идеально подходящая как для краткосрочного, так и для длительного проживания',
        text: 'от 2190 руб.',
        link: '/apartments'
      },
      // { title: 'Апартаменты Комфорт', subtitle: 'Уютные пространства идеально подходят для тех, кто ищет доступное и удобное жилье на время отдыха или командировки. Оснащенные необходимой мебелью и бытовой техникой, апартаменты обеспечивают все условия для комфортного проживания.', text: 'от 2190 руб.' },
      // { title: 'Апартаменты Эконом+', subtitle: 'Эти уютные и функциональные пространства идеально подходят для путешественников с ограниченным бюджетом, не жертвующих комфортом. Оснащены всем необходимым для проживания, включая удобную мебель и базовую бытовую технику.', text: 'от 1690 руб.' }
    ]
  })
}
</script>

<style lang="sass" scoped>
.sect-price
	background-image: url(../../assets/bg.png)
	background-repeat: no-repeat
	background-size: 100% 100%
</style>

<style lang="sass" scoped>
.v-card-title
  white-space: break-spaces

.relative
  position: relative
</style>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,100,900);

//colors
$red: #E1332D;
$white: #fff;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
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
    padding: .25em;
    text-decoration: none;

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