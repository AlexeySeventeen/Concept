<template>
  <main class="overflow-y-scroll p-8 pr-1 bg-main-bg-light w-screen m-1 ml-0 rounded border-solid border-[1px] border-border-color overflow-hidden">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'Main',
  props: {
    showNav: Boolean,
    projects: Array,
  },
};
</script>

<style scoped>
.overflow-y-scroll {
  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
    border: 4px solid white;
  }
}
</style>
