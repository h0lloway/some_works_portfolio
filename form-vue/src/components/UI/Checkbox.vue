<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    id: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <label :class="['checkbox', checked ? 'checkbox--checked' : '']">
    <div class="checkbox__input">
      <input type="checkbox" :id="id" :checked="checked" />
      <img :src="'/assets/img/' + id + '.svg'" :alt="id" />
    </div>

    <div>{{ label }}</div>
  </label>
</template>

<style lang="scss" >
.checkbox {
  display: flex;
  align-items: center;
  gap: 23px;
  padding: 23px 25px;
  border-radius: 16px;
  width: 284px;
  background: var(--white-color);
  box-shadow: 0px 4px 10px 0px rgba(31, 37, 89, 0.07),
    0px 2px 11px 0px rgba(69, 65, 164, 0.06);
  color: #170f49;
  font-size: 18px;
  line-height: 20px;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.3s ease;

  @media (max-width: 730px) {
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  &--checked {
    border: 1px solid #4a3aff;
  }
  &__input {
    width: 66px;
    height: 66px;
    background-color: #d6d3f8;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }
  }
}

.checkbox:hover {
  background: #ededed;

  @media (max-width: 730px) {
    background: transparent;
  }
}

.checkbox:focus-visible {
  background: #ededed;
}
</style>