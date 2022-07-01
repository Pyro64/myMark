<template>
  <div class="counter">
    <my-minus @click="decrementProduct(card)" />
    <div class="counter__block">
      <input v-focus type="number" min="1" max="99" class="counter__input" v-model.number="card.countProduct"
             :change="totalPriceProduct(card)" />
      <div class="counter__type">шт.</div>
    </div>
    <my-plus @click="incrementProduct(card)" />
  </div>
</template>

<script>
import MyPlus from "../icon/MyPlus.vue";
import MyMinus from "../icon/MyMinus.vue";
import { useProductsCardStore } from "../../stores/productCard";

export default {
  name: "MyCounter",
  components: { MyMinus, MyPlus },
  props: {
    card: Object
  },
  setup(props) {
    const { incrementProduct, decrementProduct, totalPriceProduct } = useProductsCardStore();
    return {
      totalPriceProduct,
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