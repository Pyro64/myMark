<template>
  <div class="banner">
    <div class="banner__block">
      <div class="banner__text">Готовы предложить</div>
      <div class="banner__title">Готовы предложить</div>
      <div class="banner__text">Быстро и качественно</div>
      <button>Заказать</button>
    </div>
    <img
      class="banner__img"
      src="../assets/images/home-banner.png"
      alt="banner"
    />
  </div>
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

.banner {
  @include container;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
