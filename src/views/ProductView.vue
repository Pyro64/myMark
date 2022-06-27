<template>
  <div class="container">
    <div class="breadcrumb ">
      <bread-crumb to="/" text="Главная" />
      <bread-crumb to="/products" text="Каталог товаров" />
    </div>
  </div>
  <product-catalog />
  <home-banner :container="true" />
  <slider-card :slides="products" v-slot:default="slotProps" title="Популярные товары"
               prev="product-prev" next="product-next" slidesView="6">
    <card-product :item="slotProps.slide" />
  </slider-card>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import SliderCard from "../components/SliderCard.vue";
import { storeToRefs } from "pinia/dist/pinia";
import CardProduct from "../components/UI/CardProduct.vue";
import { useProductsCardStore } from "../stores/productCard";
import ProductCatalog from "../components/ProductCatalog.vue";
import BreadCrumb from "../components/UI/BreadCrumb.vue";

export default {
  name: "ProductView",
  components: { BreadCrumb, ProductCatalog, CardProduct, SliderCard, HomeBanner },
  setup() {
    const storeProducts = storeToRefs(useProductsCardStore());
    const { products } = storeProducts;
    return {
      products
    };
  }
};
</script>

