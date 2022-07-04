<template>
  <router-link to="/">
    <img :src="logo" alt="logo" />
  </router-link>

</template>

<script setup>
const props = defineProps({
  logo: String
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

img {
  @include fluid(width, 150px, 220px);
  @include fluid(height, 30px, 55px);
  object-fit: contain;
}
</style>
