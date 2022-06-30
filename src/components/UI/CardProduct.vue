<template>
  <router-link :to="{ name: 'detail', params: { id: `${item.id}` }}">
    <div class="card">
      <img class="card__img" :src="item.src" alt="card" />
      <div class="card__block">
        <div class="card__name">{{ item.name }}</div>
        <div class="card__item">
          <div class="card__price">{{ item.price }} ₽</div>
          <div v-if="item.sales" class="card__sales">{{ item.sales }} ₽</div>
        </div>
      </div>
      <n-button class="card__button" @click.prevent.stop="openModal">Добавить</n-button>
      <n-modal v-model:show="showModal" :block-scroll="false">
        <n-card
          style="width: 600px"
          :bordered="false"
          :title="item.name"
          size="huge"
          role="dialog"
          aria-modal="true"
          closable
          @close="showModal = false "
        >
          <div class="modalBlock">
            <my-counter />
            <div class="card__wrapper">
              <div class="card__sum">Итоговая стоимость:</div>
              <div class="card__price">{{ item.price }} ₽</div>
            </div>
          </div>

          <template #footer>
            <div class="modalBlock">
              <n-button :loading="isLoadingFavorite.value" :disabled="isLoadingFavorite.value"
                        @click="addProduct('success',isLoadingFavorite,'избранное')"
                        class="modalBtn">В избранное
              </n-button>
              <n-button :loading="isLoadingBasket.value" :disabled="isLoadingBasket.value"
                        @click="addProduct('success',isLoadingBasket,'корзину')"
                        class="modalBtn">В корзину
              </n-button>
            </div>
          </template>
        </n-card>
      </n-modal>
    </div>
  </router-link>
</template>

<script>
import { ref, reactive, watch } from "vue";
import MyCounter from "./MyCounter.vue";
import { useNotification } from "naive-ui";

export default {
  components: { MyCounter },
  props: {
    item: Object
  },
  setup(props) {
    let showModal = ref(false);
    const checkedValue = ref(null);
    const notification = useNotification();
    const isLoadingBasket = reactive({ value: false });
    const isLoadingFavorite = reactive({ value: false });
    return {
      handleChange(e) {
        checkedValue.value = e.target.value;
      },
      openModal() {
        showModal.value = true;
      },
      addProduct(type, isLoading, text) {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
          showModal.value = false;
          notification[type]({
            content: `Товар ${props.item.name}`,
            meta: `добавлен в ${text}`,
            duration: 3000
          });
        }, 1000);
        console.log(isLoading);
      },
      isLoadingFavorite,
      isLoadingBasket,
      checkedValue,
      showModal
    };
  }
}
;
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

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__sum {
    @include fluid(font-size, 14px, 18px);
    @include fluid(margin-right, 10px, 15px);
    font-weight: 500;
    color: $gray;
    user-select: none;
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
    user-select: none;
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

.modalBlock {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modalBtn {
  @include fluid(height, 35px, 40px);
  border: none;
  outline: none;
  width: 48%;
  background: #EEEEEE;
  border-radius: 10px;
}
</style>