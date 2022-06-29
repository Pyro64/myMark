<template>
  <div class="counter">
    <my-minus @click="decrement()" />
    <div class="counter__block">
      <input class="counter__input" v-model="count" />
      <div class="counter__type">шт.</div>
    </div>
    <my-plus @click="increment()" />
  </div>
</template>

<script>
import MyPlus from "../icon/MyPlus.vue";
import MyMinus from "../icon/MyMinus.vue";
import { ref } from "vue";

export default {
  name: "MyCounter",
  components: { MyMinus, MyPlus },
  setup() {
    let count = ref(1);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    return {
      increment,
      decrement,
      count
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.counter {
  @include fluid(width, 120px, 145px);
  @include fluid(height, 40px, 45px);
  @include fluid(padding-left, 10px, 15px);
  @include fluid(padding-right, 10px, 15px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 15px;

  &__block {
    display: flex;
    align-items: center;
  }

  &__input {
    @include fluid(font-size, 12px, 16px);
    color: $black;
    outline: none;
    width: 20px;
  }

  &__type {
    @include fluid(font-size, 12px, 16px);
    color: $black;
  }
}

</style>