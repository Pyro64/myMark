<template>
  <div :class="{'title__minMargin': minMargin , 'title__noMargin': margin}" class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    minMargin: Boolean,
    margin: Boolean
  }
};
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