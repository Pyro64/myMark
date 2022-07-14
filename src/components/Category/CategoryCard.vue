<template>
  <router-link class="category" :to="{ name: 'categoryList', params: { id: `${item.id}` }}">
    <img class="category__img" :src="item.src">
    <div class="category__text">{{ item.text }}</div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  item: Object
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins';

.category {
  @include fluid(padding-left, 25px, 55px);
  @include fluid(padding-right, 25px, 55px);
  @include fluid(padding-top, 15px, 30px);
  @include fluid(padding-bottom, 15px, 30px);
  display: block;
  cursor: pointer;
  transition: $trn;
  background: #FFFFFF;

  &__img {
    width: 100%;
    @include fluid(height, 180px, 270px);
    @include fluid(margin-bottom, 15px, 25px);
    object-fit: contain;
  }

  &__text {
    @include fluid(font-size, 14px, 18px);
    font-weight: 600;
    transition: $trn;
    color: $black;
  }

  &:hover {
    @include hover;

    .category {
      &__text {
        color: $red;
      }
    }

  }
}

</style>