<script>
export default {
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<template>
  <div class="logo">
    <img
      :class="['logo__img', isSmall ? 'logo__img-small' : '']"
      src="/assets/img/logo.svg"
      alt="logo"
    />
    <div :class="['logo__title', isSmall ? 'logo__title-small' : '']">
      brix <span>templates</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 16px;
  &__img {
    width: 40px;
    height: 40px;
    &-small {
      width: 34px;
      height: 34px;
    }
  }
  &__title {
    font: 900 36px/100% "DM Sans", Arial, sans-serif;
    color: #170f49;

    @media screen and (max-width: 675px) {
      font-size: 30px;
    }

    &-small {
      font-size: 32px;
    }

    & span {
      color: #4a3aff;
    }
  }
}
</style>