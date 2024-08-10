<template>
  <div class="h-full w-full p-8 overflow-x-scroll">
    <div>
      <h1 v-if="currentHour >= 4 && currentHour < 11" class="text-center mt-[-30px] text-3xl font-medium font-segoe">
        Good morning, {{ $store.state.userName }}
      </h1>
      <h1 v-if="currentHour >= 11 && currentHour < 17" class="text-center mt-[-30px] text-3xl font-medium font-segoe">
        Good afternoon, {{ $store.state.userName }}
      </h1>
      <h1 v-if="currentHour >= 17 && currentHour < 22" class="text-center mt-[-30px] text-3xl font-medium font-segoe">
        Good evening, {{ $store.state.userName }}
      </h1>
      <h1 v-if="currentHour >= 22 || currentHour < 4" class="text-center mt-[-30px] text-3xl font-medium font-segoe">
        Good night, {{ $store.state.userName }}
      </h1>

      <div class="max-w-[1064px] mx-auto">
        <p class="recently passive__font-light mb-2">Recently visited</p>
        <div class="flex gap-2 overflow-y-scroll">
          <HomeCard
            v-for="item in this.$store.getters.sortProjects('Last edited', '7 items')"
            @click="$store.commit('setCurrentProject', item), $router.push('/Home/prj' + item.lastChangeSort)"
            class="inline-block"
            :key="item.title"
            :project="item" />
        </div>

        <button
          @click="createNewPost"
          class="flex justify-center w-full my-2.5 py-1.5 hover:bg-user-hover hover:cursor-pointer passive__font-light text-lg border-y border-solid border-border-color">
          Create new project
          <img src="../AllSvg/MainSvg/create-new.svg" alt="+" class="w-5 h-[22px] mt-[5px] ml-1" />
        </button>

        <p class="all passive__font-light pb-2">All projects</p>
        <div class="grid mx-auto gap-2 size-fit allPost">
          <HomeCard
            @click="this.$store.commit('setCurrentProject', item), $router.push('/Home/prj' + item.lastChangeSort)"
            class="inline-block"
            v-for="item in this.$store.getters.notArchive()"
            :key="item.title"
            :project="item" />
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
    projects: Array,
  },

  methods: {
    createNewPost() {
      const date = new Date().toString();
      const dateArray = date.split(' ').slice(1, 5);
      this.currentDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}, ${dateArray[3]}`;
      const emptyObject = {
        title: '',
        lastChange: this.currentDate,
        isFavorite: false,
        isArchive: false,
        lastChangeSort: Date.now(),
        img: '📝',
        string: [{type: 'text', content: '', Align: 'left', Color: 'Black', BgColor: 'White'}],
      };
      this.$store.commit('createNewPost', emptyObject);
      this.$store.commit('setCurrentProject', emptyObject);
      axios.patch('https://aa9aa081e8c8442e.mokky.dev/items/' + this.$store.state.id, {
        projects: this.$store.state.projects,
      });
      this.$router.push('/Home/prj' + emptyObject.lastChangeSort);
    },
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
    border: 4px solid white;
  }
}
</style>
