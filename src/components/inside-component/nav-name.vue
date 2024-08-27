<template>
  <div class="flex justify-between">
    <div class="cursor-default">
      <div class="action__font-light text-medium flex items-center gap-1">
        <div class="color-change-3x leading-5 text-nav-name w-5 h-5 rounded text-center dark:text-black">
          {{ $store.state.userName[0].toUpperCase() }}
        </div>
        <h3 id="name" class="leading-6 text-nav-name text-ellipsis h-6 w-28 overflow-hidden text-nowrap dark:text-white">
          {{ $store.state.userName }}
        </h3>
      </div>
    </div>

    <button
      v-if="this.$store.state.language === 'English'"
      :class="{'user-hover': this.$store.state.theme === 'Light', 'user-hover-dark': this.$store.state.theme === 'Dark'}"
      class="p-1 z-20 after:top-[2px] after:right-[-94px]"
      @click="this.$emit('closeNav')"
      data-title="Close sidebar">
      <img class="h-4 w-4 pr-[2px]" src="../AllSvg/NavSvg/nav-arrow.svg" alt="<" />
    </button>
    <button
      v-if="this.$store.state.language === 'Russian'"
      :class="{'user-hover': this.$store.state.theme === 'Light', 'user-hover-dark': this.$store.state.theme === 'Dark'}"
      class="p-1 z-20 after:top-[2px] after:right-[-105px]"
      @click="this.$emit('closeNav')"
      data-title="Закрыть меню">
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

<style scoped>
.color-change-3x {
  -webkit-animation: color-change-3x 4s linear infinite alternate both;
  animation: color-change-3x 4s linear infinite alternate both;
}
@-webkit-keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #b22cff;
  }
  100% {
    background: #ea2222;
  }
}
@keyframes color-change-3x {
  0% {
    background: #19dcea;
  }
  50% {
    background: #b22cff;
  }
  100% {
    background: #ea2222;
  }
}
</style>
