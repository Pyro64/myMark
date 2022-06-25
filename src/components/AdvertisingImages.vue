<template>
  <div class="advertising">
    <div class="advertising__block">
      <div class="advertising__block-wrapper">
        <my-title title="Печать на любой поверхности" :minMargin="true" />
        <div class="advertising__subtitle">Адаптируемся под ваши условия</div>
      </div>

      <img class="advertising__img" src="../assets/images/home-1.png" alt="advertising">
    </div>
    <div class="advertising__item">
      <div class="advertising__item-wrapper">
        <my-title title="Более 500" :minMargin="true" />
        <div class="advertising__subtitle">Довольных
          клиентов
        </div>
      </div>

      <img class="advertising__img" src="../assets/images/home-2.png" alt="advertising">
    </div>
  </div>
</template>

<script>
import MyTitle from "./UI/MyTitle.vue";

export default {
  name: "AdvertisingImages",
  components: { MyTitle }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.advertising {
  @include container;
  @include fluid(margin-bottom, 25px, 50px);
  display: flex;
  justify-content: space-between;

  &__block {
    @include fluid(padding, 30px, 60px);
    @include fluid(height, 400px, 630px);
    width: 75%;
    position: relative;

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
    }
  }

  &__item {
    @include fluid(padding, 15px, 30px);
    @include fluid(height, 400px, 630px);
    width: 23%;
    position: relative;

    &-wrapper {
      position: relative;
      z-index: 2;
      width: 70%;
    }
  }

  &__subtitle {
    @include fluid(font-size, 16px, 24px);
    color: $black;
  }

  &__img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    object-fit: cover;
  }
}

</style>