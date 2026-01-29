<script >
export default {
  props: {
    label: {
      type: String,
      default: "Button",
    },
    smallSize: {
      type: Boolean,
      required: false,
    },
    transpButton: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    changeButtonStyle(smallSize, transpButton) {
      return {
        "btn-small": smallSize,
        "btn-previous": transpButton,
      };
    },
  },
};
</script>

<template>
  <button :class="['btn', changeButtonStyle(smallSize, transpButton)]">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  padding: 20px 40px 21px 40px;
  justify-content: center;
  align-items: center;
  border-radius: 56px;
  background: var(--primary-color);
  color: var(--white-color);
  box-shadow: 0px 3px 12px 0px rgba(74, 58, 255, 0.18);
  border: none;
  transition: 0.4s ease;
  &-small {
    padding: 14px 26px;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
  }
  &-previous {
    font-weight: 400;
    background-color: var(--white-color);
    color: #4a3aff;
    padding: 19px 40px 20px 40px;
    border: 1px solid #4a3aff;

    @media (max-width: 575px) {
      order: 2;
    }
  }
}

.btn:hover {
  background: #160a98;
}

.btn-previous:hover {
  color: var(--white-color);

  @media (max-width: 575px) {
    color: #4a3aff;
    background: var(--white-color);
  }
}

.btn:active {
  // background: #160a98;
  outline: none;
}

.btn:focus,
.btn:focus-visible {
  outline: none;
}

.btn:disabled {
  background: #cacaca;
  color: #757474;
  pointer-events: none;
}
</style>