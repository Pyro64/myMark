<template>
  <router-link class="breadcrumbLink" :to="to">{{ text }}</router-link>
</template>

<script>
export default {
  props: {
    to: String,
    text: String
  },
  setup() {

  }
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/mixins.scss';

.breadcrumbLink {
  @include fluid(font-size, 12px, 14px);
  @include fluid(margin-right, 30px, 40px);
  color: $black;
  position: relative;

  &::before {
    @include fluid(width, 5px, 7px);
    @include fluid(height, 10px, 12px);
    @include fluid(right, -12px, -20px);
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: url("../../assets/images/icon/arrow-right.svg") no-repeat;
    background-size: contain;
  }

  &:last-child {
    &::before {
      display: none;
    }
  }

  &__hover {

  }
}
</style>