import { defineStore } from "pinia";
import card1 from "../assets/images/card/card-1.png";
import card2 from "../assets/images/card/card-2.png";
import card3 from "../assets/images/card/card-3.png";
import card4 from "../assets/images/card/card-4.png";
import card5 from "../assets/images/card/card-5.png";
import card6 from "../assets/images/card/card-6.png";

export const useProductsCardStore = defineStore({
  id: "productsCard",
  state: () => ({
    products: [
      {
        id: 1,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 2,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 3,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 4,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 5,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 6,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 7,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 8,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 9,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 10,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 11,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 12,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 13,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 14,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 15,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 16,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 17,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 18,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 19,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 20,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 21,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 22,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 23,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 24,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 25,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 26,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 27,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 28,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 29,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 30,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 31,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 32,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 33,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 34,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 35,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 36,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 37,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 38,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 39,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 40,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 41,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 42,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 43,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 44,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 45,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 46,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 47,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 48,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 49,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 50,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 51,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 52,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 53,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 54,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 55,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 57,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 58,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 59,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 60,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 61,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 62,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 63,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 64,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 65,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 66,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 67,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 68,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 69,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 70,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 700,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 71,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 72,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      },
      {
        id: 73,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м",
        price: 100,
        totalPrice: 100,
        countProduct: 1,
        sales: 1_899
      },
      {
        id: 74,
        src: card2,
        name: "Этикет-лента 26×16 мм, прямоугольная, белая",
        price: 459,
        totalPrice: 459,
        countProduct: 1,
        sales: null
      },
      {
        id: 75,
        src: card3,
        name: "Этикет-пистолет, 22×12 мм, MOTEX МХ-5500PLUS ",
        price: 4000,
        totalPrice: 4000,
        countProduct: 1,
        sales: null
      },
      {
        id: 76,
        src: card4,
        name: "Этикетка ТермоЭко (100×100 мм)",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: 2500
      },
      {
        id: 77,
        src: card5,
        name: "Ценник малый «Цена» 30×20 мм, белый",
        price: 1500,
        totalPrice: 1500,
        countProduct: 1,
        sales: null
      },
      {
        id: 78,
        src: card6,
        name: "Этикетка для документов самоклеящаяся, 74×40мм",
        price: 150,
        totalPrice: 150,
        countProduct: 1,
        sales: 2000
      },
      {
        id: 79,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        totalPrice: 2000,
        countProduct: 1,
        sales: null
      },
      {
        id: 80,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        totalPrice: 248,
        countProduct: 1,
        sales: 456
      }
    ],
    pageSize: 20,
    page: 1,
    step: 20
  }),
  getters: {
    getProductById: (state) => {
      return (productId) => state.products.find((product) => product.id == productId);
    },
    sliceProducts: (state) => state.products.slice((state.page - 1) * state.pageSize, state.page * state.pageSize)
  },
  actions: {
    totalPriceProduct(card) {
      card.totalPrice = card.countProduct * card.price;
    },
    incrementProduct(card) {
      card.countProduct++;
      card.totalPrice = card.price * card.countProduct;
    },
    decrementProduct(card) {
      card.countProduct--;
      card.totalPrice = card.totalPrice - card.price;
    },
    setMoreProducts() {
      this.page++;
    }
  }
});

