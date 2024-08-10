<template>
  <button :data-title="this.title" class="flex relative user-hover py-0.5 w-44" @click="this.$emit('basicClick', this.text)">
    <img class="h-5 w-5 ml-px" :src="require('../AllSvg/NavSvg/' + this.text + '.svg')" />
    <h3 v-if="this.stopTextClick" @click.stop="this.$emit('basicClick', this.text)" class="action__font-light leading-5 ml-2">{{ this.text }}</h3>
    <h3 v-else class="action__font-light leading-5 ml-2">{{ this.text }}</h3>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'NavCard',

  props: {
    text: String,
    title: String,
    stopTextClick: Boolean,
  },
};
</script>

<style scoped></style>
