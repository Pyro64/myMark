<template>
  <header>
    <div class="block">
      <div class="item">
        <my-logo :logo="logo" />
        <my-nav />
      </div>
      <header-icon />
    </div>
  </header>
</template>

<script setup>
import HeaderIcon from "./HeaderIcon.vue";
import MyLogo from "./MyLogo.vue";
import MyNav from "./MyNav.vue";
import logo from "../assets/images/logo.svg";
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

header {
  @include fluid(padding-top, 10px, 20px);
  @include fluid(padding-bottom, 10px, 20px);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
}

.block {
  @include container;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  display: flex;
  align-items: center;
}

</style>
