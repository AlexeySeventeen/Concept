<template>
  <button @name="this.click = false" @click="this.click === true ? (this.click = false) : (this.click = true)">
    <svg
      viewBox="0 0 14 4"
      class="modalFirst fill-text-passive h-3 w-3"
      :class="{'hover:fill-black': this.$store.state.theme === 'Light', 'hover:fill-white': this.$store.state.theme === 'Dark'}">
      <g class="modalFirst">
        <path class="modalFirst" d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
        <path class="modalFirst" d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
        <path class="modalFirst" d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
      </g>
    </svg>
    <div v-if="click" class="dark:bg-nav-bg-dark modalFirst myModal">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'ThreePointButton',

  data() {
    return {
      click: false,
    };
  },
};
</script>

<style scoped></style>
