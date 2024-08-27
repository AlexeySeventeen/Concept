<template>
  <ComponentHeading
    v-if="this.$store.state.language === 'English'"
    :title="'Favorite'"
    :description="'Your favorite projects are stored here for quick access'" />
  <ComponentHeading
    v-if="this.$store.state.language === 'Russian'"
    :title="'Избранное'"
    :description="'Ваши любимые проекты хранятся здесь для быстрого доступа'" />

  <div
    v-if="this.$store.getters.FavoriteProjects().length === 0 && this.$store.state.language === 'English'"
    class="flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
    There are no projects here yet
  </div>
  <div
    v-if="this.$store.getters.FavoriteProjects().length === 0 && this.$store.state.language === 'Russian'"
    class="flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
    Здесь пока что нет проектов
  </div>
  <div class="grid mx-auto gap-2 size-fit allPost mt-4">
    <HomeCard class="inline-block" v-for="item in this.$store.getters.FavoriteProjects()" :key="item.title" :project="item" />
  </div>
</template>

<script>
export default {
  name: 'CompFavorite',
};
</script>

<style scoped></style>
