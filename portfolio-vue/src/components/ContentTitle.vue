<script >
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <h2 class="heading-2">{{ title }}</h2>
</template>