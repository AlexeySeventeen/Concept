<template>
  <div class="flex items-center">
    <input :checked="this.modelValue" type="checkbox" @input="this.$emit('update:modelValue', $event.target.checked)" :name="this.title" class="h-[19px]" />
    <label class="ml-1 dark:text-text-passive" :for="this.title">{{ this.title }}</label>
  </div>
</template>

<script>
export default {
  name: 'MyCheckbox',

  props: {
    title: String,
    modelValue: Boolean,
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
