import { defineStore } from "pinia";
import banner1 from "../assets/images/banner-1.png";
import banner2 from "../assets/images/banner-2.png";
import banner3 from "../assets/images/banner-3.png";

export const useHomeBannersStore = defineStore({
  id: "HomeBanners",
  state: () => ({
    banners: [
      {
        id: 1,
        text: "Готовы предложить",
        title: "Печать этикеток для OZON",
        subtitle: "Быстро и качественно",
        btn: "Заказать",
        img: banner1
      },
      {
        id: 2,
        text: "Для вашего комфорта",
        title: "Изменены условия доставки",
        subtitle: "Еще более удобно",
        btn: "Подробнее",
        img: banner2
      },
      {
        id: 3,
        text: "Обновление ассоортимента",
        title: "Скидки до 65%",
        subtitle: "На все виды этикеток",
        btn: "В каталог",
        img: banner3
      }
    ]
  }),
  getters: {},
  actions: {}
});
