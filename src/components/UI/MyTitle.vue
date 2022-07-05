<template>
  <div :class="{'title__minMargin': minMargin , 'title__noMargin': noMargin}" class="title">
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  minMargin: Boolean,
  noMargin: Boolean
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.title {
  @include fluid(font-size, 24px, 36px);
  @include fluid(margin-bottom, 15px, 30px);
  font-weight: 700;
  color: $black;

  &__minMargin {
    @include fluid(margin-bottom, 5px, 10px);
  }

  &__noMargin {
    margin-bottom: 0;
  }
}
</style>