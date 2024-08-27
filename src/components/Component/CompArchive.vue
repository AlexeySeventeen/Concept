<template>
  <ComponentHeading
    v-if="this.$store.state.language === 'English'"
    :title="'Archive'"
    :description="'The projects located here are hidden from the general view'" />
  <ComponentHeading
    v-if="this.$store.state.language === 'Russian'"
    :title="'Архив'"
    :description="'Проекты, расположенные здесь, скрыты из общего обозрения'" />

  <div
    v-if="this.$store.getters.ArchiveProjects().length === 0 && this.$store.state.language === 'English'"
    class="flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
    There are no projects here yet
  </div>
  <div
    v-if="this.$store.getters.ArchiveProjects().length === 0 && this.$store.state.language === 'Russian'"
    class="flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
    Здесь пока что нет проектов
  </div>

  <div class="grid mx-auto gap-2 size-fit allPost mt-4">
    <HomeCard
      class="inline-block"
      v-for="item in this.$store.getters.ArchiveProjects()"
      :key="item.title"
      :project="item" />
  </div>
</template>

<script>
export default {
  name: 'CompArchive',
};
</script>

<style scoped></style>
