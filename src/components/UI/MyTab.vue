<template>
  <n-tabs type="line" animated justify-content="center" default-value="Характеристики"
          size="large">
    <n-tab-pane name="Описание" tab="Описание">
      Wonderwall
    </n-tab-pane>
    <n-tab-pane name="Характеристики" tab="Характеристики">
      Hey Jude
    </n-tab-pane>
    <n-tab-pane name="Отзывы" tab="Отзывы">
      <review-card />
    </n-tab-pane>
  </n-tabs>
</template>

<script setup>
import ReviewCard from "../ReviewCard.vue";
</script>

<style scoped>

</style>