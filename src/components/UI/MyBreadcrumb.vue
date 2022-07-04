<template>
  <div class="container">
    <div class="breadcrumb ">
      <router-link v-for="route in routes" :key="route.id" class="breadcrumbLink" :to="route.to">{{ route.text }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  routes: Array
});
</script>

<style scoped lang="scss">
@import '../../assets/styles/mixins.scss';

.container {
  @include container;
}

.breadcrumb {
  @include fluid(margin-top, 15px, 25px);
  @include fluid(margin-bottom, 25px, 50px);
  display: flex;
  align-items: center;
}

.breadcrumbLink {
  @include fluid(font-size, 12px, 14px);
  @include fluid(margin-right, 30px, 40px);
  transition: $trn;
  color: $black;
  position: relative;

  &:hover {
    color: $red;
  }

  &::before {
    @include fluid(width, 5px, 7px);
    @include fluid(height, 10px, 12px);
    @include fluid(right, -12px, -20px);
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: url("../../assets/images/icon/arrow-right.svg") no-repeat;
    background-size: contain;
  }

  &:last-child {
    opacity: 0.5;
    pointer-events: none;

    &::before {
      display: none;
    }
  }
}
</style>