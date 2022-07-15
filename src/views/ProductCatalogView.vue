<template>
  <catalog-header :title="text" :productCount="products.length" />
  <div class="wrapper">
    <div class="sidebar">
      <form action="">сортировка</form>
    </div>
    <product-list
      :products="products"
      :sliceCards="sliceProducts"
      :pageSize="pageSize"
      :step="step"
    />
  </div>
  <slider-card
    :slides="products"
    v-slot:default="slotProps"
    title="Вы просматривали"
    prev="watch-prev"
    next="watch-next"
    :slidesView="6"
  >
    <product-card :product="slotProps.slide" />
  </slider-card>
  <info-banner
    title="Мы всегда рядом"
    text="Круглосуточная поддержка
работает для вас без выходных"
    to="/"
    :img="supportBannerImg"
  />
  <info-text />
</template>

<script setup>
import CatalogHeader from "../components/CatalogHeader.vue";
import ProductList from "../components/Product/ProductList.vue";
import InfoBanner from "../components/InfoBanner.vue";
import ProductCard from "../components/Product/ProductCard.vue";
import supportBannerImg from "../assets/images/support-banner.png";
import SliderCard from "../components/SliderCard.vue";
import InfoText from "../components/InfoText.vue";

import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useProductsCardStore } from "../stores/productCard";

const storeProducts = storeToRefs(useProductsCardStore());
const { products, sliceProducts, page, pageSize, step } = storeProducts;
const route = useRoute();
const text = route.params.name;
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
.wrapper {
  display: flex;
  justify-content: space-between;
  @include container;
}
</style>
