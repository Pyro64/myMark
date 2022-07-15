<template>
  <catalog-header title="Избранные товары" :productCount="favorites.length" />
  <div class="wrapper">
    <div class="sidebar">
      <form action="">сортировка</form>
    </div>
    <product-list
      :products="favorites"
      :sliceCards="sliceFavorite"
      :pageSize="pageSize"
      :step="step"
    />
  </div>
</template>

<script setup>
import CatalogHeader from "../components/CatalogHeader.vue";
import ProductList from "../components/Product/ProductList.vue";

import { storeToRefs } from "pinia";
import { useProductsCardStore } from "../stores/productCard";

const storeProducts = storeToRefs(useProductsCardStore());
const { favorites, sliceFavorite, page, pageSize, step } = storeProducts;
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
.wrapper {
  display: flex;
  justify-content: space-between;
  @include container;
}
</style>
