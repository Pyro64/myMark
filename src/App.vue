<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <div class="main">
        <my-header />
        <div class="content">
          <router-view />
          <support-banner />
        </div>
        <my-footer />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>
<script setup>
import { NConfigProvider } from "naive-ui";
import { RouterView } from "vue-router";
import MyHeader from "./components/MyHeader.vue";
import SupportBanner from "./components/SupportBanner.vue";
import MyFooter from "./components/MyFooter.vue";

const themeOverrides = {
  "common": {
    "primaryColor": "#FF2149FF",
    "primaryColorHover": "#F8395CFF",
    "primaryColorPressed": "#BE1937FF"
  }
};
</script>
