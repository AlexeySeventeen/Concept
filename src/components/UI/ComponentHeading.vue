<template>
  <div class="mb-6 mt-[-20px]">
    <h1 class="text-center mb-2 text-3xl font-medium font-segoe dark:text-white">{{ this.title }}</h1>
    <h1 class="text-center mt-[-8px] dark:text-text-passive">{{ this.description }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ComponentHeading',

  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped></style>
