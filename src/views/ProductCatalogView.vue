<template>
  <catalog-header :productCount="products.length"/>
  <div class="wrapper">
    <div class="sidebar">
      <form action="">
        сортировка
      </form>
    </div>
    <product-list/>
  </div>
  <slider-card :slides="products" v-slot:default="slotProps" title="Популярные товары" link="/products" :isLink="true"
               prev="product-prev" next="product-next" :slidesView="6">
    <product-card :product="slotProps.slide" />
  </slider-card>
  <info-banner title="Мы всегда рядом" text="Круглосуточная поддержка
работает для вас без выходных" to="/" :img="supportBannerImg" />
</template>

<script setup>
import CatalogHeader from "../components/CatalogHeader.vue";
import ProductList from "../components/Product/ProductList.vue";
import {storeToRefs} from "pinia";
import {useProductsCardStore} from "../stores/productCard";
import InfoBanner from "../components/InfoBanner.vue";
import ProductCard from "../components/Product/ProductCard.vue";
import SliderCard from "../components/SliderCard.vue";
import supportBannerImg from "../assets/images/support-banner.png";

const storeProducts = storeToRefs(useProductsCardStore());
const {products} = storeProducts;
</script>
<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';


.wrapper {
  display: flex;
  justify-content: space-between;
  @include container;
}
</style>