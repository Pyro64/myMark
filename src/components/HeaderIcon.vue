<template>
  <div class="icons">
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/search.svg" alt="search" />
    </div>
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/user.svg" alt="user" />
    </div>
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/avto.svg" alt="avto" />
    </div>
    <router-link to="/favorite" class="wrapper">
      <n-badge :value="favorites.length" :max="15" color="#FF2149">
        <img
          class="icon"
          src="../assets/images/icon/favorite.svg"
          alt="favorite"
        />
      </n-badge>
    </router-link>
    <div class="wrapper">
      <n-badge value="4" :max="15" color="#FF2149">
        <img class="icon" src="../assets/images/icon/order.svg" alt="order" />
      </n-badge>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProductsCardStore } from "../stores/productCard";
const storeProducts = storeToRefs(useProductsCardStore());
const { favorites } = storeProducts;
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.icons {
  display: flex;
  align-items: center;

  .icon {
    transition: $trn;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      filter: invert(30%) sepia(43%) saturate(1000%) hue-rotate(335deg)
        brightness(99%) contrast(106%);
    }
  }
}

.wrapper {
  @include fluid(width, 20px, 30px);
  @include fluid(height, 20px, 30px);
  @include fluid(margin-right, 20px, 40px);
  position: relative;
}
</style>
