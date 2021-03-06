<template>
  <div class="homeSlide">
    <div v-if="isLink === true" class="homeSlide__block">
      <div v-show="slides.length  > slidesView" class="homeSlide__item">
        <my-title :noMargin="true" :title="title" />
        <div class="arrow arrow__prev" :class="prev">
          <img class="icon" src="../assets/images/icon/arrow-left.svg">
        </div>
        <div class="arrow arrow__next" :class="next">
          <img class="icon" src="../assets/images/icon/arrow-right.svg">
        </div>
      </div>
      <router-link :to="link" class="homeSlide__link">Весь каталог</router-link>
    </div>
    <div v-else class="homeSlide__block">
      <my-title :margin="false" :title="title" />
      <div v-show="slides.length  > slidesView" class="homeSlide__item">
        <div class="arrow arrow__prev" :class="prev">
          <img class="icon" src="../assets/images/icon/arrow-left.svg">
        </div>
        <div class="arrow arrow__next" :class="next">
          <img class="icon" src="../assets/images/icon/arrow-right.svg">
        </div>
      </div>
    </div>
    <swiper
      :navigation="{nextEl: `.${next}`,prevEl: `.${prev}`,}"
      :modules="modules"
      :slides-per-view="slidesView"
      :space-between="40"
      :allowTouchMove="false"
      :slidesPerGroup="slidesView"
      :speed="600"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <slot :slide="slide" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/navigation";
import MyTitle from "./UI/MyTitle.vue";

const props = defineProps({
  slides: Array,
  title: String,
  link: String,
  prev: String,
  next: String,
  slidesView: Number,
  isLink: Boolean
});
const modules = [Navigation];
</script>
<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.homeSlide {
  @include fluid(margin-bottom, 25px, 50px);
  @include container;

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
  transition: $trn;
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

.swiper-button-disabled {
  cursor: no-drop;
  opacity: 0.2;
}

</style>