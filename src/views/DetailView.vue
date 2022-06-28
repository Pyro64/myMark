<template>
  <my-breadcrumb :routes="routes" />
  <product-detail :product="product" />
  <info-banner
    background="linear-gradient(180deg, #ECECEA 0%, #E4E4E2 47.45%, #DFE0DD 73.39%, #D9D9D7 100%)"
    title="Нашли дешевле?" text="Снизим цену специально для вас" to="/"
    :img="priceBannerImg" />
  <slider-card :slides="products" v-slot:default="slotProps" title="Сопутствующие товары"
               prev="concomitant-prev" next="concomitant-next" slidesView="6">
    <card-product :item="slotProps.slide" />
  </slider-card>
  <slider-card :slides="products" v-slot:default="slotProps" title="Вы просматривали"
               prev="watch-prev" next="watch-next" slidesView="6">
    <card-product :item="slotProps.slide" />
  </slider-card>
  <info-banner title="Мы всегда рядом" text="Круглосуточная поддержка
работает для вас без выходных" to="/" :img="supportBannerImg" />
</template>

<script>
import ProductDetail from "../components/ProductDetail.vue";
import { useProductsCardStore } from "../stores/productCard";
import { useRoute } from "vue-router";
import MyBreadcrumb from "../components/UI/MyBreadcrumb.vue";
import CardProduct from "../components/UI/CardProduct.vue";
import SliderCard from "../components/SliderCard.vue";
import supportBannerImg from "../assets/images/support-banner.png";
import priceBannerImg from "../assets/images/support-banner-2.png";
import InfoBanner from "../components/InfoBanner.vue";
import { storeToRefs } from "pinia";

export default {
  name: "DetailView",
  components: { InfoBanner, CardProduct, SliderCard, MyBreadcrumb, ProductDetail },

  setup() {
    const store = storeToRefs(useProductsCardStore());
    const { products } = store;
    const { getProductById } = useProductsCardStore();
    const route = useRoute();
    const product = getProductById(route.params.id);
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
      },
      {
        id: 2,
        to: `/products/${product.id}`,
        text: product.name
      }
    ];
    return { routes, product, products, supportBannerImg, priceBannerImg };
  }
};
</script>

<style scoped>

</style>