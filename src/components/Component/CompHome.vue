<template>
  <div
    class="h-full w-full p-8 overflow-x-scroll"
    :class="{
      '!flex !items-center !justify-center': this.$store.state.isLoading,
      darkScroll: this.$store.state.theme === 'Dark',
      lightScroll: this.$store.state.theme === 'Light',
    }">
    <div v-if="this.$store.state.isLoading" class="loader"></div>

    <div v-else>
      <ComponentHeading
        v-if="this.currentHour >= 4 && this.currentHour < 11 && this.$store.state.language === 'English'"
        :title="'Good morning, ' + this.$store.state.userName"
        :description="''" />
      <ComponentHeading
        v-if="this.currentHour >= 11 && this.currentHour < 17 && this.$store.state.language === 'English'"
        :title="'Good afternoon, ' + this.$store.state.userName"
        :description="''" />
      <ComponentHeading
        v-if="this.currentHour >= 17 && this.currentHour < 22 && this.$store.state.language === 'English'"
        :title="'Good evening, ' + this.$store.state.userName"
        :description="''" />
      <ComponentHeading
        v-if="(this.currentHour >= 22 && this.$store.state.language === 'English') || (this.currentHour < 4 && this.$store.state.language === 'English')"
        :title="'Good night, ' + this.$store.state.userName"
        :description="''" />

      <ComponentHeading
        v-if="this.currentHour >= 4 && this.currentHour < 11 && this.$store.state.language === 'Russian'"
        :title="'Доброе утро, ' + this.$store.state.userName"
        :description="''" />
      <ComponentHeading
        v-if="this.currentHour >= 11 && this.currentHour < 17 && this.$store.state.language === 'Russian'"
        :title="'Добрый день, ' + this.$store.state.userName"
        :description="''" />
      <ComponentHeading
        v-if="this.currentHour >= 17 && this.currentHour < 22 && this.$store.state.language === 'Russian'"
        :title="'Добрый вечер, ' + this.$store.state.userName"
        :description="''" />
      <ComponentHeading
        v-if="(this.currentHour >= 22 && this.$store.state.language === 'Russian') || (this.currentHour < 4 && this.$store.state.language === 'Russian')"
        :title="'Доброй ночи, ' + this.$store.state.userName"
        :description="''" />

      <div class="max-w-[1064px] mx-auto">
        <p v-if="this.$store.state.projects.length > 0 && this.$store.state.language === 'English'" class="recently passive__font-light mb-2">Last modified</p>
        <p v-if="this.$store.state.projects.length > 0 && this.$store.state.language === 'Russian'" class="recently passive__font-light mb-2">
          Последние изменённые
        </p>
        <div class="flex gap-2 overflow-y-scroll">
          <HomeCard
            v-for="item in this.$store.getters.sortProjects('Last edit', '7 items')"
            class="inline-block focus-visible:!border focus-visible:!border-white"
            :key="item.title"
            :project="item" />
        </div>

        <button
          @click="createNewPost"
          :class="{'hover:bg-user-hover': this.$store.state.theme === 'Light', 'hover:bg-user-hover-dark': this.$store.state.theme === 'Dark'}"
          class="flex justify-center w-full my-2.5 py-1.5 hover:cursor-pointer passive__font-light text-lg border-y border-solid border-border-color dark:border-text-passive">
          <p v-if="this.$store.state.language === 'English'">Create new project</p>
          <p v-if="this.$store.state.language === 'Russian'">Создать новый проект</p>
          <img src="../AllSvg/MainSvg/create-new.svg" alt="+" class="w-5 h-[22px] mt-[5px] ml-1" />
        </button>

        <p v-if="this.$store.state.language === 'English'" class="all passive__font-light pb-2">All projects</p>
        <p v-if="this.$store.state.language === 'Russian'" class="all passive__font-light pb-2">Все проекты</p>

        <div class="grid mx-auto gap-2 size-fit allPost" v-if="this.$store.state.projects.length > 0">
          <HomeCard class="inline-block" v-for="item in this.$store.getters.notArchive()" :key="item.title" :project="item" />
        </div>

        <div
          v-else-if="this.$store.state.language === 'English'"
          class="mt-4 flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
          There are no projects here yet
        </div>
        <div v-else class="mt-4 flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
          Здесь пока что нет проектов
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CompHome',
  data() {
    return {
      currentHour: new Date().getHours(),
      currentDate: null,
    };
  },

  props: {
    showNav: Boolean,
  },

  methods: {
    createNewPost() {
      const date = new Date().toString();
      const dateArray = date.split(' ').slice(1, 5);
      this.currentDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}, ${dateArray[3]}`;
      let thisColor = '';
      this.$store.state.theme === 'Light' ? (thisColor = 'Black') : (thisColor = 'White');
      const emptyObject = {
        title: '',
        lastChange: this.currentDate,
        isFavorite: false,
        isArchive: false,
        lastChangeSort: Date.now(),
        img: '📝',
        string: [{type: 'text', content: '', Align: 'left', Color: thisColor, BgColor: 'Transparent'}],
      };
      this.$store.commit('createNewPost', emptyObject);
      localStorage.setItem('projects', JSON.stringify(this.$store.state.projects));
      this.$store.commit('setCurrentProject', emptyObject);
      localStorage.setItem('currentProject', JSON.stringify(this.$store.state.currentProject));
      axios.patch('https://aa9aa081e8c8442e.mokky.dev/items/' + this.$store.state.id, {
        projects: this.$store.state.projects,
      });
      this.$router.push('/Home/prj' + emptyObject.lastChangeSort);
    },
  },

  mounted() {
    if (this.$store.state.theme === 'Dark' && document.querySelector('html').classList.contains('dark') === false) {
      document.querySelector('html').classList.add('dark');
    }
    if (this.$store.state.theme === 'Light' && document.querySelector('html').classList.contains('dark') === true) {
      document.querySelector('html').classList.remove('dark');
    }
  },
};
</script>

<style scoped>
.recently {
  position: relative;
  margin-left: 20px;
  &::before {
    content: url(../AllSvg/MainSvg/recently.svg);
    height: 14px;
    width: 14px;
    position: absolute;
    left: -16px;
  }
}
.all {
  position: relative;
  margin-left: 21px;
  padding-left: 1px;
  &::before {
    content: url(../AllSvg/MainSvg/all.svg);
    height: 14px;
    width: 14px;
    position: absolute;
    left: -16px;
  }
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
    border: 4px solid #1e2025;
  }
}
.darkScroll {
  &::-webkit-scrollbar-thumb {
    border: 4px solid #1e2025;
  }
}
.overflow-x-scroll.whiteScroll {
  &::-webkit-scrollbar {
    display: block;
    width: 12px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }
}
.lightScroll {
  &::-webkit-scrollbar-thumb {
    border: 4px solid white;
  }
}

.loader {
  width: 65px;
  aspect-ratio: 1;
  position: relative;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  border-radius: 50px;
  box-shadow: 0 0 0 3px inset #24a0ed;
  animation: l4 3s infinite;
}
.loader:after {
  animation-delay: -1.25s;
}
@keyframes l4 {
  0% {
    inset: 0 35px 35px 0;
  }
  12.5% {
    inset: 0 35px 0 0;
  }
  25% {
    inset: 35px 35px 0 0;
  }
  37.5% {
    inset: 35px 0 0 0;
  }
  50% {
    inset: 35px 0 0 35px;
  }
  62.5% {
    inset: 0 0 0 35px;
  }
  75% {
    inset: 0 0 35px 35px;
  }
  87.5% {
    inset: 0 0 35px 0;
  }
  100% {
    inset: 0 35px 35px 0;
  }
}
</style>
