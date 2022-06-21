<template>
  <footer class="footer">
    <div class="footer__block">
      <div class="footer__item">
        <my-logo :logo="logo" />
        <div class="footer__copyright">© 2022 MyMark. Все права защищены.</div>
      </div>
      <div class="footer__item flex">
        <div class="footer__wrapper">
          <router-link class="footer__link" to="/">Каталог</router-link>
          <router-link class="footer__link" to="/">Услуги</router-link>
          <router-link class="footer__link" to="/">О нас</router-link>
        </div>
        <div class="footer__wrapper">
          <router-link class="footer__link" to="/">Оплата и доставка</router-link>
          <router-link class="footer__link" to="/">Контакты</router-link>
          <router-link class="footer__link" to="/">Юридическая информация</router-link>
        </div>
      </div>
      <div class="footer__wrapper">
        <a class="footer__link" href="tel:+7 (800) 555-35-35">+7 (800) 555-35-35</a>
        <a class="footer__link" href="mailto:example@pochta.com">example@pochta.com</a>
        <div class="flex <lg:block">
          <a href="/" class="footer__social">
            <img class="footer__icon" src="../assets/images/social/facebook.svg" alt="facebook">
          </a>
          <a href="/" class="footer__social">
            <img class="footer__icon" src="../assets/images/social/twitter.svg" alt="twitter">
          </a>
          <a href="/" class="footer__social">
            <img class="footer__icon" src="../assets/images/social/vk.svg" alt="vk">
          </a>
          <a href="/" class="footer__social">
            <img class="footer__icon" src="../assets/images/social/youtube.svg" alt="youtube">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MyLogo from "./MyLogo.vue";
import logo from "../assets/images/light-logo.svg";

export default {
  name: "MyFooter",
  components: { MyLogo },
  setup() {
    return {
      logo
    };
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixins.scss';

.footer {
  background: #333333;
  @include fluid(padding-top, 30px, 60px);
  @include fluid(padding-bottom, 25px, 50px);

  &__block {
    @include container;
    display: flex;
    justify-content: space-between;
  }

  &__copyright {
    @include fluid(margin-top, 15px, 30px);
    @include fluid(font-size, 14px, 16px);
    font-weight: 400;
    color: #666666;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    @include fluid(margin-right, 100px, 215px);

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    @include fluid(margin-bottom, 10px, 20px);
    @include fluid(font-size, 14px, 16px);
    color: #FFFFFF;
    opacity: 0.8;
    transition: $trn;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      opacity: 1;
    }
  }

  &__social {
    @include fluid(margin-right, 10px, 20px);
    @include fluid(width, 14px, 20px);
    @include fluid(height, 14px, 20px);

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      .footer {
        &__icon {
          opacity: 1;
        }
      }
    }
  }

  &__icon {
    transition: $trn;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>