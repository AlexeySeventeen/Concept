<template>
  <div class="flex" :class="{'mt-5': $store.state.currentProject.string[this.id].type === 'table'}">
    <div class="flex">
      <button
        v-myModal="'modalSecond' + this.id"
        @name="this.sixPointOpen = false"
        @click="this.sixPointOpen ? (this.sixPointOpen = false) : (this.sixPointOpen = true)"
        :class="[
          'modalSecond' + this.id,
          {
            'mt-2': this.$store.state.currentProject.string[this.id].type === 'heading1',
            'mt-1.5': this.$store.state.currentProject.string[this.id].type === 'heading2',
            'user-hover': this.$store.state.theme === 'Light',
            'hover:bg-user-hover-dark hover:rounded': this.$store.state.theme === 'Dark',
          },
        ]"
        class="h-6 w-6 p-1 mr-1 relative showBtn forAnimation">
        <svg :class="'modalSecond' + this.id" viewBox="0 0 13 4" class="fill-text-passive hidden showSvg dark:fill-black" xmlns="http://www.w3.org/2000/svg">
          <g :class="'modalSecond' + this.id">
            <path :class="'modalSecond' + this.id" d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
            <path :class="'modalSecond' + this.id" d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
            <path :class="'modalSecond' + this.id" d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
          </g>
        </svg>
        <div v-if="sixPointOpen && this.$store.state.language === 'English'" class="myModal top-[-60px] left-[26px] dark:bg-nav-bg-dark">
          <nav-card
            class="dark:*:text-white"
            @basicClick="(info) => ((this.sixPointOpen = false), this.$emit('changeString', info, this.id))"
            v-for="item in ['Insert Above', 'Insert Below']"
            :key="item"
            :text="item"></nav-card>
          <nav-card-select
            :position="'top-[-68px] left-[72px]'"
            :text="'Turn Into'"
            :arraySelect="this.allTypes"
            :checked="$store.state.currentProject.string[this.id].type"
            @selectClick="(newType) => ((this.sixPointOpen = false), $store.commit('changeType', {newText: newType, id: this.id}))"></nav-card-select>
          <nav-card-select
            :position="'top-[-40px] left-[72px]'"
            :text="'Align'"
            :arraySelect="['left', 'center', 'right']"
            :checked="$store.state.currentProject.string[this.id].Align"
            @selectClick="(newAlign) => ((this.sixPointOpen = false), $store.commit('changeAlign', {newText: newAlign, id: this.id}))"></nav-card-select>
          <nav-card-select
            :position="'top-[-96px] left-[72px]'"
            :text="'Text Color'"
            :arraySelect="this.allColor"
            :checked="$store.state.currentProject.string[this.id].Color"
            @selectClick="
              (newTextColor) => ((this.sixPointOpen = false), $store.commit('changeColor', {newText: newTextColor, id: this.id}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-98px] left-[72px]'"
            :text="'Background'"
            :arraySelect="this.allColor"
            :checked="$store.state.currentProject.string[this.id].BgColor"
            @selectClick="(newBgColor) => ((this.sixPointOpen = false), $store.commit('changeBgColor', {newText: newBgColor, id: this.id}))"></nav-card-select>
          <nav-card
            class="dark:*:text-white"
            @basicClick="(info) => ((this.sixPointOpen = false), this.$emit('changeString', info, this.id))"
            v-for="item in ['Add New String', 'Delete']"
            :key="item"
            :text="item"></nav-card>
        </div>
        <div v-if="sixPointOpen && this.$store.state.language === 'Russian'" class="myModal top-[-60px] left-[26px] dark:bg-nav-bg-dark">
          <nav-card
            class="dark:*:text-white w-[242px]"
            @basicClickRu="(info) => ((this.sixPointOpen = false), this.$emit('changeString', info, this.id))"
            v-for="item in [
              {value: 'Insert Above', text: 'Поднять строку'},
              {value: 'Insert Below', text: 'Опустить строку'},
            ]"
            :key="item.text"
            :svg="item.value"
            :text="item.text"></nav-card>
          <nav-card-select
            :position="'top-[-68px] left-[105px]'"
            :svg="'Turn Into'"
            :text="'Превратиться в'"
            :arraySelect="this.allTypesRu"
            :checked="$store.state.currentProject.string[this.id].type"
            @selectClick="(newType) => ((this.sixPointOpen = false), $store.commit('changeType', {newText: newType.value, id: this.id}))"></nav-card-select>
          <nav-card-select
            :position="'top-[-40px] left-[105px]'"
            :svg="'Align'"
            :text="'Выравнивание'"
            :arraySelect="[
              {value: 'left', text: 'Лево'},
              {value: 'center', text: 'Центр'},
              {value: 'right', text: 'Право'},
            ]"
            :checked="$store.state.currentProject.string[this.id].Align"
            @selectClick="(newAlign) => ((this.sixPointOpen = false), $store.commit('changeAlign', {newText: newAlign.value, id: this.id}))"></nav-card-select>
          <nav-card-select
            :position="'top-[-96px] left-[105px]'"
            :svg="'Text Color'"
            :text="'Цвет Текста'"
            :arraySelect="this.allColorRu"
            :checked="$store.state.currentProject.string[this.id].Color"
            @selectClick="
              (newTextColor) => ((this.sixPointOpen = false), $store.commit('changeColor', {newText: newTextColor.value, id: this.id}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-98px] left-[105px]'"
            :svg="'Background'"
            :text="'Цвет фона'"
            :arraySelect="this.allColorRu"
            :checked="$store.state.currentProject.string[this.id].BgColor"
            @selectClick="
              (newBgColor) => ((this.sixPointOpen = false), $store.commit('changeBgColor', {newText: newBgColor.value, id: this.id}))
            "></nav-card-select>
          <nav-card
            class="dark:*:text-white w-[242px]"
            @basicClickRu="(info) => ((this.sixPointOpen = false), this.$emit('changeString', info, this.id))"
            v-for="item in [
              {value: 'Add New String', text: 'Добавить строку'},
              {value: 'Delete', text: 'Удалить'},
            ]"
            :key="item.text"
            :svg="item.value"
            :text="item.text"></nav-card>
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
        textAfterEn: $store.state.language === 'English',
        textAfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-7"
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
        h1AfterEn: $store.state.language === 'English',
        h1AfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-11 text-3xl"
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
        h2AfterEn: $store.state.language === 'English',
        h2AfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-9 text-2xl"
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
        h3AfterEn: $store.state.language === 'English',
        h3AfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-7 text-xl"
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
          toggleAfterEn: $store.state.language === 'English',
          toggleAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 outline-0"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].content }}
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'todo'" class="relative w-[98%] min-h-7">
      <input
        type="checkbox"
        class="absolute top-1.5"
        :checked="this.$store.state.currentProject.string[this.id].toDoActieve"
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
          doAfterEn: $store.state.language === 'English',
          doAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 outline-0 decoration-2"
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
          quoteAfterEn: $store.state.language === 'English',
          quoteAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 text-lg outline-0 decoration-2"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].content }}
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'number'" class="w-[98%] min-h-7">
      <div
        class="relative"
        :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: $store.state.currentProject.string[this.id].BgColor}">
        <div class="absolute top-0.5">{{ this.numberForList }}</div>
        <div
          @input="(item) => $store.commit('changeText', {newText: item.target.outerText, id: this.id})"
          :class="{
            'after:block': $store.state.currentProject.string[this.id].content.length === 0,
            'after:hidden': $store.state.currentProject.string[this.id].content.length > 0,
            'text-left': $store.state.currentProject.string[this.id].Align === 'left',
            'text-center': $store.state.currentProject.string[this.id].Align === 'center',
            'text-right': $store.state.currentProject.string[this.id].Align === 'right',
            numbAfterEn: $store.state.language === 'English',
            numbAfterRu: $store.state.language === 'Russian',
            'after:text-black': $store.state.theme === 'Dark',
            'after:text-text-passive': $store.state.theme === 'Light',
          }"
          class="ml-4 text-lg outline-0 decoration-2"
          contenteditable="true">
          {{ $store.state.currentProject.string[this.id].content }}
        </div>
      </div>
    </div>

    <div v-if="$store.state.currentProject.string[this.id].type === 'drop-list'" class="w-[98%] min-h-7 relative">
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
        @input="(item) => $store.commit('changeHeading', {newText: item.target.outerText, id: this.id})"
        :style="{color: $store.state.currentProject.string[this.id].Color, backgroundColor: this.$store.state.currentProject.string[this.id].BgColor}"
        :class="{
          'after:block': $store.state.currentProject.string[this.id].heading.length === 0,
          'after:hidden': $store.state.currentProject.string[this.id].heading.length > 0,
          'text-left': $store.state.currentProject.string[this.id].Align === 'left',
          'text-center': $store.state.currentProject.string[this.id].Align === 'center',
          'text-right': $store.state.currentProject.string[this.id].Align === 'right',
          dropAfterEn: $store.state.language === 'English',
          dropAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 text-lg outline-0 decoration-2"
        contenteditable="true">
        {{ $store.state.currentProject.string[this.id].heading }}
      </div>
      <div v-if="$store.state.currentProject.string[this.id].toggleOpen">
        <MyStringToggle v-for="(item, index) in this.$store.state.currentProject.string[this.id].content" :id="index" :mainId="this.id" />
      </div>
    </div>

    <div
      v-if="$store.state.currentProject.string[this.id].type === 'table'"
      class="w-full flex ml-4"
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
            :class="{'!border-2': indexRow === this.tableSelectRow}">
            <button
              v-myModal="'TableRowModal' + this.id"
              @name="tableOpen"
              :class="[
                'TableRowModal' + this.id,
                {
                  'user-hover': this.$store.state.theme === 'Light',
                  'hover:bg-user-hover-dark hover:rounded': this.$store.state.theme === 'Dark',
                },
              ]"
              @click="tableOpen(indexRow, 'row')"
              class="w-4 h-full absolute left-[-18px] showBtn forAnimation">
              <svg
                :class="'TableRowModal' + this.id"
                class="hidden fill-text-passive dark:fill-black showSvg"
                viewBox="0 0 11 11"
                xmlns="http://www.w3.org/2000/svg">
                <g :class="'TableRowModal' + this.id">
                  <path
                    :class="'TableRowModal' + this.id"
                    d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
                </g>
              </svg>
            </button>

            <div
              :class="'TableRowModal' + this.id"
              v-if="tableSelect && this.tableSelectRow === indexRow"
              class="myModal top-modal left-[-1px] dark:bg-nav-bg-dark">
              <nav-card
                v-if="this.$store.state.language === 'English'"
                @basicClick="(info) => tableClick(info, 'row')"
                v-for="item in arrayRow"
                :key="item"
                :text="item"></nav-card>
              <nav-card
                v-if="this.$store.state.language === 'Russian'"
                @basicClickRu="(info) => tableClick(info, 'row')"
                v-for="item in arrayRowRu"
                :svg="item.value"
                :key="item.text"
                :text="item.text"></nav-card>
            </div>

            <td
              :style="{maxWidth: 80 / $store.state.currentProject.string[this.id].cols + 'vw'}"
              v-for="(e, indexCol) in $store.state.currentProject.string[this.id].cols"
              :class="{
                '!border-x-2 !border-x-border-active': indexCol === this.tableSelectColumn,
                '!border-t-2 !border-t-border-active': indexRow === 0 && indexCol === this.tableSelectColumn,
                '!border-b-2 !border-b-border-active': indexRow === $store.state.currentProject.string[this.id].rows - 1 && indexCol === this.tableSelectColumn,
              }"
              class="border-solid border-[1px] border-black outline-0 px-2 py-1.5 text-center min-w-24 relative">
              <button
                :class="[
                  'TableRowModal' + this.id,
                  {
                    'user-hover': this.$store.state.theme === 'Light',
                    'hover:bg-user-hover-dark hover:rounded': this.$store.state.theme === 'Dark',
                  },
                ]"
                @click="tableOpen(indexCol, 'col')"
                v-if="indexRow === 0"
                class="flex justify-center w-full h-4 absolute top-[-18px] left-0 showBtn forAnimation">
                <svg
                  :class="'TableRowModal' + this.id"
                  class="fill-text-passive dark:fill-black rotate-90 w-4 hidden showSvg"
                  viewBox="0 0 11 12"
                  xmlns="http://www.w3.org/2000/svg">
                  <g :class="'TableRowModal' + this.id">
                    <path
                      :class="'TableRowModal' + this.id"
                      d="M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z"></path>
                  </g>
                </svg>

                <div v-if="tableSelect && this.tableSelectColumn === indexCol" class="top-[17px] left-modal myModal dark:bg-nav-bg-dark">
                  <nav-card
                    v-if="this.$store.state.language === 'English'"
                    @basicClick="(info) => tableClick(info, 'col')"
                    v-for="item in arrayColumn"
                    :key="item"
                    :text="item"></nav-card>
                  <nav-card
                    v-if="this.$store.state.language === 'Russian'"
                    @basicClickRu="(info) => tableClick(info, 'col')"
                    v-for="item in arrayColumnRu"
                    :key="item.text"
                    :text="item.text"
                    :svg="item.value"></nav-card>
                </div>
              </button>

              <div
                :style="{color: $store.state.currentProject.string[this.id].Color}"
                @input="(item) => $store.commit('changeTableText', {newText: item.target.outerText, id: this.id, colIndex: indexCol, rowIndex: indexRow})"
                class="outline-0"
                contenteditable="true">
                {{ $store.state.currentProject.string[this.id].content[indexRow][indexCol] }}
              </div>
            </td>
          </tr>
        </tbody>
        <button
          :class="{'user-hover': this.$store.state.theme === 'Light', 'hover:bg-user-hover-dark hover:rounded': this.$store.state.theme === 'Dark'}"
          class="forAnimation"
          @click="this.$store.commit('changeTable', {value: 'cols', id: this.id})">
          <p class="text-xl text-text-passive dark:text-black hidden">+</p>
        </button>
        <button
          :class="{'user-hover': this.$store.state.theme === 'Light', 'hover:bg-user-hover-dark hover:rounded': this.$store.state.theme === 'Dark'}"
          class="h-4 forAnimation"
          @click="this.$store.commit('changeTable', {value: 'rows', id: this.id})">
          <p class="text-xl text-text-passive dark:text-black mt-[-8px] hidden">+</p>
        </button>
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
      arrayColumnRu: [
        {value: 'Insert Left', text: 'Подвинуть влево'},
        {value: 'Insert Right', text: 'Подвинуть вправо'},
        {value: 'Clear Contents', text: 'Отчистить содержимое'},
        {value: 'Delete', text: 'Удалить'},
      ],
      arrayRow: ['Insert Above', 'Insert Below', 'Clear Contents', 'Delete'],
      arrayRowRu: [
        {value: 'Insert Above', text: 'Подвинуть вверх'},
        {value: 'Insert Below', text: 'Подвинуть вниз'},
        {value: 'Clear Contents', text: 'Отчистить содержимое'},
        {value: 'Delete', text: 'Удалить'},
      ],
      sixPointOpen: false,
      allTypes: ['text', 'heading1', 'heading2', 'heading3', 'toggle', 'todo', 'quote', 'number', 'drop-list', 'table'],
      allTypesRu: [
        {value: 'text', text: 'Текст'},
        {value: 'heading1', text: 'Заголовок1'},
        {value: 'heading2', text: 'Заголовок2'},
        {value: 'heading3', text: 'Заголовок3'},
        {value: 'toggle', text: 'Список'},
        {value: 'todo', text: 'Список дел'},
        {value: 'number', text: 'Нумерованный'},
        {value: 'drop-list', text: 'Выпадающий'},
        {value: 'quote', text: 'Цитата'},
        {value: 'table', text: 'Таблица'},
      ],
      allColor: [
        'Transparent',
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
      allColorRu: [
        {value: 'Transparent', text: 'Прозрачный'},
        {value: 'Black', text: 'Чёрный'},
        {value: 'White', text: 'Белый'},
        {value: 'Red', text: 'Красный'},
        {value: 'Blue', text: 'Синий'},
        {value: 'Yellow', text: 'Жёлтый'},
        {value: 'Orange', text: 'Оранжевый'},
        {value: 'Pink', text: 'Розовый'},
        {value: 'Gold', text: 'Золотой'},
        {value: 'Silver', text: 'Серебренный'},
        {value: 'Brown', text: 'Коричневый'},
        {value: 'Wheat', text: 'Пшеничный'},
        {value: 'Green', text: 'Зелёный'},
        {value: 'Teal', text: 'Бирюзовый'},
        {value: 'Aqua', text: 'Аквамарин'},
        {value: 'Navy', text: 'Тёмно-Синий'},
        {value: 'Indigo', text: 'Индиго'},
        {value: 'Purple', text: 'Фиолетовый'},
        {value: 'Violet', text: 'Лиловый'},
        {value: 'Plum', text: 'Сливовый'},
        {value: 'Gray', text: 'Серый'},
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

    tableOpen(number, element) {
      if (!this.tableSelect) {
        this.tableSelect = true;
        if (element === 'row') {
          this.tableSelectColumn = null;
          this.tableSelectRow = number;
        }
        if (element === 'col') {
          this.tableSelectRow = null;
          this.tableSelectColumn = number;
        }
      } else {
        this.tableSelect = false;
        this.tableSelectRow = null;
        this.tableSelectColumn = null;
      }
    },
    tableClick(todo, type) {
      let number;
      type === 'row' ? (number = this.tableSelectRow) : (number = this.tableSelectColumn);
      if (type === 'row') {
        if (todo === 'Clear Contents') {
          this.$store.commit('clearTableRow', {newText: '', id: this.id, index: number});
        }
        if (todo === 'Delete') {
          this.$store.commit('deleteTableRow', {id: this.id, index: number});
        }
        if (todo === 'Insert Above' && number > 0) {
          this.$store.commit('aboveTableRow', {id: this.id, index: number});
        }
        if (todo === 'Insert Below') {
          this.$store.commit('belowTableRow', {id: this.id, index: number});
        }
        this.tableOpen();
        this.$store.commit('liveUpdate');
      }
      if (type === 'col') {
        if (todo === 'Clear Contents') {
          this.$store.commit('clearTableCol', {newText: '', id: this.id, index: number});
        }
        if (todo === 'Delete') {
          this.$store.commit('deleteTableCol', {id: this.id, index: number});
        }
        if (todo === 'Insert Left' && number > 0) {
          this.$store.commit('leftTableCol', {id: this.id, index: number});
        }
        if (todo === 'Insert Right') {
          this.$store.commit('rightTableCol', {id: this.id, index: number});
        }
        this.tableOpen();
        this.$store.commit('liveUpdate');
      }
    },
  },
};
</script>

