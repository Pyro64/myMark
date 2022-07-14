<template>
  <div class="productCatalog">
    <MyTitle title="Каталог товаров" />
    <div class="productCatalog__block">
      <router-link :to="{ name: 'categoryList', params: { id: `${c.id}` }}" v-for="c in catalogs" :key="c.id"
                   class="productCatalog__item">
        <img class="productCatalog__img" :src="c.img" alt="catalog">
        <div class="productCatalog__text">{{ c.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import catalog1 from "../../assets/images/catalog/p-catalog-1.png";
import catalog2 from "../../assets/images/catalog/p-catalog-2.png";
import catalog3 from "../../assets/images/catalog/p-catalog-3.png";
import MyTitle from "../UI/MyTitle.vue";

const catalogs = [
  {
    id: 1,
    img: catalog1,
    text: "Курьерские пакеты"
  },
  {
    id: 2,
    img: catalog2,
    text: "Термоэтикетки"
  },
  {
    id: 3,
    img: catalog3,
    text: "Стрейч пленка"
  }
];
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins';

.productCatalog {
  @include container;
  @include fluid(margin-bottom, 25px, 50px);

  &__block {
    display: flex;


  }

  &__item {
    @include fluid(padding-top, 15px, 30px);
    @include fluid(padding-bottom, 15px, 30px);
    width: 30%;
    margin-right: 5%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: $trn;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);

      .productCatalog {
        &__text {
          color: $red;
        }
      }
    }
  }

  &__img {
    @include fluid(width, 180px, 270px);
    @include fluid(height, 180px, 270px);
    @include fluid(margin-bottom, 15px, 25px);
    object-fit: contain;
  }

  &__text {
    @include fluid(font-size, 14px, 20px);
    transition: $trn;
    font-weight: 600;
    color: $black;
  }
}
</style>