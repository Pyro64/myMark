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
      <router-link to="/about" class="homeSlide__link">Популярные категории</router-link>
    </div>

    <swiper
      :navigation="{nextEl: '.arrow__next',prevEl: '.arrow__prev',}"
      :slidesPerView="3"
      :grid="{
      rows: 2,
    }"
      :spaceBetween="30"
      :pagination="{
      clickable: true,
    }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="category in categories" :key="category.id">
        <card-category :category="category" />
      </swiper-slide>

    </swiper>
  </div>
</template>
<script>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
import category1 from "../assets/images/category/category-1.png";
import category2 from "../assets/images/category/category-2.png";
import category3 from "../assets/images/category/category-3.png";
import category4 from "../assets/images/category/category-4.png";
import category5 from "../assets/images/category/category-5.png";
import category6 from "../assets/images/category/category-6.png";
import "swiper/css";

import "swiper/scss/navigation";
import MyTitle from "./UI/MyTitle.vue";
import CardCategory from "./UI/CardCategory.vue";

export default {
  components: {
    CardCategory,
    MyTitle,
    Navigation,
    Swiper,
    SwiperSlide
  },
  setup() {
    const categories = [
      {
        id: 1,
        src: category1,
        text: "Полуглянцевые этикетки"
      },
      {
        id: 2,
        src: category2,
        text: "Синтетические этикетки"
      },
      {
        id: 3,
        src: category3,
        text: "Красящая лента (риббоны)"
      },
      {
        id: 4,
        src: category4,
        text: "Принтеры этикеток"
      },
      {
        id: 5,
        src: category5,
        text: "Ролики для этикет-пистолетов"
      },
      {
        id: 6,
        src: category6,
        text: "Этикет-пистолеты"
      },
      {
        id: 7,
        src: category1,
        text: "Прозрачные этикетки"
      },
      {
        id: 8,
        src: category2,
        text: "Иглы для маркиратора"
      }
    ];
    return {
      categories,
      modules: [Navigation]
    };
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.homeSlide {
  @include fluid(margin-bottom, 25px, 50px);

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