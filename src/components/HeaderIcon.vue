<template>
  <div class="icons">
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/search.svg" alt="search" />
    </div>
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/user.svg" alt="user" />
    </div>
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/avto.svg" alt="avto" />
    </div>
    <div class="wrapper">
      <img
        class="icon"
        src="../assets/images/icon/favorite.svg"
        alt="favorite"
      />
      <div class="number">5</div>
    </div>
    <div class="wrapper">
      <img class="icon" src="../assets/images/icon/order.svg" alt="order" />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixins.scss";

.icons {
  display: flex;
  align-items: center;

  .icon {
    transition: $trn;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      filter: invert(30%) sepia(43%) saturate(1000%) hue-rotate(335deg) brightness(99%) contrast(106%);
    }
  }
}

.wrapper {
  @include fluid(width, 20px, 30px);
  @include fluid(height, 20px, 30px);
  @include fluid(margin-right, 20px, 40px);
  position: relative;
}

.number {
  @include fluid(width, 15px, 20px);
  @include fluid(height, 15px, 20px);
  @include fluid(right, -5px, -10px);
  @include fluid(top, -5px, -10px);
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: $red;
  color: #fff;
  @include fluid(font-size, 10px, 12px);
}
</style>
