<template>
  <div class="flex">
    <div class="flex">
      <button
        @click="this.sixPointOpen ? (this.sixPointOpen = false) : (this.sixPointOpen = true)"
        :class="{
          'mt-2': this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading1',
          'mt-1.5': this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading2',
          'mt-1': this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading3',
        }"
        class="h-6 w-6 p-1 user-hover mr-1 relative">
        <svg viewBox="0 0 13 4" class="fill-text-passive hidden" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
            <path d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
            <path d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
          </g>
        </svg>
        <div v-if="sixPointOpen" class="myModal top-[-60px] left-[26px]">
          <nav-card
            @basicClick="(info) => $store.commit('changeStringToggle', {info: info, id: this.id, mainId: this.mainId})"
            v-for="item in ['Insert Above', 'Insert Below']"
            :key="item"
            :text="item"></nav-card>
          <nav-card-select
            :position="'top-[-68px] left-[72px]'"
            :text="'Turn Into'"
            :arraySelect="this.allTypes"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].type"
            @selectClick="(newType) => $store.commit('changeTypeToggle', {newText: newType, id: this.id, mainId: this.mainId})"></nav-card-select>
          <nav-card-select
            :position="'top-[-40px] left-[72px]'"
            :text="'Align'"
            :arraySelect="['left', 'center', 'right']"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].Align"
            @selectClick="(newAlign) => $store.commit('changeAlignToggle', {newText: newAlign, id: this.id, mainId: this.mainId})"></nav-card-select>
          <nav-card-select
            :position="'top-[-96px] left-[72px]'"
            :text="'Text Color'"
            :arraySelect="this.allColor"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].Color"
            @selectClick="(newTextColor) => $store.commit('changeColorToggle', {newText: newTextColor, id: this.id, mainId: this.mainId})"></nav-card-select>
          <nav-card-select
            :position="'top-[-98px] left-[72px]'"
            :text="'Background'"
            :arraySelect="this.allColor"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor"
            @selectClick="(newBgColor) => $store.commit('changeBgColorToggle', {newText: newBgColor, id: this.id, mainId: this.mainId})"></nav-card-select>
          <nav-card
            @basicClick="(info) => $store.commit('changeStringToggle', {info: info, id: this.id, mainId: this.mainId})"
            v-for="item in ['Add New String', 'Delete']"
            :key="item"
            :text="item"></nav-card>
        </div>
      </button>
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'text'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
      :style="{
        color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
        backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
      }"
      :class="{
        'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
        'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
        'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
        'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
        'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-7 after:content-['Write_something'] after:text-text-passive"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading1'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
      :style="{
        color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
        backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
      }"
      :class="{
        'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
        'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
        'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
        'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
        'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-11 text-3xl after:content-['Heading1'] after:text-text-passive"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading2'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
      :style="{
        color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
        backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
      }"
      :class="{
        'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
        'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
        'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
        'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
        'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-9 text-2xl after:content-['heading2'] after:text-text-passive"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading3'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
      :style="{
        color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
        backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
      }"
      :class="{
        'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
        'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
        'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
        'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
        'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-7 text-xl after:content-['heading3'] after:text-text-passive"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'toggle'" class="relative w-[98%] min-h-7">
      <p class="absolute top-[-1px]">●</p>
      <div
        @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
        :style="{
          color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
          backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
        }"
        :class="{
          'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
          'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
          'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
          'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
          'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
        }"
        class="ml-4 outline-0 after:content-['List'] after:text-text-passive"
        contenteditable="true">
        {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
      </div>
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'todo'" class="relative w-[98%] min-h-7">
      <input
        type="checkbox"
        class="absolute top-1.5"
        @input="this.$store.commit('changeToDoToggle', {id: this.id, value: !this.$store.state.currentProject.string[this.mainId].content[this.id].toDoActieve, mainId: this.mainId})" />
      <div
        @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
        :style="{
          color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
          backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
        }"
        :class="{
          'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
          'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
          'line-through': this.$store.state.currentProject.string[this.mainId].content[this.id].toDoActieve,
          'text-text-todoComplete': this.$store.state.currentProject.string[this.mainId].content[this.id].toDoActieve,
          'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
          'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
          'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
        }"
        class="ml-4 outline-0 after:content-['To-Do'] after:text-text-passive decoration-2"
        contenteditable="true">
        {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
      </div>
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'quote'" class="relative w-[98%] min-h-7">
      <div class="absolute h-full w-1 bg-black"></div>
      <div
        @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
        :style="{
          color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
          backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
        }"
        :class="{
          'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
          'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
          'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
          'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
          'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
        }"
        class="ml-4 text-lg outline-0 after:content-['Empty_quote'] after:text-text-passive decoration-2"
        contenteditable="true">
        {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
      </div>
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'number'" class="w-[98%] min-h-7">
      <div class="relative">
        <div class="absolute top-0.5">{{ this.numberForList }}</div>
        <div
          @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId:this.mainId})"
          :style="{
            color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
            backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
          }"
          :class="{
            'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
            'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
            'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
            'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
            'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
          }"
          class="ml-4 text-lg outline-0 after:content-['List'] after:text-text-passive decoration-2"
          contenteditable="true">
          {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStringToggle',

  data() {
    return {
      nonChange: true,
      sixPointOpen: false,
      allTypes: ['text', 'heading1', 'heading2', 'heading3', 'toggle', 'todo', 'quote', 'number'],
      allColor: [
        'White',
        'Black',
        'Red',
        'Blue',
        'Yellow',
        'Orange',
        'Pink',
        'Gold',
        'Silver',
        'Brown',
        'Wheat',
        'Green',
        'Teal',
        'Aqua',
        'Navy',
        'Indigo',
        'Purple',
        'Violet',
        'Plum',
        'Gray',
      ],
    };
  },

  computed: {
    numberForList() {
      let numb = 0;
      for (let index = 0; index < this.id + 1; index++) {
        if (this.$store.state.currentProject.string[this.mainId].content[this.id - index].type === 'number') {
          numb = numb + 1;
        } else {
          return numb + '.';
        }
      }
      return numb + '.';
    },
  },

  props: {
    id: Number,
    mainId: Number,
  },
};
</script>

<style scoped>
.user-hover {
  &:hover svg,
  &:focus svg {
    display: block !important;
  }
}
.user-hover {
  &:hover p,
  &:focus p {
    display: block !important;
  }
}
.grid {
  grid-template-columns: 1fr 16px;
  gap: 4px;
}
.top-modal {
  top: calc(50% - 53px);
}
.left-modal {
  left: calc(50% - 85px);
}
.color {
  color: attr(data-colorist);
}
</style>
