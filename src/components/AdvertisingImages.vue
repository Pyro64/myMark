<template>
  <div class="advertising">
    <div class="advertising__block">
      <div class="advertising__titile">Печать на любой поверхности</div>
      <div class="advertising__subtitle">Адаптируемся под ваши условия</div>
      <img src="../assets/images/advertising-home-1.png" alt="advertising">
    </div>
    <div class="advertising__item">
      <div class="advertising__titile">Более 500</div>
      <div class="advertising__subtitle">Довольных
        клиентов
      </div>
      <img src="../assets/images/advertising-home-2.png" alt="advertising">
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvertisingImages"
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.advertising {
  @include fluid(margin-bottom, 25px, 50px);
  display: flex;
}

</style>