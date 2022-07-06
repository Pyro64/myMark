<template>
  <nav>
    <router-link class="navlink" to="/category">Каталог</router-link>
    <router-link class="navlink" to="/services">Услуги</router-link>
    <router-link class="navlink" to="/about">О нас</router-link>
    <router-link class="navlink" to="/delivery">Оплата и доставка</router-link>
    <router-link class="navlink" to="/contacts">Контакты</router-link>
  </nav>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

nav {
  @include fluid(margin-left, 30px, 60px);
}

.navlink {
  @include fluid(font-size, 14px, 16px);
  @include fluid(margin-right, 20px, 40px);
  position: relative;
  font-weight: 500;
  transition: $trn;
  color: $black;

  &:hover {
    color: $red;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    transition: $trn;
    background: $red;
    width: 0;
    border-radius: 3px;
    @include fluid(bottom, -5px, -10px);
    @include fluid(height, 2px, 3px);
  }

  &:last-child {
    margin-right: 0;
  }
}

.router-link-exact-active {
  &::after {
    width: 50%;
  }
}
</style>
