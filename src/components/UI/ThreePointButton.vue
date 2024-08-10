<template>
  <button
    @click="this.click === true ? (this.click = false) : (this.click = true)">
    <svg viewBox="0 0 14 4" class="fill-text-passive hover:fill-black h-3 w-3">
      <g>
        <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
        <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
        <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
      </g>
    </svg>
    <div v-if="click" class="myModal">
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
