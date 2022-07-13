<template>
  <n-tabs type="line" animated justify-content="center" default-value="Отзывы"
          size="large">
    <n-tab-pane name="Описание" tab="Описание">
      Wonderwall
    </n-tab-pane>
    <n-tab-pane name="Характеристики" tab="Характеристики">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="Отзывы" tab="Отзывы">
      <template v-for="r in reviews" :key="r.id">
        <review-card :review="r" />
      </template>
      <n-button class="more">Показать больше отзывов</n-button>
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import ReviewCard from "../ReviewCard.vue";
import reviewImg from "../../assets/images/avatar.png"
import {reactive} from "vue";

const reviews = [
  {
    id:1,
    name:"Александр",
    img: reviewImg,
    date: '17 февраля 2022',
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse facere iusto non odit pariatur, placeat? Accusantium alias, amet, dicta dolorem ex exercitationem necessitatibus nihil, obcaecati quia rerum sequi temporibus.",
    rate: 4,
    like: 14,
    dislike:2,
  },
  {
    id:2,
    name:"Маргорита",
    img: reviewImg,
    date: '16 февраля 2022',
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse facere iusto non odit pariatur, placeat? Accusantium alias, amet, dicta dolorem ex exercitationem necessitatibus nihil, obcaecati quia rerum sequi temporibus.",
    rate: 3,
    like: 4,
    dislike:21,
  },
  {
    id:3,
    name:"Дмитрий",
    img: reviewImg,
    date: '15 февраля 2022',
    text:"  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse facere iusto non odit pariatur, placeat? Accusantium alias, amet, dicta dolorem ex exercitationem necessitatibus nihil, obcaecati quia rerum sequi temporibus.",
    rate: 5,
    like: 18,
    dislike:2,
  },
];
</script>

<style lang="scss" scoped>
 @import '../../assets/styles/mixins.scss';
 .more {
   @include fluid(height, 40px, 60px);
   @include fluid(font-size, 16px, 20px);
   border-radius: 15px;
   width: 100%;
   color: $black;
   font-weight: 600;
   background: #EEEEEE;
 }
</style>