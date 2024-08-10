<template>
  <h1 class="text-center mb-2 text-3xl font-medium font-segoe">Archive</h1>
  <h1 class="text-center mt-[-8px]">The projects located here are hidden from the general view</h1>
  <div
    v-if="this.$store.getters.ArchiveProjects().length === 0"
    class="flex items-center justify-center h-3/4 text-center text-5xl text-text-passive font-medium font-segoe">
    There are no projects here yet
  </div>

  <div class="grid mx-auto gap-2 size-fit allPost mt-4">
    <HomeCard
      @click="this.$store.commit('setCurrentProject', item), $router.push('/Home/prj' + item.lastChangeSort)"
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
