<template>
  <div class="flex">
    <div class="flex">
      <button
        v-myModal="'modalSecondToggle' + this.id"
        @name="this.sixPointOpen = false"
        @click="this.sixPointOpen ? (this.sixPointOpen = false) : (this.sixPointOpen = true)"
        :class="[
          'modalSecondToggle' + this.id,
          {
            'mt-2': this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading1',
            'mt-1.5': this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading2',
            'mt-1': this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading3',
            'user-hover': this.$store.state.theme === 'Light',
            'hover:bg-user-hover-dark hover:rounded': this.$store.state.theme === 'Dark',
          },
        ]"
        class="h-6 w-6 p-1 user-hover mr-1 relative">
        <svg :class="'modalSecondToggle' + this.id" viewBox="0 0 13 4" class="fill-text-passive hidden dark:fill-black" xmlns="http://www.w3.org/2000/svg">
          <g :class="'modalSecondToggle' + this.id">
            <path :class="'modalSecondToggle' + this.id" d="M3,1.5A1.5,1.5,0,1,1,1.5,0,1.5,1.5,0,0,1,3,1.5Z"></path>
            <path :class="'modalSecondToggle' + this.id" d="M8,1.5A1.5,1.5,0,1,1,6.5,0,1.5,1.5,0,0,1,8,1.5Z"></path>
            <path :class="'modalSecondToggle' + this.id" d="M13,1.5A1.5,1.5,0,1,1,11.5,0,1.5,1.5,0,0,1,13,1.5Z"></path>
          </g>
        </svg>
        <div v-if="sixPointOpen && this.$store.state.language === 'English'" class="myModal top-[-60px] left-[26px] dark:bg-nav-bg-dark">
          <nav-card
            class="dark:*:text-white"
            @basicClick="(info) => ((this.sixPointOpen = false), $store.commit('changeStringToggle', {info: info, id: this.id, mainId: this.mainId}))"
            v-for="item in ['Insert Above', 'Insert Below']"
            :key="item"
            :text="item"></nav-card>
          <nav-card-select
            :position="'top-[-68px] left-[72px]'"
            :text="'Turn Into'"
            :arraySelect="this.allTypes"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].type"
            @selectClick="
              (newType) => ((this.sixPointOpen = false), $store.commit('changeTypeToggle', {newText: newType, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-40px] left-[72px]'"
            :text="'Align'"
            :arraySelect="['left', 'center', 'right']"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].Align"
            @selectClick="
              (newAlign) => ((this.sixPointOpen = false), $store.commit('changeAlignToggle', {newText: newAlign, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-96px] left-[72px]'"
            :text="'Text Color'"
            :arraySelect="this.allColor"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].Color"
            @selectClick="
              (newTextColor) => ((this.sixPointOpen = false), $store.commit('changeColorToggle', {newText: newTextColor, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-98px] left-[72px]'"
            :text="'Background'"
            :arraySelect="this.allColor"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor"
            @selectClick="
              (newBgColor) => ((this.sixPointOpen = false), $store.commit('changeBgColorToggle', {newText: newBgColor, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card
            class="dark:*:text-white"
            @basicClick="(info) => ((this.sixPointOpen = false), $store.commit('changeStringToggle', {info: info, id: this.id, mainId: this.mainId}))"
            v-for="item in ['Add New String', 'Delete']"
            :key="item"
            :text="item"></nav-card>
        </div>
        <div v-if="sixPointOpen && this.$store.state.language === 'Russian'" class="myModal top-[-60px] left-[26px] dark:bg-nav-bg-dark">
          <nav-card
            class="dark:*:text-white w-[242px]"
            @basicClickRu="(info) => ((this.sixPointOpen = false), $store.commit('changeStringToggle', {info: info, id: this.id, mainId: this.mainId}))"
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
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].type"
            @selectClick="
              (newType) => ((this.sixPointOpen = false), $store.commit('changeTypeToggle', {newText: newType.value, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-40px] left-[105px]'"
            :svg="'Align'"
            :text="'Выравнивание'"
            :arraySelect="[
              {value: 'left', text: 'Лево'},
              {value: 'center', text: 'Центр'},
              {value: 'right', text: 'Право'},
            ]"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].Align"
            @selectClick="
              (newAlign) => ((this.sixPointOpen = false), $store.commit('changeAlignToggle', {newText: newAlign.value, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-96px] left-[105px]'"
            :svg="'Text Color'"
            :text="'Цвет Текста'"
            :arraySelect="this.allColorRu"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].Color"
            @selectClick="
              (newTextColor) => (
                (this.sixPointOpen = false), $store.commit('changeColorToggle', {newText: newTextColor.value, id: this.id, mainId: this.mainId})
              )
            "></nav-card-select>
          <nav-card-select
            :position="'top-[-98px] left-[105px]'"
            :svg="'Background'"
            :text="'Цвет фона'"
            :arraySelect="this.allColorRu"
            :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor"
            @selectClick="
              (newBgColor) => ((this.sixPointOpen = false), $store.commit('changeBgColorToggle', {newText: newBgColor.value, id: this.id, mainId: this.mainId}))
            "></nav-card-select>
          <nav-card
          class="dark:*:text-white w-[242px]"
          @basicClickRu="(info) => ((this.sixPointOpen = false), $store.commit('changeStringToggle', {info: info, id: this.id, mainId: this.mainId}))"
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
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'text'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
        textAfterEn: $store.state.language === 'English',
        textAfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-7"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading1'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
        h1AfterEn: $store.state.language === 'English',
        h1AfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-11 text-3xl"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading2'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
        h2AfterEn: $store.state.language === 'English',
        h2AfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-9 text-2xl"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div
      v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'heading3'"
      @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
        h3AfterEn: $store.state.language === 'English',
        h3AfterRu: $store.state.language === 'Russian',
        'after:text-black': $store.state.theme === 'Dark',
        'after:text-text-passive': $store.state.theme === 'Light',
      }"
      class="outline-0 w-full min-h-7 text-xl"
      contenteditable="true">
      {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'toggle'" class="relative w-[98%] min-h-7">
      <p class="absolute top-[-1px]">●</p>
      <div
        @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
          toggleAfterEn: $store.state.language === 'English',
          toggleAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 outline-0"
        contenteditable="true">
        {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
      </div>
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'todo'" class="relative w-[98%] min-h-7">
      <input
        :checked="this.$store.state.currentProject.string[this.mainId].content[this.id].toDoActieve"
        type="checkbox"
        class="absolute top-1.5"
        @input="
          this.$store.commit('changeToDoToggle', {
            id: this.id,
            value: !this.$store.state.currentProject.string[this.mainId].content[this.id].toDoActieve,
            mainId: this.mainId,
          })
        " />
      <div
        @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
          doAfterEn: $store.state.language === 'English',
          doAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 outline-0 decoration-2"
        contenteditable="true">
        {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
      </div>
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'quote'" class="relative w-[98%] min-h-7">
      <div class="absolute h-full w-1 bg-black"></div>
      <div
        @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
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
          quoteAfterEn: $store.state.language === 'English',
          quoteAfterRu: $store.state.language === 'Russian',
          'after:text-black': $store.state.theme === 'Dark',
          'after:text-text-passive': $store.state.theme === 'Light',
        }"
        class="ml-4 text-lg outline-0 after:content-['Empty_quote'] after:text-text-passive decoration-2"
        contenteditable="true">
        {{ this.$store.state.currentProject.string[this.mainId].content[this.id].content }}
      </div>
    </div>

    <div v-if="this.$store.state.currentProject.string[this.mainId].content[this.id].type === 'number'" class="w-[98%] min-h-7">
      <div
        class="relative"
        :style="{
          color: this.$store.state.currentProject.string[this.mainId].content[this.id].Color,
          backgroundColor: this.$store.state.currentProject.string[this.mainId].content[this.id].BgColor,
        }">
        <div class="absolute top-0.5">{{ this.numberForList }}</div>
        <div
          @input="(item) => $store.commit('changeTextToggle', {newText: item.target.outerText, id: this.id, mainId: this.mainId})"
          :class="{
            'after:block': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length === 0,
            'after:hidden': this.$store.state.currentProject.string[this.mainId].content[this.id].content.length > 0,
            'text-left': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'left',
            'text-center': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'center',
            'text-right': this.$store.state.currentProject.string[this.mainId].content[this.id].Align === 'right',
            numbAfterEn: $store.state.language === 'English',
            numbAfterRu: $store.state.language === 'Russian',
            'after:text-black': $store.state.theme === 'Dark',
            'after:text-text-passive': $store.state.theme === 'Light',
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
      allTypesRu: [
        {value: 'text', text: 'Текст'},
        {value: 'heading1', text: 'Заголовок1'},
        {value: 'heading2', text: 'Заголовок2'},
        {value: 'heading3', text: 'Заголовок3'},
        {value: 'toggle', text: 'Список'},
        {value: 'todo', text: 'Список дел'},
        {value: 'number', text: 'Нумерованный'},
        {value: 'quote', text: 'Цитата'},
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
