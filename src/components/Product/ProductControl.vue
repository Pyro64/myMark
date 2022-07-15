<template>
  <div class="productControl">
    <div class="productControl__block">
      <my-counter :product="product" />
      <div class="flex items-center">
        {{ isFavorite }}
        <div class="productControl__sum">Итоговая стоимость:</div>
        <div class="productControl__price">{{ product.totalPrice }} ₽</div>
      </div>
    </div>

    <div class="productControl__block">
      <div class="productControl__item">
        <n-button
          :loading="isLoadingFavorite.value"
          :disabled="isLoadingFavorite.value"
          @click="addFavorite('success')"
          class="productControl__btn"
          >В избранное
        </n-button>
        <n-button
          :loading="isLoadingBasket.value"
          :disabled="isLoadingBasket.value"
          @click="addProduct('success', isLoadingBasket, 'корзину')"
          class="productControl__btn"
          >В корзину
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyCounter from "../UI/MyCounter.vue";
import { reactive, ref, watchEffect } from "vue";
import { useNotification } from "naive-ui";
import card1 from "../../assets/images/card/card-1.png";
import { useProductsCardStore } from "../../stores/productCard";
const props = defineProps({
  product: {
    id: Number,
    src: String,
    name: String,
    price: Number,
    totalPrice: Number,
    countProduct: Number,
    sales: Number,
  },
  isFavorite: {
    type: Boolean,
    require: true,
  },
});
const { addCardFavorite } = useProductsCardStore();

const notification = useNotification();
const isLoadingBasket = reactive({ value: false });
const isLoadingFavorite = reactive({ value: false });
const checkedValue = ref(null);
const handleChange = (e) => {
  checkedValue.value = e.target.value;
};

const addFavorite = (type) => {
  isLoadingFavorite.value = true;
  setTimeout(() => {
    isLoadingFavorite.value = false;
    addCardFavorite(props.product);
    notification[type]({
      content: `Товар ${props.product.name}`,
      meta: `добавлен в избранное`,
      duration: 3000,
    });
  }, 1000);
};
const addProduct = (type, isLoading, text) => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    notification[type]({
      content: `Товар ${props.product.name}`,
      meta: `добавлен в ${text}`,
      duration: 3000,
    });
  }, 1000);
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins";

.productControl {
  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:last-child {
      @include fluid(margin-top, 25px, 50px);
    }
  }

  &__btn {
    @include fluid(height, 35px, 60px);
    @include fluid(font-size, 16px, 20px);
    font-weight: 500;
    border: none;
    outline: none;
    width: 48%;
    background: #eeeeee;
    border-radius: 15px;
  }

  &__price {
    @include fluid(font-size, 14px, 20px);
    @include fluid(margin-left, 10px, 15px);
    font-weight: 600;
    color: $black;
  }

  &__sum {
    @include fluid(font-size, 12px, 18px);
    font-weight: 500;
    color: $gray;
  }
}
</style>
