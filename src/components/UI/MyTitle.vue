<template>
  <div :class="{'title__minMargin': minMargin = true}" class="title">{{title}}</div>
</template>

<script>
export default {
  props: {
    title: String,
    minMargin:Boolean
  },
}
</script>

<style lang="scss" scoped>
 @import '../../assets/styles/mixins.scss';
.title {
  @include fluid(font-size, 24px, 36px);
  @include fluid(margin-bottom, 15px, 30px);
  font-weight: 700;
  color:$black;
  &__minMargin {
    @include fluid(margin-bottom, 10px, 20px);
  }
}
</style>