<template>
  <div class="homeSlide">
    <div class="homeSlide__block">
      <div class="homeSlide__item">
        <my-title margin="false" title="Популярные товары" />
        <div class="arrow arrow__prev">
          <img class="icon" src="../assets/images/icon/arrow-left.svg">
        </div>
        <div class="arrow arrow__next">
          <img class="icon" src="../assets/images/icon/arrow-right.svg">
        </div>
      </div>
      <router-link to="/about" class="homeSlide__link">Весь каталог</router-link>
    </div>

    <swiper
      :navigation="{nextEl: '.arrow__next',prevEl: '.arrow__prev',}"
      :modules="modules"
      :slides-per-view="6"
      :space-between="40"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <card-product :card="card" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import card1 from "../assets/images/card/card-1.png";
import card2 from "../assets/images/card/card-2.png";
import card3 from "../assets/images/card/card-3.png";
import card4 from "../assets/images/card/card-4.png";
import card5 from "../assets/images/card/card-5.png";
import card6 from "../assets/images/card/card-6.png";
import "swiper/css";
import CardProduct from "./UI/CardProduct.vue";
import MyTitle from "./UI/MyTitle.vue";
import "swiper/scss/navigation";

export default {
  components: {
    Navigation,
    MyTitle,
    CardProduct,
    Swiper,
    SwiperSlide
  },
  setup() {
    const cards = [
      {
        id: 1,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м Риббон Wax/Resin  Риббон Wax/Resin ",
        price: 1_459,
        sales: 1_899
      },
      {
        id: 2,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 459,
        sales: null
      },
      {
        id: 3,
        src: card3,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 4000,
        sales: null
      },
      {
        id: 4,
        src: card4,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        sales: 2500
      },
      {
        id: 5,
        src: card5,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 1500,
        sales: null
      },
      {
        id: 6,
        src: card6,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 150,
        sales: 2000
      },
      {
        id: 7,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        sales: null
      },
      {
        id: 8,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        sales: 456
      }
    ];
    return {
      cards,
      modules: [Navigation]
    };
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.homeSlide {
  &__block {
    @include fluid(margin-bottom, 15px, 30px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__link {
    @include fluid(font-size, 14px, 24px);
    @include fluid(margin-right, 10px, 15px);
    font-weight: 400;
    color: $black;
    position: relative;
    transition: $trn;

    &::before {
      transition: $trn;
      @include fluid(width, 5px, 7px);
      @include fluid(height, 10px, 12px);
      @include fluid(right, -10px, -15px);
      content: '';
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      background: url("../assets/images/icon/arrow-right.svg") no-repeat;
      background-size: contain;
    }

    &:hover {
      color: $red;

      &::before {
        @include fluid(right, -15px, -20px);
        filter: invert(30%) sepia(43%) saturate(2000%) hue-rotate(335deg) brightness(99%) contrast(106%);
      }
    }
  }
}

.icon {
  @include fluid(width, 5px, 7px);
  @include fluid(height, 10px, 12px);
  transition: .38s ease-in-out;
  user-select: none;
}

.arrow {
  @include fluid(width, 30px, 44px);
  @include fluid(height, 30px, 44px);
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    .icon {
      filter: invert(30%) sepia(43%) saturate(2000%) hue-rotate(335deg) brightness(99%) contrast(106%);
    }
  }

  &__prev {
    @include fluid(margin-left, 15px, 20px);
  }

  &__next {
    @include fluid(margin-left, 10px, 15px);
  }
}


</style>