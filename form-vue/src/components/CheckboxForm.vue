<script>
import Checkbox from "@/components/UI/Checkbox.vue";
export default {
  components: {
    Checkbox,
  },
  props: {
    value: {
      type: Array,
      required: true,
    },
    services: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  emits: ["update: modelValue", "checkbox"],
};
</script>
<template>
  <Checkbox
    v-for="service in services"
    :key="service.label"
    :name="name"
    :label="service.label"
    :checked="value.includes(service.id)"
    :id="service.id"
    @click.prevent="$emit('checkbox', service.id, value)"
  />
</template>