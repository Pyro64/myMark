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
              <n-image class="w-full h-full" object-fit="contain" :src="card" alt="img" />
            </div>
          </div>
        </n-image-group>
        <div class="detail__block">
          <div class="detail__card">
            <div class="flex items-center justify-between mb-6">
              <div class="detail__card-manufacturer">MOTEX</div>
              <div class="flex items-center">
                <img src="../assets/images/icon/qr.svg" class="detail__code-svg">
                <div class="detail__code-text">Код товара:268661337</div>
              </div>
            </div>
            <div class="detail__title">Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS</div>
            <my-star :red="true" />
            <n-rate allow-half color="red" size="large">
            </n-rate>
            <n-rate color="#FF2149">
              <n-icon>
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
import detail from "../assets/images/card/detail-card-3.png";
import pistol from "../assets/images/card/table-pistol.png";
import card from "../assets/images/card/card-3.png";
import MyStar from "./icon/MyStar.vue";
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

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
    @include fluid(margin-bottom, 10px, 20px);
    font-weight: 600;
    color: $black;
  }
}
</style>