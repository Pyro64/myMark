<template>
  <div class="list">
    <div class="list__block">
      <transition-group name="list-complete">
        <div
          class="list__item list-complete-item"
          v-for="product in sliceCards(false)"
          :key="product.id"
        >
          <product-card :product="product" />
        </div>
      </transition-group>
      <more-btn
        v-if="page !== Math.ceil(products.length / pageSize)"
        @click="setMoreProducts"
      >
        Показать еще
      </more-btn>
      <div v-if="products.length > pageSize" class="list__pagination">
        <n-pagination
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
  sizePicker: Array,
});
const storeProducts = storeToRefs(useProductsCardStore());
const { page, pageSize } = storeProducts;
const { setMoreProducts } = useProductsCardStore();
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.list-complete-item {
  transition: all 0.4s ease-in-out;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

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
