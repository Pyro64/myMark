<template>
  <div class="relative">
    <transition-group name="mode-fade" mode="out-in">
      <div v-if="favorites.length > 0" key="full">
        <catalog-header
          title="Избранные товары"
          :productCount="favorites.length"
        />
        <div class="wrapper">
          <div class="sidebar">
            <form action="">сортировка</form>
          </div>
          <product-list
            :products="favorites"
            :sliceCards="sliceFavorite"
            :step="step"
            :remove="true"
          />
        </div>
      </div>
      <div v-else key="null">
        <product-empty
          title="В избранном пусто. Вы можете добавить товары в этот список из их детальной страницы."
        />
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import CatalogHeader from "../components/CatalogHeader.vue";
import ProductList from "../components/Product/ProductList.vue";

import { storeToRefs } from "pinia";
import { useProductsCardStore } from "../stores/productCard";
import MyBreadcrumb from "../components/UI/MyBreadcrumb.vue";
import ProductEmpty from "../components/Product/ProductEmpty.vue";

const storeProducts = storeToRefs(useProductsCardStore());
const { favorites, step, sliceFavorite } = storeProducts;
const routes = [
  {
    id: 1,
    to: "/",
    text: "На главную",
  },
];
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  @include container;
}
.relative {
  @include container;
}
</style>
