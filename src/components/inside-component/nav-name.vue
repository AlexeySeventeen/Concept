<template>
  <div class="flex justify-between">
    <div class="user-hover">
      <div class="action__font-light text-medium flex items-center gap-1">
        <div class="leading-5 text-nav-name bg-red w-5 h-5 rounded text-center">
          {{ $store.state.userName[0].toUpperCase() }}
        </div>
        <h3 id="name" class="leading-6 text-nav-name text-ellipsis h-6 w-28 overflow-hidden text-nowrap">
          {{ $store.state.userName }}
        </h3>
      </div>
    </div>

    <button class="user-hover p-1 z-20 after:top-[2px] after:right-[-96px]" @click="this.$emit('closeNav')" data-title="Close sidebar">
      <img class="h-4 w-4 pr-[2px]" src="../AllSvg/NavSvg/nav-arrow.svg" alt="<" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'NavName',

  props: {
    margin: Number,
  },

  watch: {
    margin() {
      document.querySelector('#name').style.width = `calc(${this.margin}px + 7rem)`;
    },
  },
};
</script>

<style scoped></style>
