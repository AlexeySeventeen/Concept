<template>
  <nav-card
    v-if="this.$store.state.language === 'English'"
    :text="this.text"
    @click.self.stop
    @enterClick="showSelect"
    class="relative blockHover dark:*:text-white dark:bg-black dark:rounded">
    <button class="absolute top-1 right-[-6px] flex" tabindex="-1">
      <p class="passive__font-light mt-px w-12 pr-1">{{ this.checked }}</p>
      <img class="h-6 w-6" src="../AllSvg/arrow-right.svg" :class="{filterTransparent: this.checked === 'Transparent'}" />
      <div
        :class="[position, selected ? 'flex' : 'hidden']"
        class="sortModal action__font-light myModal flex-col max-h-44 overflow-x-scroll dark:bg-nav-bg-dark">
        <button
          v-for="item in arraySelect"
          :key="item"
          :data-color="item"
          @click="this.$emit('selectClick', item, a)"
          class="relative text-nowrap w-40 text-left p-1 dark:bg-black dark:border-black dark:rounded mt-[2px]"
          :class="{
            selected: item === this.checked && this.$store.state.theme === 'Light',
            selectedDark: item === this.checked && this.$store.state.theme === 'Dark',
            changeBackgroundColor: text === 'Background',
            changeTextColor: text === 'Text Color',
            'user-hover': this.$store.state.theme === 'Light',
            'user-hover-dark': this.$store.state.theme === 'Dark',
          }">
          {{ item }}
        </button>
      </div>
    </button>
  </nav-card>

  <nav-card
    v-if="this.$store.state.language === 'Russian'"
    :svg="this.svg"
    :text="this.text"
    @click.self.stop
    @enterClick="showSelect"
    :class="{'w-[242px] marginForH': this.$store.state.language === 'Russian'}"
    class="relative blockHover dark:*:text-white dark:bg-black dark:rounded">
    <button class="absolute top-1 right-[-6px] flex" tabindex="-1">
      <p class="passive__font-light mt-px w-12 pr-[80px]">{{ this.checkedShow }}</p>
      <img
        class="h-6 w-6"
        src="../AllSvg/arrow-right.svg"
        :class="{filterTransparent: this.checkedShow === 'Дате изменений' || this.checkedShow === 'Нумерованный'}" />
      <div
        :class="[position, selected ? 'flex' : 'hidden']"
        class="sortModal action__font-light myModal flex-col max-h-44 overflow-x-scroll dark:bg-nav-bg-dark">
        <button
          v-for="item in arraySelect"
          :key="item.text"
          :data-color="item.value"
          @click="this.$emit('selectClick', {value: item.value, text: item.text}, a)"
          class="relative text-nowrap w-40 text-left p-1 dark:bg-black dark:border-black dark:rounded mt-[2px]"
          :class="{
            selected: item.value === this.checked && this.$store.state.theme === 'Light',
            selectedDark: item.value === this.checked && this.$store.state.theme === 'Dark',
            changeBackgroundColor: svg === 'Background',
            changeTextColor: svg === 'Text Color',
            'user-hover': this.$store.state.theme === 'Light',
            'user-hover-dark': this.$store.state.theme === 'Dark',
          }">
          {{ item.text }}
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
    checked: String,
    position: String,
    svg: String,
  },
  data() {
    return {
      selected: false,
      checkedShow: '',
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
      item.style.borderColor = item.dataset.color;

      item.style.borderRadius = '0.25rem';
      item.style.backgroundColor = item.dataset.color;
      item.style.marginBottom = '1px';
      if (item.dataset.color === 'Black') {
        item.style.color = 'white';
      }
      if (item.dataset.color === 'White') {
        item.style.color = 'black';
      }
      if (item.dataset.color === 'Transparent') {
        item.style.color = 'white';
        item.style.backgroundColor = '#91918e';
      }
    });
    document.querySelectorAll('.changeTextColor').forEach((item) => {
      item.style.color = item.dataset.color;
      if (item.dataset.color === 'Transparent') {
        item.style.color = '#91918e';
      }
    });

    this.arraySelect.forEach((item) => {
      if (item.value === this.checked) {
        this.checkedShow = item.text;
      }
    });
  },
  watch: {
    checked(newValue) {
      this.arraySelect.forEach((item) => {
        if (item.value === newValue) {
          this.checkedShow = item.text;
        }
      });
    },
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
.selectedDark:after {
  width: 1.5rem;
  height: 1.5rem;
  content: url('../AllSvg/check-mark.svg');
  position: absolute;
  top: 6px;
  right: 1px;
  filter: invert(1);
}
.blockHover:hover .sortModal {
  display: flex;
}
.changeBackgroundColor {
  border-width: 0px;
}
.changeBackgroundColor.selected,
.changeBackgroundColor.selectedDark {
  border-width: 0px 4px !important;
}
.changeBackgroundColor:hover {
  border-width: 0 4px;
}
.filterTransparent {
  filter: opacity(0);
}
</style>
