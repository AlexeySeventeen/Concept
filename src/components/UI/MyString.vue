<template>
  <div class="flex" :class="{'mt-5': $store.state.currentProject.string[this.id].type === 'table'}">
    <div class="flex">
      <button
        @click="this.sixPointOpen ? (this.sixPointOpen = false) : (this.sixPointOpen = true)"
        :class="{
          'mt-2': this.$store.state.currentProject.string[this.id].type === 'heading1',
          'mt-1.5': this.$store.state.currentProject.string[this.id].type === 'heading2',
          'mt-1': this.$store.state.currentProject.string[this.id].type === 'heading3',
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
            @basicClick="(info) => this.$emit('changeString', info, this.id)"
            v-for="item in ['Insert Above', 'Insert Below']"
            :key="item"
            :text="item"></nav-card>
          <nav-card-select
            :position="'top-[-68px] left-[72px]'"
            :text="'Turn Into'"
            :arraySelect="this.allTypes"
            :checked="$store.state.currentProject.string[this.id].type"
            @selectClick="(newType) => $store.commit('changeType', {newText: newType, id: this.id})"></nav-card-select>
          <nav-card-select
            :position="'top-[-40px] left-[72px]'"
            :text="'Align'"
            :arraySelect="['left', 'center', 'right']"
            :checked="$store.state.currentProject.string[this.id].Align"
            @selectClick="(newAlign) => $store.commit('changeAlign', {newText: newAlign, id: this.id})"></nav-card-select>
          <nav-card-select
            :position="'top-[-96px] left-[72px]'"
            :text="'Text Color'"
            :arraySelect="this.allColor"
            :checked="$store.state.currentProject.string[this.id].Color"
            @selectClick="(newTextColor) => $store.commit('changeColor', {newText: newTextColor, id: this.id})"></nav-card-select>
          <nav-card-select
            :position="'top-[-98px] left-[72px]'"
            :text="'Background'"
            :arraySelect="this.allColor"
            :checked="$store.state.currentProject.string[this.id].BgColor"
            @selectClick="(newBgColor) => $store.commit('changeBgColor', {newText: newBgColor, id: this.id})"></nav-card-select>
          <nav-card
            @basicClick="(info) => this.$emit('changeString', info, this.id)"
            v-for="item in ['Add New String', 'Delete']"
            :key="item"
            :text="item"></nav-card>
        </div>
      </button>
    </div>

    <div
      v-if="$store.state.currentProject.string[this.id].type === 'text'"
      @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
      :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: $store.state.currentProject.string[this.id].BgColor}"
      :class="{
        'after:block': $store.state.currentProject.string[this.id].content.length === 0,
        'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
        'text-left': $store.state.currentProject.string[this.id].Align === 'left',
        'text-center': $store.state.currentProject.string[this.id].Align === 'center',
        'text-right': $store.state.currentProject.string[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-7 after:content-['Write_something'] after:text-text-passive"
      contenteditable="true">
      {{ $store.state.currentProject.string[this.id].content }}
    </div>

    <div
      v-if="$store.state.currentProject.string[this.id].type === 'heading1'"
      @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
      :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: $store.state.currentProject.string[this.id].BgColor}"
      :class="{
        'after:block': $store.state.currentProject.string[this.id].content.length === 0,
        'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
        'text-left': $store.state.currentProject.string[this.id].Align === 'left',
        'text-center': $store.state.currentProject.string[this.id].Align === 'center',
        'text-right': $store.state.currentProject.string[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-11 text-3xl after:content-['Heading1'] after:text-text-passive"
      contenteditable="true">
      {{ $store.state.currentProject.string[this.id].content }}
    </div>

    <div
      v-if="$store.state.currentProject.string[this.id].type === 'heading2'"
      @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
      :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: $store.state.currentProject.string[this.id].BgColor}"
      :class="{
        'after:block': $store.state.currentProject.string[this.id].content.length === 0,
        'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
        'text-left': $store.state.currentProject.string[this.id].Align === 'left',
        'text-center': $store.state.currentProject.string[this.id].Align === 'center',
        'text-right': $store.state.currentProject.string[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-9 text-2xl after:content-['heading2'] after:text-text-passive"
      contenteditable="true">
      {{ $store.state.currentProject.string[this.id].content }}
    </div>

    <div
      v-if="$store.state.currentProject.string[this.id].type === 'heading3'"
      @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
      :style="{color: this.$store.state.currentProject.string[this.id].Color, backgroundColor: this.$store.state.currentProject.string[this.id].BgColor}"
      :class="{
        'after:block': $store.state.currentProject.string[this.id].content.length === 0,
        'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
        'text-left': $store.state.currentProject.string[this.id].Align === 'left',
        'text-center': $store.state.currentProject.string[this.id].Align === 'center',
        'text-right': $store.state.currentProject.string[this.id].Align === 'right',
      }"
      class="outline-0 w-full min-h-7 text-xl after:content-['heading3'] after:text-text-passive"
      contenteditable="true">
      {{ $store.state.currentProject.string[this.id].content }}
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'toggle'" class="relative w-[98%] min-h-7">
      <p class="absolute top-[-1px]">●</p>
      <div
        @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
        :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: $store.state.currentProject.string[this.id].BgColor}"
        :class="{
          'after:block': $store.state.currentProject.string[this.id].content.length === 0,
          'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
          'text-left': $store.state.currentProject.string[this.id].Align === 'left',
          'text-center': $store.state.currentProject.string[this.id].Align === 'center',
          'text-right': $store.state.currentProject.string[this.id].Align === 'right',
        }"
        class="ml-4 outline-0 after:content-['List'] after:text-text-passive"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].content }}
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'todo'" class="relative w-[98%] min-h-7">
      <input
        type="checkbox"
        class="absolute top-1.5"
        @input="this.$store.commit('changeToDo', {id: this.id, value: !$store.state.currentProject.string[this.id].toDoActieve})" />
      <div
        @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
        :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: this.$store.state.currentProject.string[this.id].BgColor}"
        :class="{
          'after:block': $store.state.currentProject.string[this.id].content.length === 0,
          'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
          'line-through': $store.state.currentProject.string[this.id].toDoActieve,
          'text-text-todoComplete': $store.state.currentProject.string[this.id].toDoActieve,
          'text-left': $store.state.currentProject.string[this.id].Align === 'left',
          'text-center': $store.state.currentProject.string[this.id].Align === 'center',
          'text-right': $store.state.currentProject.string[this.id].Align === 'right',
        }"
        class="ml-4 outline-0 after:content-['To-Do'] after:text-text-passive decoration-2"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].content }}
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'quote'" class="relative w-[98%] min-h-7">
      <div class="absolute h-full w-1 bg-black"></div>
      <div
        @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
        :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: this.$store.state.currentProject.string[this.id].BgColor}"
        :class="{
          'after:block': $store.state.currentProject.string[this.id].content.length === 0,
          'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
          'text-left': $store.state.currentProject.string[this.id].Align === 'left',
          'text-center': $store.state.currentProject.string[this.id].Align === 'center',
          'text-right': $store.state.currentProject.string[this.id].Align === 'right',
        }"
        class="ml-4 text-lg outline-0 after:content-['Empty_quote'] after:text-text-passive decoration-2"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].content }}
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'number'" class="w-[98%] min-h-7">
      <div class="relative">
        <div class="absolute top-0.5">{{ this.numberForList }}</div>
        <div
          @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
          :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: $store.state.currentProject.string[this.id].BgColor}"
          :class="{
            'after:block': $store.state.currentProject.string[this.id].content.length === 0,
            'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
            'text-left': $store.state.currentProject.string[this.id].Align === 'left',
            'text-center': $store.state.currentProject.string[this.id].Align === 'center',
            'text-right': $store.state.currentProject.string[this.id].Align === 'right',
          }"
          class="ml-4 text-lg outline-0 after:content-['List'] after:text-text-passive decoration-2"
          contenteditable="true">
          {{ $store.state.currentProject.string[this.id].content }}
        </div>
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'drop-down'" class="w-[98%] min-h-7 relative">
      <button class="absolute left-[-10px]">
        <svg
          @click.self="toggleArrow($event.target, !this.$store.state.currentProject.string[this.id].toggleOpen)"
          viewBox="0 0 16 16"
          class="fill-black w-7"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              @click.self="toggleArrow($event.target.nearestViewportElement, !this.$store.state.currentProject.string[this.id].toggleOpen)"
              d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
          </g>
        </svg>
      </button>
      <div
        @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
        :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: this.$store.state.currentProject.string[this.id].BgColor}"
        :class="{
          'after:block': $store.state.currentProject.string[this.id].heading.length === 0,
          'after:hidden': $store.state.currentProject.string[this.id].heading.length > 0,
          'text-left': $store.state.currentProject.string[this.id].Align === 'left',
          'text-center': $store.state.currentProject.string[this.id].Align === 'center',
          'text-right': $store.state.currentProject.string[this.id].Align === 'right',
        }"
        class="ml-4 text-lg outline-0 after:content-['Toggle_title'] after:text-text-passive decoration-2"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].heading }}
      </div>
      <div v-if="$store.state.currentProject.string[this.id].toggleOpen">
        <MyStringToggle v-for="(item, index) in this.$store.state.currentProject.string[this.id].content" :id="index" :mainId="this.id" />
      </div>
    </div>

    <div
      v-if="$store.state.currentProject.string[this.id].type === 'table'"
      class="w-full flex ml-3"
      :class="{
        'justify-start': $store.state.currentProject.string[this.id].Align === 'left',
        'justify-center': $store.state.currentProject.string[this.id].Align === 'center',
        'justify-end': $store.state.currentProject.string[this.id].Align === 'right',
      }">
      <table class="grid">
        <tbody :style="{backgroundColor: $store.state.currentProject.string[this.id].BgColor}">
          <tr
            v-for="(e, indexRow) in $store.state.currentProject.string[this.id].rows"
            class="relative border-border-active"
            :class="{'border-2': indexRow === this.tableSelectRow}">
            <button @click="tableOpen(indexRow, 'row')" class="user-hover w-4 h-full absolute left-[-18px]">
              <svg class="hidden fill-text-passive" viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path
                    d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
                </g>
              </svg>
            </button>

            <div v-if="tableSelect && this.tableSelectRow === indexRow" class="myModal top-modal left-[-1px]">
              <nav-card @basicClick="(info) => tableClick(info, 'row')" v-for="item in arrayRow" :key="item" :text="item"></nav-card>
            </div>

            <td
              :style="{maxWidth: 80 / $store.state.currentProject.string[this.id].cols + 'vw'}"
              v-for="(e, indexCol) in $store.state.currentProject.string[this.id].cols"
              :class="{
                'border-x-2 border-x-border-active': indexCol === this.tableSelectColumn,
                'border-t-2 border-t-border-active': indexRow === 0 && indexCol === this.tableSelectColumn,
                'border-b-2 border-b-border-active': indexRow === $store.state.currentProject.string[this.id].rows - 1 && indexCol === this.tableSelectColumn,
              }"
              class="border-solid border-[1px] border-black outline-0 px-2 py-1.5 text-center min-w-24 relative">
              <button @click="tableOpen(indexCol, 'col')" v-if="indexRow === 0" class="flex justify-center user-hover w-full h-4 absolute top-[-18px] left-0">
                <svg class="fill-text-passive rotate-90 w-4 hidden" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
                  </g>
                </svg>

                <div v-if="tableSelect && this.tableSelectColumn === indexCol" class="top-[17px] left-modal myModal">
                  <nav-card @basicClick="(info) => tableClick(info, 'col')" v-for="item in arrayColumn" :key="item" :text="item"></nav-card>
                </div>
              </button>

              <div
                :style="{color: $store.state.currentProject.string[this.id].Color}"
                @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
                class="outline-0"
                contenteditable="true">
                {{ $store.state.currentProject.string[this.id].content[indexRow][indexCol] }}
              </div>
            </td>
          </tr>
        </tbody>
        <button class="user-hover" @click="changeTable('cols')"><p class="text-xl text-text-passive hidden">+</p></button>
        <button class="user-hover h-4" @click="changeTable('rows')"><p class="text-xl text-text-passive mt-[-8px] hidden">+</p></button>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyString',

  data() {
    return {
      nonChange: true,
      tableSelect: false,
      tableSelectRow: null,
      tableSelectColumn: null,
      arrayColumn: ['Insert Left', 'Insert Right', 'Clear Contents', 'Delete'],
      arrayRow: ['Insert Above', 'Insert Below', 'Clear Contents', 'Delete'],
      sixPointOpen: false,
      allTypes: ['text', 'heading1', 'heading2', 'heading3', 'toggle', 'todo', 'quote', 'number', 'drop-down', 'table'],
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

  props: {
    id: Number,
  },

  computed: {
    numberForList() {
      let numb = 0;
      for (let index = 0; index < this.id + 1; index++) {
        if (this.$store.state.currentProject.string[this.id - index].type === 'number') {
          numb = numb + 1;
        } else {
          return numb + '.';
        }
      }
      return numb + '.';
    },
  },

  methods: {
    toggleArrow(svg, value) {
      this.$store.commit('changeToggle', {id: this.id, value: value});

      if (value) {
        svg.style.WebkitTransitionDuration = '0.5s';
        svg.style.transform = 'rotate(90deg)';
      } else {
        svg.style.WebkitTransitionDuration = '0.5s';
        svg.style.transform = 'rotate(0deg)';
      }
    },
    //   changeTable(value) {
    //     const allContent = ;
    //     if (value === 'rows') {
    //       const array = [];
    //       let i = 1;
    //       while (i < this.string.cols) {
    //         array.push('');
    //         i++;
    //       }
    //       allContent.push(array);
    //       this.string.rows++;
    //     }
    //     if (value === 'cols') {
    //       allContent.forEach((item) => {
    //         item.push('');
    //       });
    //       this.string.cols++;
    //     }
    //   },
    //   tableOpen(number, element) {
    //     if (!this.tableSelect) {
    //       this.tableSelect = true;
    //       if (element === 'row') {
    //         this.tableSelectColumn = null;
    //         this.tableSelectRow = number;
    //       }
    //       if (element === 'col') {
    //         this.tableSelectRow = null;
    //         this.tableSelectColumn = number;
    //       }
    //     } else {
    //       this.tableSelect = false;
    //       this.tableSelectRow = null;
    //       this.tableSelectColumn = null;
    //     }
    //   },
    //   tableClick(todo, type) {
    //     let number;
    //     type === 'row' ? (number = this.tableSelectRow) : (number = this.tableSelectColumn);
    //     if (type === 'row') {
    //       if (todo === 'Clear Contents') {
    //         $store.commit('changeText',{newText:'', id:this.id})[number].forEach((item, index, array) => (array[index] = ''));
    //       }
    //       if (todo === 'Delete' && this.string.rows > 1) {
    //         this.string.rows--;
    //         $store.commit('changeText',{newText:'', id:this.id}).splice(number, 1);
    //       }
    //       if (todo === 'Insert Above' && number > 0) {
    //         [$store.commit('changeText',{newText:'', id:this.id})[number - 1], $store.commit('changeText',{newText:'', id:this.id})[number]] = [$store.commit('changeText',{newText:'', id:this.id})[number], $store.commit('changeText',{newText:'', id:this.id})[number - 1]];
    //       }
    //       if (todo === 'Insert Below' && number < this.string.rows - 1) {
    //         [$store.commit('changeText',{newText:'', id:this.id})[number], $store.commit('changeText',{newText:'', id:this.id})[number + 1]] = [$store.commit('changeText',{newText:'', id:this.id})[number + 1], $store.commit('changeText',{newText:'', id:this.id})[number]];
    //       }
    //       this.tableOpen();
    //     }
    //     if (type === 'col') {
    //       if (todo === 'Clear Contents') {
    //         $store.commit('changeText',{newText:'', id:this.id}).forEach((item) => (item[number] = ''));
    //       }
    //       if (todo === 'Delete' && this.string.cols > 1) {
    //         this.string.cols--;
    //         $store.commit('changeText',{newText:'', id:this.id}).forEach((item) => item.splice(number, 1));
    //       }
    //       if (todo === 'Insert Left' && number > 0) {
    //         $store.commit('changeText',{newText:'', id:this.id}).forEach((item) => {
    //           [item[number - 1], item[number]] = [item[number], item[number - 1]];
    //         });
    //       }
    //       if (todo === 'Insert Right' && number < this.string.cols - 1) {
    //         $store.commit('changeText',{newText:'', id:this.id}).forEach((item) => {
    //           [item[number], item[number + 1]] = [item[number + 1], item[number]];
    //         });
    //       }
    //     }
    //   },
  },

  // watch: {
  //   type(value) {
  //     if (this.nonChange) {
  //       let text;
  //       if (this.string.heading) {
  //         text = this.string.heading;
  //       } else {
  //         if (typeof $store.commit('changeText',{newText:'', id:this.id}) === 'object') {
  //           typeof $store.commit('changeText',{newText:'', id:this.id})[0] === 'object' ? (text = $store.commit('changeText',{newText:'', id:this.id})[0][0]) : (text = $store.commit('changeText',{newText:'', id:this.id})[0]);
  //         } else {
  //           text = $store.commit('changeText',{newText:'', id:this.id});
  //         }
  //       }

  //       if (value === 'number') {
  //         $store.commit('changeText',{newText:'', id:this.id}) = [text];
  //       } else if (value === 'drop-down') {
  //         this.string.heading = text;
  //         $store.commit('changeText',{newText:'', id:this.id}) = [{type: 'text', content: ''}];
  //       } else if (value === 'table') {
  //         this.string.rows = 3;
  //         this.string.cols = 2;
  //         $store.commit('changeText',{newText:'', id:this.id}) = [
  //           [text, ''],
  //           ['', ''],
  //           ['', ''],
  //         ];
  //       } else {
  //         $store.commit('changeText',{newText:'', id:this.id}) = text;
  //       }
  //     }
  //   },

  // },
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
