<template>
  <div class="max-w-[1064px] mx-auto">
    <ComponentHeading v-if="this.$store.state.language === 'English'" :title="'Search'" :description="'Search among all your posts'" />
    <ComponentHeading v-if="this.$store.state.language === 'Russian'" :title="'Поиск'" :description="'Поиск среди всех ваших постов'" />
    <MyInput v-if="this.$store.state.language === 'English'" :placeholder="'Search..'" v-model="search" />
    <MyInput v-if="this.$store.state.language === 'Russian'" :placeholder="'Поиск..'" v-model="search" />

    <div class="flex justify-end gap-2 mt-1">
      <MyCheckbox v-if="this.$store.state.language === 'English'" :title="'by title'" v-model="title" />
      <MyCheckbox v-if="this.$store.state.language === 'Russian'" :title="'по названию'" v-model="title" />
      <MyCheckbox v-if="this.$store.state.language === 'English'" :title="'by content'" v-model="content" />
      <MyCheckbox v-if="this.$store.state.language === 'Russian'" :title="'по содержимому'" v-model="content" />
    </div>

    <div class="grid mx-auto gap-2 size-fit allPost mt-4">
      <TransitionGroup name="post-list">
        <HomeCard
          class="inline-block"
          v-for="item in this.$store.getters.SearchAll(
            this.$store.getters.SearchTitle(this.search.toLowerCase()),
            this.$store.getters.SearchContent(this.search.toLowerCase()),
            this.title,
            this.content
          )"
          :key="item.title"
          :project="item" />
      </TransitionGroup>
    </div>

    <div
      v-if="this.$store.state.projects.length === 0 && this.$store.state.language === 'English'"
      class="mt-4 flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
      There are no projects here yet
    </div>
    <div
      v-if="this.$store.state.projects.length === 0 && this.$store.state.language === 'Russian'"
      class="mt-4 flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
      Здесь пока что нет проектов
    </div>

    <div
      v-if="showEmpty && this.$store.state.language === 'English'"
      class="mt-4 flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
      There are no projects for your request
    </div>
    <div
      v-if="showEmpty && this.$store.state.language === 'Russian'"
      class="mt-4 flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
      По вашему запросу нет проектов
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompSearch',

  data() {
    return {
      title: true,
      content: true,
      search: '',
      showEmpty: false,
    };
  },

  watch: {
    search() {
      if (
        this.$store.getters.SearchAll(
          this.$store.getters.SearchTitle(this.search.toLowerCase()),
          this.$store.getters.SearchContent(this.search.toLowerCase()),
          this.title,
          this.content
        ).size === 0
      ) {
        this.showEmpty = true;
      } else {
        this.showEmpty = false;
      }
    },
  },
};
</script>

<style scoped>
/* animation */
.post-list-move {
  transition: all 0.8s ease;
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
