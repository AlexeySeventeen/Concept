<template>
  <button
    :data-title="'last changed: ' + this.item.lastChange"
    class="flex items-center relative user-hover py-0.5 w-44"
    @click="this.$emit('basicClick', this.item.lastChangeSort)">
    <p>{{ this.item.img }}</p>
    <h3 v-if="this.stopTextClick" @click.stop="this.$emit('basicClick', this.item.lastChangeSort)" class="truncate action__font-light leading-5 ml-2">
      {{ item.title }}
    </h3>
    <h3 v-else class="action__font-light leading-5 ml-2 truncate">{{ item.title }}</h3>
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
