<template>
  <router-link to="/" class="category">
    <img class="category__img" :src="category.src">
    <div class="category__text">{{ category.text }}</div>

  </router-link>
</template>

<script>
export default {
  props: {
    category: Object
  }

};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.category {
  @include fluid(padding-left, 25px, 55px);
  @include fluid(padding-right, 25px, 55px);
  @include fluid(padding-top, 15px, 30px);
  @include fluid(padding-bottom, 15px, 30px);
  @include fluid(padding-bottom, 20px, 40px);
  background: #FFFFFF;

  &__img {
    width: 100%;
    @include fluid(height, 180px, 270px);
    object-fit: contain;
  }
}

</style>