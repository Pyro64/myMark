<template>
  <div class="links">
    <router-link to="/services">
      <div class="title">
        Уникальный дизайн
      </div>
      <img class="img" src="../assets/images/home-link-1.png" alt="services">
    </router-link>
    <router-link to="/catalog">
      <img class="img" src="../assets/images/home-link-2.png" alt="catalog">
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeLink"
};
</script>
<style lang="scss">

</style>
<style lang="scss" scoped>
 @import '../assets/styles/mixins.scss';
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include fluid(margin-bottom, 25px, 50px);
}

.img {

}
</style>