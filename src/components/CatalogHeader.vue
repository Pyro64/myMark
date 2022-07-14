<template>
  <div class="listHeader">
    <div class="listHeader__title">{{text}}</div>
    <div class="listHeader__text">Найдено товаров: {{ productCount }} шт.</div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";

const props = defineProps({
  productCount: {
    type: Number,
    required: true
  }
});
const route = useRoute();
const text = route.params.name
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.listHeader {
  @include fluid(margin-top, 25px, 50px);
  @include fluid(margin-bottom, 25px, 50px);
  @include container;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    @include fluid(font-size, 28px, 40px);
    color: $black;
    font-weight: 600;
  }
}
</style>