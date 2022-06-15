<template><div></div></template>

<script>
import { useMouse, useToggle } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  setup() {
    const { x, y } = useMouse();
    const [value, toggle] = useToggle();
    const store = storeToRefs(useCounterStore());
    const { counter } = store;
    const { increment } = useCounterStore();
    return {
      increment,
      counter,
      x,
      y,
      value,
      toggle,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";
.wrapper {
  @include fluid(margin-top, 15px, 25px);
  @include container;
}
</style>
