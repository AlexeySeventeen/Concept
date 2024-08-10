<template>
  <nav-card :stopTextClick="true" :text="this.text" @click.self.stop @basicClick="showSelect" class="relative blockHover">
    <button class="absolute top-1 right-[-6px] flex" tabindex="-1">
      <p class="passive__font-light mt-px w-12">{{ this.checked }}</p>
      <img class="h-6 w-6" src="../AllSvg/arrow-right.svg" />
      <div :class="[position, selected ? 'flex' : 'hidden']" class="sortModal action__font-light myModal flex-col max-h-44 overflow-x-scroll">
        <button
          v-for="item in arraySelect"
          :key="item"
          :data-color="item"
          @click="this.$emit('selectClick', item, a)"
          class="relative text-nowrap user-hover w-40 text-left p-1"
          :class="{selected: item === this.checked, changeBackgroundColor: text === 'Background', changeTextColor: text === 'Text Color'}">
          {{ item }}
        </button>
      </div>
    </button>
  </nav-card>
</template>

<script>

export default {
  name: 'NavCardSelect',

  props: {
    text: String,
    arraySelect: Array,
    checked: Array,
    position: String,
  },
  data() {
    return {
      checked: this.checked,
      selected: false,
    };
  },
  methods: {
    showSelect(buttonText) {
      if (buttonText === this.text) {
        this.selected ? (this.selected = false) : (this.selected = true);
      }
    },
  },
  mounted() {
    document.querySelectorAll('.changeBackgroundColor').forEach((item) => {
      item.style.backgroundColor = item.dataset.color;
      item.style.marginBottom = '1px';
      if (item.dataset.color === 'Black') {
        item.style.color = 'white';
      }
    });
    document.querySelectorAll('.changeTextColor').forEach((item) => {
      item.style.color = item.dataset.color;
    });
  },
};
</script>

<style scoped>
.selected:after {
  width: 1.5rem;
  height: 1.5rem;
  content: url('../AllSvg/check-mark.svg');
  position: absolute;
  top: 6px;
  right: 1px;
}
.blockHover:hover .sortModal {
  display: flex;
}
/* scrollbar */
.overflow-x-scroll {
  &::-webkit-scrollbar {
    display: block;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
    border: 4px solid white;
  }
}
</style>
