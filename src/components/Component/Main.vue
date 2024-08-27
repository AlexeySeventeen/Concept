<template>
  <main
    :class="{'pr-0': this.pr, 'ml-1': !this.showNav}"
    class="overflow-y-scroll p-8 bg-main-bg-light w-screen m-1 ml-0 rounded border-solid border-[1px] border-border-color overflow-hidden dark:bg-nav-bg-dark dark:border-text-passive">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
      pr: false,
    };
  },
  props: {
    showNav: Boolean,
  },

  watch: {
    '$route.path'(link) {
      if (link === '/Home') {
        this.pr = true;
      } else {
        this.pr = false;
      }
    },
  },
};
</script>

<style scoped></style>
