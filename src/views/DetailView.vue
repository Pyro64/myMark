<template>
  <my-breadcrumb :routes="routes.value" />
  <product-detail :radio="radio" :product="product.value" />
  <info-banner
    title="Нашли дешевле?" text="Снизим цену специально для вас" to="/"
    :img="priceBannerImg" />
  <slider-card :slides="products" v-slot:default="slotProps" title="Сопутствующие товары"
               prev="concomitant-prev" next="concomitant-next" :slidesView="6">
    <product-card :product="slotProps.slide" />
  </slider-card>
  <slider-card :slides="products" v-slot:default="slotProps" title="Вы просматривали"
               prev="watch-prev" next="watch-next" :slidesView="6">
    <product-card :product="slotProps.slide" />
  </slider-card>
  <info-banner title="Мы всегда рядом" text="Круглосуточная поддержка
работает для вас без выходных" to="/" :img="supportBannerImg" />
</template>

<script setup>
import { reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductsCardStore } from "../stores/productCard";
import { useDetailCardStore } from "../stores/detailCard";
import ProductDetail from "../components/Product/ProductDetail.vue";
import MyBreadcrumb from "../components/UI/MyBreadcrumb.vue";
import ProductCard from "../components/Product/ProductCard.vue";
import SliderCard from "../components/SliderCard.vue";
import supportBannerImg from "../assets/images/support-banner.png";
import priceBannerImg from "../assets/images/support-banner-2.png";
import InfoBanner from "../components/InfoBanner.vue";


const storeCard = storeToRefs(useProductsCardStore());
const storeRadio = storeToRefs(useDetailCardStore());
const { products } = storeCard;
const { getProductById, setDetailProduct } = useProductsCardStore();
const { radio } = storeRadio;
const route = useRoute();
const product = reactive({});
const routes = reactive([]);
watchEffect(() => {
  if (route.params.id) {
    product.value = getProductById(route.params.id);
    routes.value = [
      {
        id: 1,
        to: "/",
        text: "Главная"
      },
      {
        id: 2,
        to: "/category",
        text: "Каталог товаров"
      },
      {
        id: 3,
        to: `/products/${product.value.id}`,
        text: product.value.name
      }
    ];
  }

});


</script>

<style scoped>

</style>