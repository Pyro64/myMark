<template>
  <svg :class="{'minus__disabled': card.countProduct === 1}"
       class="minus" xmlns="http://www.w3.org/2000/svg"
       xmlns:xlink="http://www.w3.org/1999/xlink"
       viewBox="0 0 512 512">
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
          d="M400 256H112"></path>
  </svg>
</template>

<script>


export default {
  name: "MyMinus",
  props: {
    card: Object
  },
  setup() {
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.minus {
  @include fluid(width, 10px, 14px);
  @include fluid(height, 10px, 14px);
  cursor: pointer;
  transition: $trn;

  &__disabled {
    pointer-events: none;
    opacity: 0.2;
  }

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