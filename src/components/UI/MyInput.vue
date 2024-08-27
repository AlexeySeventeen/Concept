<template>
  <input
    :disabled="disabled"
    :value="modelValue"
    @input="this.$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    type="text"
    class="w-full rounded-full bg-user-hover cursor-pointer py-2 px-4 mt-2 dark:bg-white" />
</template>

<script>
export default {
  name: 'MyInput',

  props: {
    modelValue: [String, Number],
    placeholder: String,
    disabled: Boolean,
  },
};
</script>

<style scoped></style>
