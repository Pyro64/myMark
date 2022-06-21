<template>
  <!--  <div class="card">-->
  <!--    <img class="card__img" :src="slide.src" alt="card">-->
  <!--    <div class="card__block">-->
  <!--      <div class="card__name">{{ slide.name }}</div>-->
  <!--      <div class="card__item">-->
  <!--        <div class="card__price">{{ slide.price }} ₽</div>-->
  <!--        <div v-if="slide.sales" class="card__sales">{{ slide.sales }} ₽</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <n-button class="card__button">В корзину</n-button>-->
  <!--  </div>-->
</template>

<script>
export default {
  props: {
    slide: Object
  }

};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.card {
  @include fluid(padding, 10px, 20px);
  @include fluid(min-height, 350px, 420px);
  transition: $trn;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  &__item {
    @include fluid(margin-bottom, 10px, 15px);
    display: flex;
    align-items: center;

  }

  &__img {
    @include fluid(height, 150px, 200px);
    @include fluid(margin-bottom, 10px, 20px);
    width: 100%;
    object-fit: contain;
  }

  &__name {
    @include fluid(font-size, 12px, 14px);
    font-weight: 600;
    color: $black;
    margin-bottom: 5px;
  }

  &__price {
    @include fluid(margin-right, 5px, 10px);
    @include fluid(font-size, 12px, 16px);
    color: $red;
    font-weight: 600;
  }

  &__sales {
    @include fluid(font-size, 12px, 16px);
    font-weight: 500;
    text-decoration: line-through;
    color: #666666;
  }

  &__button {
    @include fluid(font-size, 14px, 16px);
    @include fluid(padding-top, 5px, 15px);
    @include fluid(padding-bottom, 5px, 15px);
    height: auto;
    width: 100%;
    color: #fff;
    font-weight: 600;
    background: $red;
    border-radius: 15px;
    outline: none;
  }
}
</style>