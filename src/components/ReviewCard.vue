<template>
  <div class="review">
    <div class="review__block">
      <div class="review__item">
        <img class="review__avatar" src="../assets/images/avatar.png">
        <div class="review__name">Александр</div>
      </div>
      <div class="review__item">
        <div class="review__date">17 февраля 2022</div>
        <n-rate :default-value="4" readonly color="#FF2149">
          <n-icon size="30">
            <my-star />
          </n-icon>
        </n-rate>
      </div>
    </div>
    <div class="review__content">
      <p>В общем, инвестиция интегрирована. Рекламное сообщество нейтрализует жизненный цикл продукции. Conversion rate
        существенно тормозит институциональный клиентский спрос. Несмотря на сложности, сущность
        и концепция маркетинговой программы изменяет эксклюзивный конкурент. Осведомленность о бренде без оглядки на
        авторитеты изоморфна времени.
      </p>
    </div>
    <div class="review__control">
      <div class="review__grade">
        <my-like />
        <div class="review__grade-text"> Полезно (1)</div>
      </div>
      <n-button color="#ff69b4">
        <template #icon>
          <n-icon>
            <my-like />
          </n-icon>
        </template>
        #ff69b4
      </n-button>
    </div>
  </div>
</template>

<script setup>
import MyStar from "./icon/MyStar.vue";
import MyLike from "./icon/MyLike.vue";
</script>

<style lang="scss" scoped>

@import '../assets/styles/mixins.scss';

.review {
  @include fluid(padding, 15px, 30px);
  background: #FFFFFF;
  border-radius: 10px;

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include fluid(margin-bottom, 10px, 20px);
  }

  &__date {
    @include fluid(margin-right, 10px, 15px);
    @include fluid(font-size, 14px, 16px);
    font-weight: 500;
    color: $gray;
  }

  &__name {
    @include fluid(font-size, 16px, 20px);
    color: $black;
    font-weight: 500;
    @include fluid(margin-left, 15px, 20px);
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__content {
    @include fluid(margin-bottom, 10px, 20px);
    border-bottom: 1px solid #EEEEEE;;

    p {
      @include fluid(font-size, 12px, 14px);
      @include fluid(margin-bottom, 10px, 20px);
      color: $black;
    }
  }

  &__grade {
    @include fluid(padding-top, 6px, 8px);
    @include fluid(padding-bottom, 6px, 8px);
    @include fluid(padding-left, 10px, 15px);
    @include fluid(padding-right, 10px, 15px);
    width: fit-content;
    display: flex;
    background: #F5F5F5;
    border-radius: 999px;

    &-text {
      @include fluid(font-size, 12px, 14px);
      @include fluid(margin-left, 6px, 10px);
      font-weight: 500;
      color: $black;
    }
  }
}
</style>