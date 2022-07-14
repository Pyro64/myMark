<template>

  <label class="label" :from="radio.id">
    <input :checked="radio.checked" class="radio" type="radio" :id="radio.id" name="color" :value="radio.id">
    <div class="custom" :style="{background: radio.color,}"></div>
  </label>
</template>

<script setup>
const props = defineProps({
  radio: {
    id: String,
    color: String,
    checked: {
      type: Boolean,
      required: false
    }
  }
});

</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';


.custom {
  cursor: pointer;
  @include fluid(margin-left, 10px, 20px);
  @include fluid(width, 20px, 30px);
  @include fluid(height, 20px, 30px);
  display: block;
  position: relative;
  border-radius: 50%;

  &:first-child {
    @include fluid(margin-left, 15px, 30px);
  }

  &::before {
    @include fluid(width, 20px, 30px);
    @include fluid(height, 20px, 30px);
    border: 1px solid #dddddd;
    transition: $trn;
    position: absolute;
    content: '';
    border-radius: 50%;
    left: 50%;
    top: 50%;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}

.radio:checked + .custom::before {
  @include fluid(width, 40px, 50px);
  @include fluid(height, 40px, 50px);
  opacity: 1;
}

.radio {
  display: none;
}
</style>