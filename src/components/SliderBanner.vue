<template>
  <swiper
    :modules="modules"
    :space-between="40"
    :speed="600"
    :loop="true"
    :effect="'fade'"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
    :pagination="{
      dynamicBullets: true,
    }"
  >
    <swiper-slide v-for="banner in banners" :key="banner.id">
      <home-banner :banner="banner" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper";
import HomeBanner from "./HomeBanner.vue";

const props = defineProps({
  banners: {
    type: Array,
    required: true
  }
});
const modules = [Pagination, Autoplay, EffectFade];
</script>

<style lang="scss">
@import '../assets/styles/mixins.scss';

.swiper-pagination {
  @include fluid(top, 300px, 400px);
  bottom: auto;
}

.swiper-pagination-bullet {
  @include fluid(width, 12px, 14px);
  @include fluid(height, 12px, 14px);
  background: transparent;
  border: 1px solid $red;
}

.swiper-pagination-bullet-active {
  background: $red;
}
</style>