<template>
  <div class="flex flex-col relative cursor-pointer" @keydown.enter="this.openList ? (this.openList = false) : (this.openList = true)">
    <div class="min-w-32 text-center rounded bg-user-hover cursor-pointer px-2 py-1" @click="this.openList ? (this.openList = false) : (this.openList = true)">
      {{ modelValue }}
    </div>
    <div v-if="openList" class="absolute top-9 right-[-1px] bg-white z-10 rounded-xl border border-solid">
      <div v-for="item in languageSelect">
        <button
          tabindex="0"
          @click="this.$emit('update:modelValue', item.text), (this.openList = false)"
          @keydown.enter="this.$emit('update:modelValue', item.text), this.openList = true"
          class="min-w-32 text-center user-hover cursor-pointer flex justify-between relative px-2 py-1">
          <p>{{ item.text }}</p>
          <img :src="require('../AllSvg/SelectSvg/' + item.value + '.svg')" class="absolute w-4 h-4 top-[8px] right-[6px]" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySelect',

  data() {
    return {
      openList: false,
    };
  },

  props: {
    modelValue: String,
    languageSelect: Object,
  },
};
</script>

<style scoped></style>
