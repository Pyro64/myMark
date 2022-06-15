<template>
  <my-header />
  <!-- <header class="container">
    <nav>
      <RouterLink
        class="mr-1 transition text-black font-sans text-lg hover:(text-green-600)"
        to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="text-black transition font-sans text-lg hover:(text-green-600)"
        to="/about"
        >About</RouterLink
      >
    </nav>
  </header> -->
  <RouterView />
</template>
<script setup>
// import { RouterLink, RouterView } from "vue-router";
import MyHeader from "./components/MyHeader.vue";
</script>
