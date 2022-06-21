<template>
  <div>
    <home-banner />
    <div class="content">
      <home-link />
      <slider-card :slides="cards">
        <card-product />
      </slider-card>
      <advertising-images />
      <slider-card :slides="categories" :item="">
        <card-category />
      </slider-card>
    </div>
  </div>

</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import HomeLink from "../components/HomeLink.vue";
import PopularProduct from "../components/PopularProduct.vue";
import AdvertisingImages from "../components/AdvertisingImages.vue";
import PopularCategory from "../components/PopularCategory.vue";
import card1 from "../assets/images/card/card-1.png";
import card2 from "../assets/images/card/card-2.png";
import card3 from "../assets/images/card/card-3.png";
import card4 from "../assets/images/card/card-4.png";
import card5 from "../assets/images/card/card-5.png";
import card6 from "../assets/images/card/card-6.png";
import category1 from "../assets/images/category/category-1.png";
import category2 from "../assets/images/category/category-2.png";
import category3 from "../assets/images/category/category-3.png";
import category4 from "../assets/images/category/category-4.png";
import category5 from "../assets/images/category/category-5.png";
import category6 from "../assets/images/category/category-6.png";
import SliderCard from "../components/SliderCard.vue";
import CardProduct from "../components/UI/CardProduct.vue";
import CardCategory from "../components/UI/CardCategory.vue";

export default {
  components: {
    CardCategory,
    CardProduct,
    SliderCard,
    PopularCategory,
    AdvertisingImages,
    PopularProduct,
    HomeLink,
    HomeBanner
  },
  setup() {
    const cards = [
      {
        id: 1,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м Риббон Wax/Resin  Риббон Wax/Resin ",
        price: 1_459,
        sales: 1_899
      },
      {
        id: 2,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 459,
        sales: null
      },
      {
        id: 3,
        src: card3,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 4000,
        sales: null
      },
      {
        id: 4,
        src: card4,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        sales: 2500
      },
      {
        id: 5,
        src: card5,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 1500,
        sales: null
      },
      {
        id: 6,
        src: card6,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 150,
        sales: 2000
      },
      {
        id: 7,
        src: card1,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 2000,
        sales: null
      },
      {
        id: 8,
        src: card2,
        name: "Риббон Wax/Resin 110 мм х 74 м OUT",
        price: 248,
        sales: 456
      }
    ];
    const categories = [
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
        id: 7,
        src: category1,
        text: "Прозрачные этикетки"
      },
      {
        id: 8,
        src: category2,
        text: "Иглы для маркиратора"
      }
    ];
    return {
      cards,
      categories
    };
  }
};

</script>

