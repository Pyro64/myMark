<template>
  <my-breadcrumb :routes="routes" />
  <category-catalog />
  <home-banner :banner="banner" :container="true" />
  <slider-card :slides="products" v-slot:default="slotProps" title="Популярные товары"
               prev="product-prev" next="product-next" :slidesView="6">
    <product-card :product="slotProps.slide" />
  </slider-card>
  <info-banner title="Мы всегда рядом" text="Круглосуточная поддержка
работает для вас без выходных" to="/" :img="supportBannerImg" />
</template>

<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import SliderCard from "../components/SliderCard.vue";
import { storeToRefs } from "pinia/dist/pinia";
import ProductCard from "../components/Product/ProductCard.vue";
import { useProductsCardStore } from "../stores/productCard";
import CategoryCatalog from "../components/Category/CategoryCatalog.vue";
import MyBreadcrumb from "../components/UI/MyBreadcrumb.vue";
import supportBannerImg from "../assets/images/support-banner.png";
import InfoBanner from "../components/InfoBanner.vue";
import banner1 from "../assets/images/banner-1.png";

const storeProducts = storeToRefs(useProductsCardStore());
const { products } = storeProducts;
const routes = [
  {
    id: 1,
    to: "/",
    text: "Главная"
  },
  {
    id: 2,
    to: "/products",
    text: "Каталог товаров"
  }
];
const banner = {
  id: 1,
  text: "Готовы предложить",
  title: "Печать этикеток для OZON",
  subtitle: "Быстро и качественно",
  btn: "Заказать",
  img: banner1
};
</script>

