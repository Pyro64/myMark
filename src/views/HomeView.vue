<template>
  <div>
    <home-banner />
    <div class="content">
      <home-link />
      <popular-product />
      <advertising-images />
      <popular-category />
    </div>
  </div>

</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeLink from "../components/HomeLink.vue";
import PopularProduct from "../components/PopularProduct.vue";
import AdvertisingImages from "../components/AdvertisingImages.vue";
import PopularCategory from "../components/PopularCategory.vue";

export default {
  components: { PopularCategory, AdvertisingImages, PopularProduct, HomeLink, HomeBanner }
};

</script>

