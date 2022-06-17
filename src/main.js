import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import naive from "naive-ui";
import App from "./App.vue";
import router from "./router";


import "./assets/styles/style.scss";
import "virtual:windi.css";

const app = createApp(App);
app.use(MotionPlugin);
app.use(naive);
app.use(createPinia());
app.use(router);

app.mount("#app");
