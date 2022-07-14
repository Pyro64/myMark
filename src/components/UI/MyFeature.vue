<template>
  <div class="feature">
    <div class="feature__property">{{ item.property }}</div>
    <div class="feature__dots"></div>
    <div class="feature__value">{{ item.value }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    id: Number,
    property: String,
    value: String
  }
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.feature {
  @include fluid(margin-bottom, 10px, 20px);
  display: flex;
  align-items: center;
  justify-content: space-between;


  &__property {
    @include fluid(font-size, 14px, 18px);
    color: $gray;
    width: fit-content;
    white-space: nowrap;
  }

  &__dots {
    @include fluid(margin-right, 8px, 15px);
    @include fluid(margin-left, 10px, 15px);
    flex-grow: 1;
    width: 100%;
    height: 2px;
    border-bottom: 2px dotted #dddddd;
  }

  &__value {
    @include fluid(font-size, 14px, 18px);
    color: $black;
    font-weight: 500;
    width: fit-content;
    white-space: nowrap;
  }
}
</style>