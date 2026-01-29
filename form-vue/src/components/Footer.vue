<script>
import AppButton from "@/components/UI/AppButton.vue";
import Logo from "@/components/UI/Logo.vue";
import AppInput from "@/components/UI/AppInput.vue";

export default {
  components: {
    AppButton,
    Logo,
    AppInput,
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__copyright">
        <Logo isSmall />
        <div class="footer__copyright-txt">
          Copyright &copy;&nbsp;2021&nbsp;BRIX Templates&nbsp;| All Rights
          Reserved
        </div>
      </div>
      <div class="footer__subscribe">
        <AppInput placeholder="Enter your email" Width>
          <AppButton label="Subscribe" smallSize />
        </AppInput>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgb(217, 219, 233);
  background: var(--white-color);
  padding: 32px 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

  &__copyright {
    &-txt {
      margin-top: 15px;
      color: #6f6c90;
      font: 400 18px/30px "DM Sans", Arial, sans-serif;
    }
    @media (max-width: 900px) {
      margin-bottom: 20px;
      .logo {
        justify-content: center;
      }
    }
  }

  &__subscribe {
    width: 500px;
    @media (max-width: 1070px) {
      width: 430px;
    }
  }
}
</style>