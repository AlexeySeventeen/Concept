<template>
  <button
    @click.stop
    :data-title="this.title"
    :class="{'user-hover': this.$store.state.theme === 'Light', 'user-hover-dark': this.$store.state.theme === 'Dark'}"
    class="flex relative py-0.5 w-44 dark:bg-black mb-[1px] dark:rounded"
    @click="this.$emit('basicClick', this.text), this.$emit('basicClickRu', this.svg)"
    @keydown.enter="this.$emit('enterClick', this.text)">
    <img v-if="this.$store.state.language === 'English'" class="h-5 w-5 ml-px" :src="require('../AllSvg/NavSvg/' + this.text + '.svg')" />
    <img v-if="this.$store.state.language === 'Russian'" class="h-5 w-5 ml-px" :src="require('../AllSvg/NavSvg/' + this.svg + '.svg')" />
    <h3 class="action__font-light leading-5 ml-2 text-text-passive">{{ this.text }}</h3>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'NavCard',

  props: {
    text: String,
    title: String,
    svg: String,
  },
};
</script>

<style scoped></style>
