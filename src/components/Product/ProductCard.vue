<template>
  <router-link :to="{ name: 'detail', params: { id: `${product.id}` } }">
    <div class="card">
      {{ product.id }}
      {{ isFavorite }}
      <img class="card__img" :src="product.src" alt="card" />
      <div class="card__block">
        <div class="card__name">{{ product.name }}</div>
        <div class="card__item">
          <div class="card__price">{{ product.price }} ₽</div>
          <div v-if="product.sales" class="card__sales">
            {{ product.sales }} ₽
          </div>
        </div>
      </div>
      <n-button class="card__button" @click.prevent.stop="openModal"
        >Добавить</n-button
      >
      <n-modal
        v-model:show="showModal"
        :block-scroll="false"
        :auto-focus="false"
      >
        <n-card
          style="width: 600px"
          :bordered="false"
          :title="product.name"
          size="huge"
          role="dialog"
          aria-modal="true"
          closable
          @close="showModal = false"
        >
          <product-control :isFavorite="isFavorite" :product="product" />
        </n-card>
      </n-modal>
    </div>
  </router-link>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import ProductControl from "./ProductControl.vue";
import { useProductsCardStore } from "../../stores/productCard";
import { storeToRefs } from "pinia";
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
});
const { checkFavorites, products } = useProductsCardStore();
let isFavorite = ref(false);
watchEffect(() => {
  isFavorite.value = checkFavorites(props.product.id);
  console.log(isFavorite);
});
let showModal = ref(false);
const openModal = (e) => {
  showModal.value = true;
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins";

.card {
  @include fluid(padding, 10px, 20px);
  @include fluid(min-height, 350px, 420px);
  transition: $trn;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    @include hover;
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  &__item {
    @include fluid(margin-bottom, 10px, 15px);
    display: flex;
    align-items: center;
  }

  &__img {
    @include fluid(height, 150px, 200px);
    @include fluid(margin-bottom, 10px, 20px);
    width: 100%;
    object-fit: contain;
    transition: $trn;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__name {
    @include fluid(font-size, 12px, 14px);
    font-weight: 600;
    color: $black;
    margin-bottom: 5px;
  }

  &__price {
    @include fluid(font-size, 12px, 16px);
    user-select: none;
    color: $red;
    font-weight: 600;
  }

  &__sales {
    @include fluid(font-size, 12px, 16px);
    @include fluid(margin-left, 5px, 10px);
    font-weight: 500;
    opacity: 0.5;
    text-decoration: line-through;
    color: $gray;
  }

  &__button {
    @include fluid(font-size, 14px, 16px);
    @include fluid(height, 30px, 46px);
    width: 100%;
    color: #fff;
    font-weight: 600;
    background: $red;
    border-radius: 15px;
    outline: none;
  }
}
</style>
