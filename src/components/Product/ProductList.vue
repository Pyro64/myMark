<template>
  <div class="list">
    <div class="list__block">
      <div
        v-motion-slide-bottom
        class="list__item"
        v-for="product in sliceProducts"
        :key="product.id"
      >
        <product-card :product="product" />
      </div>
      <more-btn
        v-if="page !== Math.ceil(products.length / pageSize)"
        @click="setMoreProducts"
      >
        Показать еще
      </more-btn>
      <div v-if="products.length > pageSize" class="list__pagination">
        <n-pagination
          v-model:page="page"
          :page-size="pageSize"
          :page-count="Math.ceil(products.length / pageSize)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsCardStore } from "../../stores/productCard";
import MoreBtn from "../UI/MoreBtn.vue";
import ProductCard from "../Product/ProductCard.vue";
const storeProducts = storeToRefs(useProductsCardStore());
const { setMoreProducts } = useProductsCardStore();
const { products, sliceProducts, page, pageSize, step } = storeProducts;
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.list {
  width: 83%;
  @include fluid(margin-bottom, 25px, 50px);
  &__block {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    @include fluid(width, 180px, 240px);
    @include fluid(margin-right, 20px, 40px);
    @include fluid(margin-bottom, 10px, 20px);

    &:nth-child(5n) {
      margin-right: 0;
    }
  }

  &__pagination {
    @include fluid(margin-top, 10px, 25px);
    @include fluid(padding-top, 5px, 10px);
    @include fluid(padding-bottom, 5px, 10px);
    width: 100%;
    background: #ffffff;
    border-radius: 15px;
    display: flex;
    justify-content: center;
  }
}
</style>
