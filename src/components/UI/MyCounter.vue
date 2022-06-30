<template>
  <div class="counter">
    <my-minus @click="decrementProduct()" />
    <div class="counter__block">
      <input v-focus type="number" min="1" class="counter__input" v-model="countProduct" />
      <div class="counter__type">шт.</div>
    </div>
    <my-plus @click="incrementProduct()" />
  </div>
</template>

<script>
import MyPlus from "../icon/MyPlus.vue";
import MyMinus from "../icon/MyMinus.vue";
import { ref } from "vue";
import { useProductsCardStore } from "../../stores/productCard";
import { storeToRefs } from "pinia/dist/pinia";

export default {
  name: "MyCounter",
  components: { MyMinus, MyPlus },
  setup() {
    const storeProducts = storeToRefs(useProductsCardStore());
    const { countProduct } = storeProducts;
    const { incrementProduct, decrementProduct } = useProductsCardStore();
    return {
      countProduct,
      incrementProduct,
      decrementProduct
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.counter {
  @include fluid(width, 120px, 145px);
  @include fluid(height, 40px, 45px);
  @include fluid(padding-left, 10px, 15px);
  @include fluid(padding-right, 10px, 15px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 15px;

  &__block {
    display: flex;
    align-items: center;
  }

  &__input {
    @include fluid(font-size, 12px, 16px);
    color: $black;
    outline: none;
    width: 20px;
  }

  &__type {
    margin-left: 1px;
    user-select: none;
    @include fluid(font-size, 12px, 16px);
    color: $black;
  }
}

</style>