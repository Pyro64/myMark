<template>
  <div class="tab">
    <n-tabs
      type="line"
      animated
      justify-content="center"
      default-value="Отзывы"
      size="large"
    >
      <n-tab-pane name="Описание" tab="Описание">
        <div class="tab__text">
          <p>
            Этикет-пистолет для нанесения на этикетки цифр, букв («Цена»,
            «Дата», «Артикул») и символов (руб, DM, $, Евро и т.д.).
          </p>
          <p>
            Применение этикет-пистолета motex МХ 5500 несет определенные
            преимущества производствам, где осуществляется маркировка продукции
            путем нанесения основных данных на продукт (например, сроки
            годности). Поверх этикеток с самоклеющейся основой с помощью этого
            устройства супермаркеты и магазины могут наносить соответствующую
            информацию. Этикет-пистолет motex МХ 5500 оснащен специальным
            валиком красящего типа. Эта деталь имеет сменную конструкцию. Валик
            снимается достаточно просто. Процедура замены имеет невысокую
            стоимость.
          </p>
        </div>
      </n-tab-pane>
      <n-tab-pane name="Характеристики" tab="Характеристики">
        <template v-for="item in values" :key="item.id">
          <my-feature :item="item" />
        </template>
      </n-tab-pane>
      <n-tab-pane name="Отзывы" tab="Отзывы">
        <template v-for="r in sliceReviews" :key="r.id">
          <review-card v-motion-slide-bottom :review="r" />
        </template>
        <more-btn v-if="reviews.length > pageSize" @click="setMoreReviews">
          Показать больше отзывов
        </more-btn>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import ReviewCard from "../ReviewCard.vue";

import { useDetailCardStore } from "../../stores/detailCard";
import { storeToRefs } from "pinia";
import MyFeature from "./MyFeature.vue";
import MoreBtn from "./MoreBtn.vue";

const storeDetail = storeToRefs(useDetailCardStore());
const { reviews, values, sliceReviews, pageSize } = storeDetail;
const { setMoreReviews } = useDetailCardStore();
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";

.tab {
  &__text {
    p {
      @include fluid(margin-bottom, 10px, 20px);
      @include fluid(font-size, 14px, 18px);
      color: $black;
    }
  }
}

.more {
  @include fluid(height, 40px, 60px);
  @include fluid(font-size, 16px, 20px);
  border-radius: 15px;
  width: 100%;
  color: $black;
  font-weight: 600;
  background: #eeeeee;
}
</style>
