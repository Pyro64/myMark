<template>
  <nav>
    <router-link class="navlink" to="/catalog">Каталог</router-link>
    <router-link class="navlink" to="/catalog">Услуги</router-link>
    <router-link class="navlink" to="/about">О нас</router-link>
    <router-link class="navlink" to="/catalog">Оплата и доставка</router-link>
    <router-link class="navlink" to="/catalog">Контакты</router-link>
  </nav>
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
nav {
  @include fluid(margin-left, 30px, 60px);
}
.navlink {
  @include fluid(font-size, 14px, 16px);
  @include fluid(margin-right, 20px, 40px);
  font-weight: 500;
  transition: $trn;
  color: $black;
  &:hover {
    color: $red;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
