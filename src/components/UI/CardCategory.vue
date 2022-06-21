<template>
  <router-link to="/" class="category">
    <img class="category__img" :src="item.src">
    <div class="category__text">{{ item.text }}</div>
    {{ item }}
  </router-link>
</template>

<script>
export default {
  props: {
    item: Object
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
  display: block;
  background: #FFFFFF;

  &__img {
    width: 100%;
    @include fluid(height, 180px, 270px);
    object-fit: contain;
  }
}

</style>