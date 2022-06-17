<template>
  <div>
    <home-banner/>
    <div class="container">
      <home-link/>
      <popular-product/>
    </div>
  </div>

</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeLink from "../components/HomeLink.vue";
import PopularProduct from "../components/PopularProduct.vue";

export default {
  components: { PopularProduct, HomeLink, HomeBanner }
}

</script>

