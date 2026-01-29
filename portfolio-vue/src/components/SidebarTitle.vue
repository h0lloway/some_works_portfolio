<script>
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
  <h5 class="heading-5">{{ title }}</h5>
</template>