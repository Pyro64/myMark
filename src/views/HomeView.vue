<template>
  <div class="wrapper">
    <div>pos: {{ x }}, {{ y }}</div>
    <p>Value: {{ value ? "ON" : "OFF" }}</p>
    <n-button class="mr-5 mt-1" type="primary" @click="toggle()"
      >toggle</n-button
    >
    <n-button class="mr-5" type="primary" @click="value = true">ON</n-button>
    <n-button class="mr-5" type="primary" @click="value = false">OFF</n-button>
    <n-space class="mt-5">
      <n-button type="primary" @click="increment">Increment</n-button>
      <div>{{ counter }}</div>
    </n-space>
  </div>
</template>

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
