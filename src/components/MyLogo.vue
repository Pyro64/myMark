<template>
  <router-link to="/">
    <img :src="logo" alt="logo" />
  </router-link>
</template>

<script setup>
const props = defineProps({
  logo: String,
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

img {
  @include fluid(width, 70px, 100px);
  @include fluid(height, 60px, 90px);
  object-fit: contain;
}
</style>
