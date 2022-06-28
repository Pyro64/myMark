<template>
  <div class="card">
    <router-link :to="{ name: 'detail', params: { id: `${item.id}` }}">
      <img :lazy="true" class="card__img" :src="item.src" alt="card" />
    </router-link>
      <div class="card__block">
        <div class="card__name">{{ item.name }}</div>
        <div class="card__item">
          <div class="card__price">{{ item.price }} ₽</div>
          <div v-if="item.sales" class="card__sales">{{ item.sales }} ₽</div>
        </div>
      </div>
    <n-button :loading="isLoading" :disabled="isLoading" class="card__button" @click="addProduct('success')">В корзину</n-button>
  </div>
</template>

<script>
import { useNotification  } from "naive-ui";
import { ref } from "vue";
export default {
  props: {
    item: Object
  },
  setup(props) {
    const notification  = useNotification ();
    const name = props.item.name;
    const isLoading = ref(false);
    return {
      addProduct(type) {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
          notification[type]({
            content: `Товар ${name}`,
            meta: "добавлен в корзину",
            duration: 3000
          });
        }, 1000);
      },
      isLoading
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.card {
  @include fluid(padding, 10px, 20px);
  @include fluid(min-height, 350px, 420px);
  transition: $trn;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }

  &__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

  &__item {
    @include fluid(margin-bottom, 10px, 15px);
    display: flex;
    align-items: center;

  }

  &__img {
    @include fluid(height, 150px, 200px);
    @include fluid(margin-bottom, 10px, 20px);
    width: 100%;
    object-fit: contain;
    transition: $trn;

    &:hover {
      transform: scale(1.03);
    }
  }

  &__name {
    @include fluid(font-size, 12px, 14px);
    font-weight: 600;
    color: $black;
    margin-bottom: 5px;
  }

  &__price {
    @include fluid(margin-right, 5px, 10px);
    @include fluid(font-size, 12px, 16px);
    color: $red;
    font-weight: 600;
  }

  &__sales {
    @include fluid(font-size, 12px, 16px);
    font-weight: 500;
    text-decoration: line-through;
    color: #666666;
  }

  &__button {
    @include fluid(font-size, 14px, 16px);
    @include fluid(height, 30px, 46px);
    width: 100%;
    color: #fff;
    font-weight: 600;
    background: $red;
    border-radius: 15px;
    outline: none;
  }
}
</style>