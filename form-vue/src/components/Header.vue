<script>
import AppButton from "@/components/UI/AppButton.vue";
import Logo from "@/components/UI/Logo.vue";

export default {
  components: {
    AppButton,
    Logo,
  },
};
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <Logo />
      <AppButton label="Clone now" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: var(--white-color);
  padding: 32px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>