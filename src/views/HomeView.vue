<template>
  <div>
    <home-banner/>
    <div class="container">
      <home-link/>
    </div>
  </div>

</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeLink from "../components/HomeLink.vue";

export default {
  components: { HomeLink, HomeBanner }
}

</script>

