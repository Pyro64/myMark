<template>
  <div class="container">

  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {

  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.container {
  @include container;
}
</style>