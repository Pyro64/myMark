<template>
  <router-link to="/">
    <img src="../assets/images/logo.svg" alt="logo" />
  </router-link>

</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
img {
  @include fluid(width, 150px, 220px);
  @include fluid(height, 30px, 55px);
  object-fit: contain;
}
</style>