<style scoped>
.forAnimation {
  &:hover svg,
  &:focus svg {
    display: block !important;
  }
}
.forAnimation {
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
@media (max-width: 840px) {
  .showBtn {
    @apply rounded bg-user-hover cursor-pointer;
  }
  .showSvg {
    display: block;
  }
}

/* after */
.textAfterEn::after {
  content: 'Write something';
}
.textAfterRu::after {
  content: 'Напишите что-нибудь';
}
.h1AfterEn::after {
  content: 'Heading1';
}
.h1AfterRu::after {
  content: 'Заголовок1';
}
.h2AfterEn::after {
  content: 'Heading2';
}
.h2AfterRu::after {
  content: 'Заголовок2';
}
.h3AfterEn::after {
  content: 'Heading3';
}
.h3AfterRu::after {
  content: 'Заголовок3';
}
.toggleAfterEn::after {
  content: 'Toggle';
}
.toggleAfterRu::after {
  content: 'Промаркированный список';
}
.doAfterEn::after {
  content: 'To-Do';
}
.doAfterRu::after {
  content: 'Список дел';
}
.quoteAfterEn::after {
  content: 'Quote';
}
.quoteAfterRu::after {
  content: 'Цитата';
}
.numbAfterEn::after {
  content: 'Number list';
}
.numbAfterRu::after {
  content: 'Пронумерованный список';
}
.dropAfterEn::after {
  content: 'Drop-down list';
}
.dropAfterRu::after {
  content: 'Выпадающий список';
}
</style>
