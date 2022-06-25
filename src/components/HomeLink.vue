<template>
  <div class="homeLinks">
    <router-link class="homeLink" to="/services">
      <div class="homeLink__block">
        <div class="homeLink__item">
          <my-title title="Уникальный дизайн" :minMargin="true" />
          <div class="homeLink__subtitle">Для каждого клиента</div>
        </div>
        <div class="nameArrow">Услуги</div>
      </div>
      <img class="img" src="../assets/images/home-link-1.png" alt="services">
    </router-link>
    <router-link class="homeLink" to="/services">
      <div class="homeLink__block">
        <div class="homeLink__item">
          <my-title title="Промо-ярлыки" :minMargin="true" />
          <div class="homeLink__subtitle">Эстетика и лаконичность</div>
        </div>
        <div class="nameArrow">В каталог</div>
      </div>
      <img class="img" src="../assets/images/home-link-2.png" alt="services">
    </router-link>
  </div>
</template>

<script>
import MyTitle from "./UI/MyTitle.vue";

export default {
  name: "HomeLink",
  components: { MyTitle }
};
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.homeLinks {
  @include container;
  @include fluid(margin-bottom, 25px, 50px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.homeLink {
  @include fluid(height, 250px, 400px);
  position: relative;
  transition: $trn;

  &:hover {
    filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.1));

    .nameArrow {
      &::before {
        @include fluid(right, -20px, -25px);

      }
    }
  }

  width: 48%;

  &__block {
    @include fluid(padding, 20px, 40px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }

  &__subtitle {
    @include fluid(font-size, 14px, 24px);
    font-weight: 400;
    color: $black;
  }

}

.nameArrow {
  @include fluid(font-size, 14px, 24px);
  font-weight: 400;
  color: $black;
  position: relative;
  width: fit-content;

  &::before {
    transition: $trn;
    @include fluid(width, 5px, 7px);
    @include fluid(height, 10px, 12px);
    @include fluid(right, -10px, -15px);
    content: '';
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
    background: url("../assets/images/icon/arrow-right.svg") no-repeat;
    background-size: contain;
  }
}

.img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
</style>