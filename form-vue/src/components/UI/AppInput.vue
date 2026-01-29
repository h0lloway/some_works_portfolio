<script >
export default {
  props: {
    enterTxt: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      default: "Enter...",
    },
    name: {
      type: String,
      required: false,
    },
    inputContact: {
      type: Boolean,
      required: false,
    },
    inputForm: {
      type: Boolean,
      required: false,
    },
    Width: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["update:enterTxt"],
};
</script>

<template>
  <li :class="['input', inputContact ? 'contact__items-input' : '']">
    <label
      :class="['input__label', inputForm ? 'input__label--margin' : '']"
      :for="name"
      >{{ name }}</label
    >
    <div :class="['input__enter']">
      <input
        :class="['input__field', Width ? 'input__field--width' : '']"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :value="enterTxt"
        @input="$emit('update:enterTxt', $event.target.value)"
      />
      <slot></slot>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;
  &__label {
    font: 500 18px/20px "DM Sans", Arial, sans-serif;
    color: #170f49;

    &--margin {
      margin-bottom: 15px;
    }
  }
  &__enter {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 17px;
    border-radius: 46px;
    border: 1px solid #eff0f6;
    background: var(--white-color);
    box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
    color: #6f6c90;
    font: 400 18px/20px "DM Sans", Arial, sans-serif;

    &--width {
      min-width: 500px;
      @media (max-width: 575px) {
        min-width: 100%;
      }
    }

    input:hover,
    input:focus-visible {
      background: #ededed;
    }
  }
  &__field {
    height: 50px;
    border-radius: 46px;
    padding-left: 20px;
    padding-right: 20px;
    background: var(--white-color);
    font: 400 18px/20px "DM Sans", Arial, sans-serif;
    color: #6f6c90;
    transition: 0.3s ease;
    &--width {
      width: 65%;
    }

    @media screen and (max-width: 730px) {
      width: 100%;
      padding-right: 60px;

      &--width {
        width: 55%;
        padding-right: 20px;
        font-size: 16px;
      }
    }
  }
}
</style>