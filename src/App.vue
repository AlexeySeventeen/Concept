<template>
  <div class="bg-nav-bg-light h-screen flex flex-row relative">
    <!-- openNav -->
    <button
      class="absolute top-[5px] left-[5px] user-hover p-1 after:top-[30px] after:right-[-56px] hover:absolute"
      v-if="!showNav"
      @click="this.showNav = true"
      data-title="Open sidebar">
      <img class="h-5 w-5" src="./components/AllSvg/NavSvg/nav-open.svg" alt="show nav" />
    </button>

    <Nav @show="this.showNav = false" :showNav="this.showNav"></Nav>
    <Main></Main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: 0,
      showNav: false,
    };
  },

  mounted() {
    axios.get('https://aa9aa081e8c8442e.mokky.dev/profiles').then((result) => this.$store.commit('setName', result.data[this.id].name));
    axios.get('https://aa9aa081e8c8442e.mokky.dev/items?id=' + this.$store.state.id).then((result) => {
      this.$store.commit('setProjects', result.data[0].projects);
    });
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
  width: 200px;
}
</style>
