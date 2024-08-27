<template>
  <button
    :data-title="'last changed: ' + this.item.lastChange"
    class="flex items-center relative user-hover py-0.5 w-44"
    :class="{'user-hover': this.$store.state.theme === 'Light', 'user-hover-dark': this.$store.state.theme === 'Dark'}"
    @click="this.$emit('basicClick', this.item.lastChangeSort)">
    <p>{{ this.item.img }}</p>
    <h3 v-if="item.title.length === 0" class="action__font-light leading-5 ml-2 truncate text-text-passive">Untitled</h3>
    <h3 v-else class="action__font-light leading-5 ml-2 truncate text-text-passive">{{ item.title }}</h3>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'NavPost',

  props: {
    item: Object,
  },
};
</script>

<style scoped></style>
