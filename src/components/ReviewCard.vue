<template>
  <div class="review">
    <div class="review__block">
      <div class="review__item">
        <img class="review__avatar" src="../assets/images/avatar.png">
        <div class="review__name">Александр</div>
      </div>
      <div class="review__item">
        <div class="review__date">17 февраля 2022</div>
        <n-rate :default-value="4" readonly color="#FF2149">
          <n-icon size="30">
            <my-star />
          </n-icon>
        </n-rate>
      </div>
    </div>
    <div class="review__content">
      <p>В общем, инвестиция интегрирована. Рекламное сообщество нейтрализует жизненный цикл продукции. Conversion rate
        существенно тормозит институциональный клиентский спрос. Несмотря на сложности, сущность
        и концепция маркетинговой программы изменяет эксклюзивный конкурент. Осведомленность о бренде без оглядки на
        авторитеты изоморфна времени.
      </p>
    </div>
    <div class="review__control">
      <div class="review__control-block">
        <n-button
          :bordered="false"
          type="success"
          :class="{'like':isLike == true}"
          :disabled="isLoading"
          @click="setLike"
          class="review__btn review__btn--like">
          <template #icon>
            <n-icon>
              <my-like />
            </n-icon>
          </template>
          <span>Полезно ({{ countLike }})</span>
        </n-button>
        <n-button
          :bordered="false"
          :class="{'dislike':isDislike == true}"
          :disabled="isLoading"
          @click="setDislike"
          class="review__btn review__btn--dislike"
        >
          <template #icon>
            <n-icon>
              <my-dislike />
            </n-icon>
          </template>
          <span>Не полезно ({{ countDislike }})</span>
        </n-button>
      </div>
      <div class="review__control-block">
        <n-button
          :bordered="false"
          :disabled="isLoading"
          class="review__complain"
          @click="loading"
        >
          <template #icon>
            <n-icon>
              <my-info />
            </n-icon>
          </template>
          <span>Пожаловаться</span>
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyStar from "./icon/MyStar.vue";
import MyLike from "./icon/MyLike.vue";
import MyDislike from "./icon/MyDislike.vue";
import { ref } from "vue";
import MyInfo from "./icon/MyInfo.vue";
import { useMessage } from "naive-ui";

const message = useMessage();
const isLike = ref(false);
const isDislike = ref(false);
const isLoading = ref(false);
const countLike = ref(1);
const countDislike = ref(12);
const setLike = () => {
  isLike.value = !isLike.value;
  isDislike.value = false;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};

const setDislike = () => {
  isDislike.value = !isDislike.value;
  isLike.value = false;
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
};
const loading = () => {
  isLoading.value = true;
  message.loading(
    "Ожидание"
  );
  setTimeout(() => {
    isLoading.value = false;
    message.success(
      "Пост отправлен на проверку модератору"
    );
  }, 3000);
};
</script>

<style lang="scss" scoped>

@import '../assets/styles/mixins.scss';

.review {
  @include fluid(padding, 15px, 30px);
  background: #FFFFFF;
  border-radius: 10px;

  &__block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include fluid(margin-bottom, 10px, 20px);
  }

  &__date {
    @include fluid(margin-right, 10px, 15px);
    @include fluid(font-size, 14px, 16px);
    font-weight: 500;
    color: $gray;
  }

  &__name {
    @include fluid(font-size, 16px, 20px);
    color: $black;
    font-weight: 500;
    @include fluid(margin-left, 15px, 20px);
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__content {
    @include fluid(margin-bottom, 10px, 20px);
    border-bottom: 1px solid #EEEEEE;;

    p {
      @include fluid(font-size, 12px, 14px);
      @include fluid(margin-bottom, 10px, 20px);
      color: $black;
    }
  }

  &__grade {
    @include fluid(padding-top, 6px, 8px);
    @include fluid(padding-bottom, 6px, 8px);
    @include fluid(padding-left, 10px, 15px);
    @include fluid(padding-right, 10px, 15px);
    width: fit-content;
    display: flex;
    background: #F5F5F5;
    border-radius: 999px;

    &-text {
      @include fluid(font-size, 12px, 14px);
      @include fluid(margin-left, 6px, 10px);
      font-weight: 500;
      color: $black;
    }
  }

  &__control {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__complain {
    border-radius: 999px;
  }

  &__btn {
    @include fluid(margin-right, 7px, 15px);
    @include fluid(padding-top, 4px, 8px);
    @include fluid(padding-bottom, 4px, 8px);
    @include fluid(padding-left, 10px, 15px);
    @include fluid(padding-right, 10px, 15px);
    background: #F5F5F5;
    border-radius: 999px;
    border: none;
    outline: none;

    span {
      @include fluid(margin-left, 4px, 8px);
      @include fluid(font-size, 12px, 14px);
      font-weight: 500;
    }

    &--like {
      color: $black;

      &:hover {
        background: #F5F5F5;
        color: $green;
      }

      &:focus {
        background: #F5F5F5;
        color: $green;
      }
    }

    &--dislike {
      &:focus {
        background: #F5F5F5;
      }
    }
  }

  .like {
    background: $green;
    color: #fff;

    &:focus-visible {
      background: $green;
      color: #fff;
    }

    &:disabled {
      background: $green;
      color: #fff;
    }
  }

  .dislike {
    background: $red;
    color: #fff;

    &:focus-visible {
      background: $red;
      color: #fff;
    }

    &:disabled {
      background: $red;
      color: #fff;
    }
  }
}
</style>