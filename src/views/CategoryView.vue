<template>
  <my-breadcrumb :routes="routes" />
  <product-catalog />
  <home-banner :banner="banner" :container="true" />
  <slider-card :slides="products" v-slot:default="slotProps" title="Популярные товары"
               prev="product-prev" next="product-next" :slidesView="6">
    <card-product :item="slotProps.slide" />
  </slider-card>
  <info-banner title="Мы всегда рядом" text="Круглосуточная поддержка
работает для вас без выходных" to="/" :img="supportBannerImg" />
</template>

<script setup>
import HomeBanner from "../components/HomeBanner.vue";
import SliderCard from "../components/SliderCard.vue";
import { storeToRefs } from "pinia/dist/pinia";
import CardProduct from "../components/UI/CardProduct.vue";
import { useProductsCardStore } from "../stores/productCard";
import ProductCatalog from "../components/ProductCatalog.vue";
import MyBreadcrumb from "../components/UI/MyBreadcrumb.vue";
import supportBannerImg from "../assets/images/support-banner.png";
import InfoBanner from "../components/InfoBanner.vue";
import card1 from "../assets/images/card/card-1.png";

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
  src: card1,
  name: "Риббон Wax/Resin 110 мм х 74 м",
  price: 100,
  totalPrice: 100,
  countProduct: 1,
  sales: 1_899
};
</script>

