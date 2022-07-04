<template>
  <div class="banner" :class="{'container': container}">
    <div class="banner__block">
      <div class="banner__item">
        <div class="banner__text">{{ banner.text }}</div>
        <div class="banner__title">{{ banner.title }}</div>
        <div class="banner__text">{{ banner.subtitle }}</div>
        <n-button class="banner__button">{{ banner.btn }}</n-button>
      </div>
      <img
        class="banner__img"
        :src="banner.img"
        alt="banner"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  container: {
    type: Boolean,
    required: false
  },
  banner: {
    text: String,
    title: String,
    subtitle: String,
    btn: String,
    img: String
  }
});
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.container {
  @include container;
  @include fluid(margin-bottom, 25px, 50px);
}

.banner {
  @include fluid(margin-bottom, 25px, 50px);
  background: linear-gradient(180deg, #E4E3E3 0%, #EEEEEE 100%);


  &__block {
    @include container;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__text {
    @include fluid(font-size, 24px, 36px);
    margin-bottom: 10px;
    color: $black;
    font-weight: 500;
  }

  &__title {
    @include fluid(font-size, 36px, 48px);
    @include fluid(margin-bottom, 15px, 30px);
    font-weight: 700;
  }

  &__button {
    @include fluid(font-size, 16px, 22px);
    @include fluid(margin-top, 25px, 50px);
    @include fluid(padding-top, 10px, 20px);
    @include fluid(padding-bottom, 10px, 20px);
    @include fluid(padding-right, 45px, 90px);
    @include fluid(padding-left, 45px, 90px);
    height: auto;
    color: #fff;
    font-weight: 600;
    background: $red;
    border-radius: 25px;
    outline: none;
  }

  &__img {
    @include fluid(height, 300px, 430px);
    width: 50%;
    object-fit: contain;

  }
}
</style>
