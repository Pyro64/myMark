import { defineStore } from "pinia";
import card1 from "../assets/images/card/card-1.png";
import card2 from "../assets/images/card/card-2.png";
import card3 from "../assets/images/card/card-3.png";
import card4 from "../assets/images/card/card-4.png";
import card5 from "../assets/images/card/card-5.png";
import card6 from "../assets/images/card/card-6.png";
import detailCard from "../assets/images/card/detail-card-3.png";

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
      }
    ],
    detailProduct: {
      Images: [
        {
          id: 1,
          image: detailCard
        }
      ],
      Price: 2_876,
      DiscountPrice: 5_659,
      Code: 268661337,
      Brand: "MOTEX",
      Rating: 4.5
    }
  }),
  getters: {
    getProductById: (state) => {
      return (productId) => state.products.find((product) => product.id == productId);
    }
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
    }
  }
});
