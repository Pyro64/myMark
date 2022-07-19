<template>
  <div class="list" ref="div1">
    <div class="list__block">
      <transition-group name="list-complete">
        <div
          class="list__item list-complete-item"
          v-for="product in sliceCards"
          :key="product.id"
        >
          <product-card :product="product" :remove="remove" />
        </div>
      </transition-group>
      <more-btn
        v-if="
          page !== Math.ceil(products.length / pageSize) &&
          products.length !== 0
        "
        @click="setMoreProducts"
      >
        Показать еще
      </more-btn>
      <div v-if="products.length > pageSize" class="list__pagination">
        <n-pagination
          @click="
            sliceCount = 1;
            scroll();
          "
          size="large"
          :default-page="1"
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
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  products: Array,
  sliceCards: Array,
  step: Number,
  remove: {
    type: Boolean,
    required: false,
  },
});
const storeProducts = storeToRefs(useProductsCardStore());
const { page, pageSize, sliceCount } = storeProducts;
const { setMoreProducts } = useProductsCardStore();
const scroll = () => {
  window.scrollTo({
    top: 100,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.list-complete-item {
  transition: all 0.4s ease-in-out;
  display: inline-block;
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
  width: 88.5%;
  @include fluid(margin-bottom, 25px, 50px);

  &__block {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    @include fluid(width, 180px, 240px);
    @include fluid(margin-left, 20px, 40px);
    @include fluid(margin-bottom, 10px, 20px);
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
