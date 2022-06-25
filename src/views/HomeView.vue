<template>
  <home-banner />
  <home-link />
  <slider-card :slides="products" v-slot:default="slotProps" title="Популярные товары" link="/products" :isLink="true"
               prev="product-prev" next="product-next" slidesView="6">
    <card-product :item="slotProps.slide" />
  </slider-card>
  <advertising-images />
  <slider-card :slides="categories" v-slot:default="slotProps" title="Популярные категории" link="/category"
               :isLink="true"
               prev="category-prev" next="category-next" slidesView="4">
    <card-category :item="slotProps.slide" />
  </slider-card>
</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeLink from "../components/HomeLink.vue";
import AdvertisingImages from "../components/AdvertisingImages.vue";
import SliderCard from "../components/SliderCard.vue";
import CardProduct from "../components/UI/CardProduct.vue";
import CardCategory from "../components/UI/CardCategory.vue";
import { useCategoryCardStore } from "@/stores/categoryCard";
import { storeToRefs } from "pinia";
import { useProductsCardStore } from "../stores/productCard";

export default {
  components: {
    CardCategory,
    CardProduct,
    SliderCard,
    AdvertisingImages,
    HomeLink,
    HomeBanner
  },
  setup() {
    const storeProducts = storeToRefs(useProductsCardStore());
    const storeCategory = storeToRefs(useCategoryCardStore());
    const { categories } = storeCategory;
    const { products } = storeProducts;
    return {
      products,
      categories
    };
  }
};

</script>

