<template>
  <svg class="minus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 0 512 512">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
          d="M400 256H112"></path>
  </svg>
</template>

<script>
export default {
  name: "MyMinus"
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.minus {
  @include fluid(width, 10px, 14px);
  @include fluid(height, 10px, 14px);
  cursor: pointer;

  path {
    transition: $trn;
    color: $gray;
  }

  &:hover {
    path {
      color: $red;
    }
  }
}
</style>