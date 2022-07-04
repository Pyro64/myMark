<template>
  <div class="category" @click="$router.push(`/category/${item.id}`)">
    <img class="category__img" :src="item.src">
    <div class="category__text">{{ item.text }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.category {
  @include fluid(min-height, 350px, 380px);
  @include fluid(padding-left, 25px, 55px);
  @include fluid(padding-right, 25px, 55px);
  @include fluid(padding-top, 15px, 30px);
  @include fluid(padding-bottom, 15px, 30px);
  @include fluid(padding-bottom, 10px, 20px);
  cursor: pointer;
  transition: $trn;
  background: #FFFFFF;

  &__img {
    width: 100%;
    @include fluid(height, 180px, 270px);
    object-fit: contain;
  }

  &__text {
    @include fluid(font-size, 14px, 20px);
    font-weight: 600;
    transition: $trn;
    color: $black;
  }

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

    .category {
      &__text {
        color: $red;
      }
    }

  }
}

</style>