<template>
  <div class="container">
    <div class="detail">
      <div class="flex  justify-between">
        <n-image-group>
          <div class="detail__images">
            <div class="detail__image">
              <n-image class="w-full h-full" object-fit="contain" :src="detail" alt="img" />
            </div>
            <div class="detail__image">
              <n-image class="w-full h-full" object-fit="contain" :src="pistol" alt="img" />
            </div>
            <div class="detail__image">
              <n-image class="w-full h-full" object-fit="contain" :src="product.src" alt="img" />
            </div>
          </div>
        </n-image-group>
        <div class="detail__block">
          <div class="detail__card">
            <div class="flex items-center justify-between mb-6">
              <div class="detail__card-manufacturer">MOTEX</div>
              <div class="flex items-center">
                <img src="../../assets/images/icon/qr.svg" class="detail__code-svg">
                <div class="detail__code-text">Код товара: 268661337</div>
              </div>
            </div>
            <div class="detail__title">{{ product.name }}</div>
            <div class="detail__item">
              <div class="flex items-center">
                <div class="detail__price">{{ product.price }} ₽</div>
                <div v-show="product.sales" class="detail__priceOld">{{ product.sales }} ₽</div>
              </div>
              <div class="flex items-center">
                <my-star :red="true" />
                <div class="detail__rateNumber">4,5 / 5</div>
              </div>
            </div>
            <div class="detail__control">
              <product-control :product="product" />
            </div>
            <n-rate :default-value="4" readonly color="#FF2149">
              <n-icon size="30">
                <my-star />
              </n-icon>
            </n-rate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import detail from "../../assets/images/card/detail-card-3.png";
import pistol from "../../assets/images/card/table-pistol.png";
import MyStar from "../icon/MyStar.vue";
import ProductControl from "./ProductControl.vue";

const props = defineProps({
  product: {
    id: Number,
    src: String,
    name: String,
    price: Number,
    totalPrice: Number,
    countProduct: Number,
    sales: Number
  }
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins';

.container {
  @include container;
}

.detail {
  &__images {
    width: 49%;
    display: flex;
    flex-wrap: wrap;
  }

  &__block {
    width: 40%;
  }

  &__item {
    @include fluid(padding-top, 15px, 25px);
    @include fluid(padding-bottom, 15px, 25px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #DDDDDD;

  }

  &__control {
    @include fluid(margin-top, 2px, 40px);
    @include fluid(margin-bottom, 50px, 100px);

  }

  &__price {
    @include fluid(font-size, 18px, 30px);
    @include fluid(margin-right, 8px, 15px);
    color: $black;
    font-weight: 500;
  }

  &__priceOld {
    @include fluid(font-size, 14px, 24px);
    color: $gray;
    opacity: 0.5;
    text-decoration-line: line-through;
  }

  &__rateNumber {
    @include fluid(font-size, 16px, 24px);
    @include fluid(margin-left, 10px, 15px);
    font-weight: 500;
    color: $black;
  }

  &__card {
    &-manufacturer {
      @include fluid(font-size, 16px, 18px);
      color: $gray;
    }
  }

  &__code {
    &-svg {
      @include fluid(width, 16px, 20px);
      @include fluid(height, 16px, 20px);
      margin-right: 5px;
      object-fit: contain;
    }

    &-text {
      @include fluid(font-size, 12px, 14px);
      color: $gray;
      font-weight: 500;
    }
  }

  &__image {
    @include fluid(margin-bottom, 20px, 40px);
    @include fluid(padding, 10px, 20px);
    @include fluid(height, 160px, 240px);
    margin-right: 5%;
    background: #fff;
    width: 30%;
    transition: $trn;

    &:first-child {
      @include fluid(height, 600px, 800px);
      @include fluid(padding, 20px, 40px);
      margin-right: 0;
      width: 100%;
    }

    &:nth-child(3n + 1) {
      margin-right: 0;
    }

    &:hover {
      @include hover;
    }
  }

  &__title {
    @include fluid(font-size, 24px, 40px);
    font-weight: 600;
    color: $black;
  }
}
</style>