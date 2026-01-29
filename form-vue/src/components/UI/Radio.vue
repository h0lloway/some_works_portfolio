<script>
export default {
  data() {
    return {
      picked: "One",
    };
  },
  props: {
    value: {
      type: String,
      default: "value",
    },
    label: {
      type: String,
      default: "label",
    },
    id: {
      type: String,
      default: "id",
    },
    name: {
      type: String,
    },
    oldValue: {
      type: String,
      default: "",
    },
    emit: ["update:checkedValue"],
    methods: {
      handleChecked: function () {
        emit("update:checkedValue", value, oldValue);
      },
    },
  },
};
</script>

<template>
  <label
    :class="[
      'budget',
      'check',
      'common-check',
      oldValue == value ? 'check_checked' : '',
    ]"
  >
    <div
      :class="[
        'budget__input',
        oldValue == value ? 'budget__input-checked' : '',
      ]"
    >
      <input
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        @input="$emit('update:oldValue', value, oldValue)"
      />
      <div class="budget__input-inside"></div>
    </div>

    <div class="budget__price">{{ label }}</div>
  </label>
</template>

<style lang="scss">
.budget {
  gap: 12px;
  padding: 44px 0 44px 32px;

  &__input {
    width: 24px;
    height: 24px;
    stroke-width: 1.2px;
    stroke: #d9dbe9;
    box-shadow: 0px -3px 7px 0px rgba(20, 20, 43, 0.08) inset;
    border-radius: 100%;
    background-color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s ease;
    &-checked {
      background-color: #4a3aff;
    }
    &-inside {
      background-color: var(--white-color);
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }

    input {
      display: none;
    }
  }

  &__price {
    color: #170f49;
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
  }
}

.check_checked {
  border: 1px solid #4a3aff !important;
}
</style>