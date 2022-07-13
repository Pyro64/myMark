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
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import ReviewCard from "../ReviewCard.vue";

const reviews = [
  {}
];
</script>

<style scoped>

</style>