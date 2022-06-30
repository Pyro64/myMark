import { defineStore } from "pinia";
import category1 from "../assets/images/category/category-1.png";
import category2 from "../assets/images/category/category-2.png";
import category3 from "../assets/images/category/category-3.png";
import category4 from "../assets/images/category/category-4.png";
import category5 from "../assets/images/category/category-5.png";
import category6 from "../assets/images/category/category-6.png";

export const useCategoryCardStore = defineStore({
  id: "categoryCard",
  state: () => ({
    categories: [
      {
        id: 1,
        src: category1,
        text: "Полуглянцевые этикетки"
      },
      {
        id: 2,
        src: category2,
        text: "Синтетические этикетки"
      },
      {
        id: 3,
        src: category3,
        text: "Красящая лента (риббоны)"
      },
      {
        id: 4,
        src: category4,
        text: "Принтеры этикеток"
      },
      {
        id: 5,
        src: category5,
        text: "Ролики для этикет-пистолетов"
      },
      {
        id: 6,
        src: category6,
        text: "Этикет-пистолеты"
      },
      {
        id: 8,
        src: category1,
        text: "Прозрачные этикетки"
      },
      {
        id: 9,
        src: category2,
        text: "Иглы для маркиратора"
      },
      {
        id: 10,
        src: category5,
        text: "Ролики для этикет-пистолетов"
      },
      {
        id: 11,
        src: category6,
        text: "Этикет-пистолеты"
      },
      {
        id: 12,
        src: category1,
        text: "Прозрачные этикетки"
      },
      {
        id: 13,
        src: category2,
        text: "Иглы для маркиратора"
      }
    ]
  }),
  getters: {},
  actions: {}
});
