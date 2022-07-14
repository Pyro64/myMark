import { defineStore } from "pinia";
import reviewImg from "../assets/images/avatar.png";


export const useDetailCardStore = defineStore({
    id: "detailCard",
    state: () => ({
      reviews: [
        {
          id: 1,
          name: "Александр",
          img: reviewImg,
          date: "17 февраля 2022",
          text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse facere iusto non odit pariatur, placeat? Accusantium alias, amet, dicta dolorem ex exercitationem necessitatibus nihil, obcaecati quia rerum sequi temporibus.",
          rate: 4,
          like: 14,
          dislike: 2
        },
        {
          id: 2,
          name: "Маргорита",
          img: reviewImg,
          date: "16 февраля 2022",
          text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse facere iusto non odit pariatur, placeat? Accusantium alias, amet, dicta dolorem ex exercitationem necessitatibus nihil, obcaecati quia rerum sequi temporibus.",
          rate: 3,
          like: 4,
          dislike: 21
        },
        {
          id: 3,
          name: "Дмитрий",
          img: reviewImg,
          date: "15 февраля 2022",
          text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque esse facere iusto non odit pariatur, placeat? Accusantium alias, amet, dicta dolorem ex exercitationem necessitatibus nihil, obcaecati quia rerum sequi temporibus.",
          rate: 5,
          like: 18,
          dislike: 2
        }
      ],
      values: [
        {
          id: 1,
          property: "Размер ленты",
          value: "22×12 мм"
        },
        {
          id: 2,
          property: "Диаметр втулки",
          value: "25 мм"
        },
        {
          id: 3,
          property: "Тип ленты",
          value: "волна, прямоугольная"
        },
        {
          id: 4,
          property: "Количество строк",
          value: "1 шт"
        },
        {
          id: 5,
          property: "Тип символов",
          value: "буквы, знаки, цифры"
        },
        {
          id: 6,
          property: "Вес",
          value: "0.402 кг"
        },
        {
          id: 7,
          property: "Производитель",
          value: "Корея, Республика"
        }
      ],
      radio: [
        {
          id: "black",
          checked: true,
          color: "#2C2C2C"
        },
        {
          id: "red",
          color: "#D12424"
        },
        {
          id: "blue",
          color: "#2F3DB9"
        }
      ]
    }),
    getters: {},
    actions: {}
  })
;