<template>
  <div class="support">
    <div :style="{background: `${background}`}" class="support__block">
      <div class="support__item">
        <div class="support__title">{{ title }}</div>
        <div class="support__text">{{ text }}
        </div>
        <router-link :to="to" class="support__link">Подробнее</router-link>
      </div>
      <img :src="img" alt="banner" class="support__img">
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBanner",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    img: {
      type: Image,
      required: true
    },
    background: String
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.support {
  @include container;
  @include fluid(margin-bottom, 25px, 50px);

  &__block {
    display: flex;
    align-items: end;
    justify-content: space-between;
    background: #E9ECEF;

    &:hover {
      .support {
        &__link {

        }
      }
    }
  }

  &__item {
    width: 48%;
    @include fluid(padding, 50px, 100px);
  }

  &__img {
    width: 50%;
    @include fluid(height, 300px, 490px);
    object-fit: cover;
    object-position: top;
  }

  &__title {
    @include fluid(font-size, 28px, 48px);
    @include fluid(margin-bottom, 15px, 25px);
    font-weight: 700;
    color: $black;
  }

  &__text {
    @include fluid(margin-bottom, 25px, 50px);
    @include fluid(font-size, 22px, 36px);
    font-weight: 500;
    color: $black;
  }

  &__link {
    @include fluid(font-size, 14px, 24px);
    font-weight: 400;
    color: $black;
    position: relative;
    transition: $trn;

    &::before {
      transition: $trn;
      @include fluid(width, 5px, 7px);
      @include fluid(height, 10px, 12px);
      @include fluid(right, -10px, -15px);
      content: '';
      position: absolute;
      top: 55%;
      transform: translateY(-50%);
      background: url("../assets/images/icon/arrow-right.svg") no-repeat;
      background-size: contain;
    }

    &:hover {
      color: $red;

      &::before {
        @include fluid(right, -15px, -20px);
        filter: invert(30%) sepia(43%) saturate(2000%) hue-rotate(335deg) brightness(99%) contrast(106%);
      }
    }
  }
}
</style>