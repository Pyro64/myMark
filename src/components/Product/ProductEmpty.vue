<template>
  <div class="empty">
    <div class="empty__title">{{ title }}</div>
    <router-link class="empty__link" to="/">На главную</router-link>
  </div>
  <slider-card
    :slides="products"
    v-slot:default="slotProps"
    title="Популярные товары"
    link="/products"
    :isLink="true"
    prev="product-prev"
    next="product-next"
    :slidesView="6"
  >
    <ProductCard :product="slotProps.slide" />
  </slider-card>
  <SliderCard
    :slides="products"
    v-slot:default="slotProps"
    title="Вы просматривали"
    prev="watch-prev"
    next="watch-next"
    :slidesView="6"
  >
    <product-card :product="slotProps.slide" />
  </SliderCard>
</template>

<script setup>
import { storeToRefs } from "pinia";
import SliderCard from "../SliderCard.vue";
import ProductCard from "./ProductCard.vue";
import { useProductsCardStore } from "../../stores/productCard";

const storeProducts = storeToRefs(useProductsCardStore());
const { products } = storeProducts;
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.empty {
  @include container;
  @include fluid(margin-top, 25px, 50px);
  @include fluid(margin-bottom, 25px, 50px);
  &__title {
    @include fluid(font-size, 14px, 18px);
    @include fluid(margin-bottom, 10px, 25px);
    color: $black;
    font-weight: 600;
  }
  &__link {
    @include fluid(font-size, 18px, 24px);
    color: $black;
    position: relative;
    transition: $trn;
    &::before {
      @include fluid(width, 5px, 7px);
      @include fluid(height, 10px, 12px);
      @include fluid(right, -12px, -20px);
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: url("../../assets/images/icon/arrow-right.svg") no-repeat;
      background-size: contain;
    }
    &:hover {
      color: $red;
    }
  }
}
</style>
