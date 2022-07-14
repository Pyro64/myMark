<template>
  <n-button style="font-weight: 500" class="more">
    <slot />
  </n-button>
</template>

<script>
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