<template>
  <div class="h-screen absolute bg-nav-bg-light z-50 showNav:relative dark:bg-black">
    <nav data-aos="fade-right" v-if="showNav" class="nav min-w-44 relative p-2 pb-0" id="nav">
      <!-- name -->
      <nav-name @closeNav="this.$emit('show')"></nav-name>

      <!-- basic -->
      <div class="mt-2" id="basic" v-if="this.$store.state.language === 'English'">
        <nav-card
          v-for="item in array"
          :key="item.name"
          @click="$router.push('/' + item.name)"
          class="nav-basic w-full mb-0.5 after:right-[-240px] after:top-0.5"
          :class="{'user-select *:text-black dark:user-select-dark dark:*:text-white': '/' + item.name == this.thisSelect}"
          :text="item.name"
          :title="item.title"></nav-card>
      </div>
      <div class="mt-2" id="basic" v-if="this.$store.state.language === 'Russian'">
        <nav-card
          v-for="item in arrayRu"
          :key="item.name"
          @click="$router.push('/' + item.value)"
          class="nav-basic w-full mb-0.5 after:right-[-240px] after:top-0.5"
          :class="{'user-select *:text-black dark:user-select-dark dark:*:text-white': '/' + item.name == this.thisSelect}"
          :text="item.text"
          :svg="item.value"
          :title="item.title"></nav-card>
      </div>

      <!-- projects -->
      <div class="relative w-full flex-col flex min-w-40 px-1 py-2">
        <p v-if="this.$store.state.language === 'English'" class="passive__font-light leading-[0.75rem] cursor-default">Projects</p>
        <p v-if="this.$store.state.language === 'Russian'" class="passive__font-light leading-[0.75rem] cursor-default">Проекты</p>

        <div class="absolute top-0 right-0 bottom-0 left-0" v-if="this.$store.state.language === 'English'">
          <ThreePointButton v-myModal="'modalFirst'" class="modalFirst absolute top-2.5 right-2 z-20">
            <nav-card-select
              :text="'Sort'"
              :arraySelect="['Manual', 'Last edit']"
              :checked="this.thisSort"
              @selectClick="(item) => (this.thisSort = item)"
              :position="'top-[-24px] left-[72px]'"></nav-card-select>
            <nav-card-select
              :text="'Show'"
              :arraySelect="['5 items', '10 items', '15 items', 'All']"
              :checked="this.thisShow"
              @selectClick="(item) => (this.thisShow = item)"
              :position="'top-[-45px] left-[72px]'"></nav-card-select>
          </ThreePointButton>
          <button @click="openListFn" class="absolute top-2 left-12">
            <svg
              id="svgArrow"
              viewBox="0 0 16 16"
              :class="{
                '!mt-[-1px]': this.openList,
                'hover:fill-black': this.$store.state.theme === 'Light',
                'hover:fill-white': this.$store.state.theme === 'Dark',
              }"
              class="rotate-90 fill-text-passive h-4 w-4"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
              </g>
            </svg>
          </button>
        </div>

        <div class="absolute top-0 right-0 bottom-0 left-0" v-if="this.$store.state.language === 'Russian'">
          <ThreePointButton v-myModal="'modalFirst'" class="modalFirst absolute top-2.5 right-2 z-20">
            <nav-card-select
              :svg="'Sort'"
              :text="'Сортировать по'"
              :arraySelect="[
                {value: 'Manual', text: 'Дате создания'},
                {value: 'Last edit', text: 'Дате изменений'},
              ]"
              :checked="this.thisSort"
              @selectClick="(item) => ((this.thisSort = item.value), (this.thisSortRu = item.text))"
              :position="'top-[-24px] left-[105px]'"></nav-card-select>
            <nav-card-select
              :svg="'Show'"
              :text="'Отображать'"
              :arraySelect="[
                {value: '5 items', text: '5 проектов'},
                {value: '10 items', text: '10 проектов'},
                {value: '15 items', text: '15 проектов'},
                {value: 'All', text: 'Всё'},
              ]"
              :checked="this.thisShow"
              @selectClick="(item) => ((this.thisShow = item.value), (this.thisShowRu = item.text))"
              :position="'top-[-45px] left-[105px]'"></nav-card-select>
          </ThreePointButton>
          <button @click="openListFn" class="absolute top-2 left-12">
            <svg
              id="svgArrow"
              viewBox="0 0 16 16"
              :class="{
                '!mt-[-1px]': this.openList,
                'hover:fill-black': this.$store.state.theme === 'Light',
                'hover:fill-white': this.$store.state.theme === 'Dark',
              }"
              class="rotate-90 fill-text-passive h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
              </g>
            </svg>
          </button>
        </div>

        <div v-if="openList" class="mt-1 max-w-44 heightClass overflow-y-scroll overflow-x-hidden">
          <TransitionGroup name="post-list">
            <nav-post
              v-for="item in this.$store.getters.sortProjects(this.thisSort, this.thisShow)"
              :key="item"
              @click="$store.commit('setCurrentProject', item), $router.push('/Home/prj' + item.lastChangeSort)"
              :item="item"
              class="nav-basic w-full mb-0.5 after:right-[-287px] after:top-0.5"
              :class="{'user-select *:text-black dark:user-select-dark dark:*:text-white': '/Home/prj' + item.lastChangeSort == this.thisSelect}">
            </nav-post>
          </TransitionGroup>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',

  props: {
    showNav: Boolean,
  },

  data() {
    return {
      openList: true,
      thisSelect: '',
      array: [
        {name: 'Home', title: 'View last modified and all projects'},
        {name: 'Search', title: 'Search and quickly jump to a project'},
        {name: 'Favorite', title: 'Place for favorite projects '},
        {name: 'Archive', title: 'Place for hidden projects'},
        {name: 'Settings', title: 'Manage your account and settings'},
      ],
      arrayRu: [
        {value: 'Home', text: 'Главная', title: 'Просмотр проектов'},
        {value: 'Search', text: 'Поиск', title: 'Поиск и быстрый переход к проекту'},
        {value: 'Favorite', text: 'Избранное', title: 'Место для избранных проектов'},
        {value: 'Archive', text: 'Архив', title: 'Место для скрытых проектов'},
        {value: 'Settings', text: 'Настройки', title: 'Управляйте своей учетной записью'},
      ],
      thisSort: 'Manual',
      thisSortRu: 'Дате создания',
      thisShow: 'All',
      thisShowRu: 'Всё',
    };
  },

  methods: {
    openListFn() {
      this.openList ? (this.openList = false) : (this.openList = true);

      const svg = document.querySelector('#svgArrow');

      if (this.openList) {
        svg.style.WebkitTransitionDuration = '0.5s';
        svg.style.transform = 'rotate(90deg)';
      } else {
        svg.style.WebkitTransitionDuration = '0.5s';
        svg.style.transform = 'rotate(0deg)';
      }
    },
  },

  watch: {
    '$route.path'(link) {
      this.thisSelect = link;
    },
  },
};
</script>

<style scoped>
.heightClass {
  height: 65vh;
}

/* animation */
.post-list-move {
  transition: all 0.5s ease;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
