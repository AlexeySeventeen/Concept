<template>
  <div class="bg-nav-bg-light h-screen flex flex-row relative dark:bg-black">
    <!-- openNav btn-->
    <button
      :class="{'user-hover': this.$store.state.theme === 'Light', 'user-hover-dark border-0': this.$store.state.theme === 'Dark'}"
      class="absolute top-[5px] left-[5px] p-1 after:top-[30px] after:right-[-56px] hover:absolute"
      v-if="!showNav && this.$store.state.language === 'English'"
      @click="this.showNav = true"
      data-title="Open sidebar">
      <img class="h-5 w-5" src="./components/AllSvg/NavSvg/nav-open.svg" alt="show nav" />
    </button>
    <button
      :class="{'user-hover': this.$store.state.theme === 'Light', 'user-hover-dark border-0': this.$store.state.theme === 'Dark'}"
      class="absolute top-[5px] left-[5px] p-1 after:top-[30px] after:right-[-66px] hover:absolute"
      v-if="!showNav && this.$store.state.language === 'Russian'"
      @click="this.showNav = true"
      data-title="Открыть меню">
      <img class="h-5 w-5" src="./components/AllSvg/NavSvg/nav-open.svg" alt="show nav" />
    </button>

    <Nav @show="this.showNav = false" :showNav="this.showNav"></Nav>
    <Main></Main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      showNav: false,
      theme: this.$store.state.theme,
    };
  },

  mounted() {
    if (this.$store.state.theme === 'Dark' && document.querySelector('html').classList.contains('dark') === false) {
      document.querySelector('html').classList.add('dark');
    }
    if (this.$store.state.theme === 'Light' && document.querySelector('html').classList.contains('dark') === true) {
      document.querySelector('html').classList.remove('dark');
    }
  },
};
</script>

<style>
@import 'vue3-emoji-picker/css';

/* hide scrollbar */
::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
/* style input for increase nav */
input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  width: 60px;
}
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  margin-top: -12px; /* Centers thumb on the track */
  background-color: #e0e0e0;
  height: calc(100vh - 18px);
  width: 1px;
  cursor: col-resize;
}
input[type='range']::-webkit-slider-thumb:hover {
  width: 2px;
  background-color: #9e9ea0;
}
/* title */
[data-title]:hover {
  position: relative;
}
[data-title]:hover::after {
  content: attr(data-title) !important;
  position: absolute;
  z-index: 90;
  background-color: black;
  text-wrap: nowrap;
  color: #d3d3cd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  padding: 2px 6px;
}
.nav-basic[data-title]:hover::after {
  width: 230px;
}
.marginForH h3 {
  margin-top: -1px;
}
</style>
