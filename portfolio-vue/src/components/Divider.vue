<script >
export default {
  props: {
    label: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<template>
  <div class="divider">
    <div class="divider__circle">
      <div class="divider__circle-inside">
        <div class="divider__circle-inside-viol"></div>
      </div>
    </div>
    <div class="divider__line"></div>
  </div>
</template>