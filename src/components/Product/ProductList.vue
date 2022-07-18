<template>
  <div class="list">
    <div class="list__block">
      <div
        class="list__item"
        v-for="product in sliceCards"
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
          show-size-picker
          :default-page="1"
          v-model:page="page"
          v-model:page-size="pageSize"
          :page-sizes="sizePicker"
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
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  products: Array,
  sliceCards: Array,
  step: Number,
  sizePicker: Array
});
const storeProducts = storeToRefs(useProductsCardStore());
const { page, pageSize } = storeProducts;
const { setMoreProducts } = useProductsCardStore();
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
