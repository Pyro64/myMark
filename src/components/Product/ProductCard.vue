<template>
  <router-link :to="{ name: 'detail', params: { id: `${product.id}` } }">
    <div class="card">
      {{ product.id }}
      <svg
        v-if="remove"
        class="card__close"
        @click.prevent.stop="removeProduct(product)"
      >
        <path
          d="M17.297 0.0181055C18.7015 0.0444691 19.9597 1.25901 19.9861 2.7072C20.0161 7.56174 19.987 12.4163 19.987 17.2708C19.9779 18.6481 18.8261 19.9172 17.3979 19.9881C17.3642 19.9899 17.3306 19.9908 17.297 19.9908C12.4424 20.0208 7.58788 19.9917 2.73424 19.9917C1.3597 19.9826 0.0869699 18.8308 0.0160608 17.4026C0.0142427 17.369 0.0133333 17.3354 0.0133333 17.3017C-0.0166667 12.4472 0.0133333 7.59265 0.0133333 2.73901C0.0215152 1.36447 1.17333 0.0917416 2.60152 0.0208325C2.63515 0.0190144 2.66879 0.0190146 2.70242 0.0181055C7.56697 -0.0118945 12.4324 -0.0118945 17.297 0.0181055ZM2.7397 1.83356C2.26606 1.83629 1.83788 2.23901 1.82879 2.72992C1.79879 7.57992 1.79879 12.4299 1.82879 17.279C1.83788 17.7481 2.24242 18.1663 2.72515 18.1754C7.57515 18.2054 12.4242 18.2054 17.2742 18.1754C17.7415 18.1672 18.1615 17.7699 18.1706 17.279C18.2006 12.4299 18.2006 7.57992 18.1706 2.72992C18.1624 2.26265 17.7652 1.84265 17.2742 1.83356C12.4297 1.80356 7.58424 1.83356 2.7397 1.83356ZM8.71606 10.0045L5.72606 7.01538C5.26242 6.52447 5.52697 5.55447 6.26697 5.47083C6.36424 5.45992 6.38788 5.46538 6.41879 5.46629C6.64061 5.48538 6.84788 5.5772 7.01061 5.73083L9.9997 8.72083L12.9897 5.73083C13.1761 5.55447 13.417 5.45901 13.6824 5.46629C13.8897 5.48447 13.957 5.51538 14.0706 5.5781C14.5397 5.83811 14.6915 6.54901 14.3079 6.97811C14.297 6.99083 14.2852 7.00265 14.2733 7.01538L11.2833 10.0045L14.2733 12.9945C14.7479 13.4963 14.4461 14.4999 13.6824 14.5426C13.4615 14.5554 13.2379 14.4836 13.0652 14.3463C13.0297 14.3181 13.0224 14.309 12.9897 14.2781L9.9997 11.2881L7.01061 14.2781C6.50879 14.7527 5.50424 14.4463 5.46152 13.6872C5.4497 13.4663 5.52061 13.2427 5.65879 13.0699C5.68697 13.0345 5.69515 13.0272 5.72606 12.9945L8.71606 10.0045Z"
          fill="#DDDDDD"
        />
      </svg>
      <img class="card__img" :src="product.src" alt="card" />
      <div class="card__block">
        <div class="card__name">{{ product.name }}</div>
        <div class="card__item">
          <div class="card__price">{{ product.price }} ₽</div>
          <div v-if="product.sales" class="card__sales list-complete-item">
            {{ product.sales }} ₽
          </div>
        </div>
      </div>
      <n-button class="card__button" @click.prevent.stop="openModal">
        Добавить
      </n-button>
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
  remove: {
    type: Boolean,
    required: false,
  },
});
const { checkFavorites, removeProduct } = useProductsCardStore();
let isFavorite = ref(false);
watchEffect(() => {
  isFavorite.value = checkFavorites(props.product.id);
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
  position: relative;

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
  &__close {
    position: absolute;
    top: 5px;
    right: 5px;
    @include fluid(width, 16px, 20px);
    @include fluid(height, 16px, 20px);
    path {
      transition: $trn;
    }
    &:hover {
      path {
        fill: $red;
      }
    }
  }
}
</style>
