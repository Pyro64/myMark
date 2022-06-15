<template>
  <header>
    <div class="flex justify-between">
      <my-logo />
    </div>
  </header>
</template>

<script>
import MyLogo from "./MyLogo.vue";
export default {
  setup() {
    return {};
  },
  components: { MyLogo },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

header {
  @include container;
}
</style>
