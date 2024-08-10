<template>
  <div class="h-screen absolute bg-nav-bg-light z-50 showNav:relative">
    <nav v-if="!showNav" class="w-1"></nav>
    <nav v-else class="nav min-w-44 relative p-2 pb-0" id="nav">
      <!-- name -->
      <nav-name @closeNav="this.$emit('show')" :margin="this.thisMargin"></nav-name>

      <!-- basic -->
      <div class="mt-2" id="basic">
        <nav-card
          v-for="item in array"
          :key="item"
          @click="$router.push('/' + item.name)"
          @basicClick="(currentSelect) => (this.thisSelect = currentSelect)"
          class="nav-basic w-full mb-0.5 *:text-text-passive after:right-[-212px] after:top-0.5"
          :class="{'user-select': item.name == this.thisSelect}"
          :text="item.name"
          :title="item.title"></nav-card>
      </div>

      <!-- projects -->
      <div class="relative w-full flex-col flex min-w-40 px-1 py-2">
        <p class="passive__font-light leading-[0.75rem] cursor-default">Projects</p>

        <div>
          <ThreePointButton class="absolute top-2.5 right-2 z-20">
            <nav-card-select
              :text="'Sort'"
              :arraySelect="['Manual', 'Last edited']"
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
          <button class="absolute top-2 left-12">
            <svg viewBox="0 0 16 16" class="fill-text-passive hover:fill-black h-4 w-4" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path
                  d="M7.00194 10.6239C6.66861 10.8183 6.25 10.5779 6.25 10.192V5.80802C6.25 5.42212 6.66861 5.18169 7.00194 5.37613L10.7596 7.56811C11.0904 7.76105 11.0904 8.23895 10.7596 8.43189L7.00194 10.6239Z"></path>
              </g>
            </svg>
          </button>
        </div>

        <div class="mt-1 max-w-44 heightClass overflow-y-scroll overflow-x-hidden">
          <nav-post
            v-for="item in this.$store.getters.sortProjects(this.thisSort, this.thisShow)"
            @click="$store.commit('setCurrentProject', item), $router.push('/Home/prj' + item.lastChangeSort)"
            :key="item"
            :item="item"
            @basicClick="(currentSelect) => (this.thisSelect = currentSelect)"
            class="nav-basic w-full mb-0.5 *:text-text-passive after:right-[-212px] after:top-0.5"
            :class="{'user-select': item.lastChangeSort == this.thisSelect}"></nav-post>
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
      thisSelect: 'Home',
      array: [
        {name: 'Home', title: 'View recent pages and more'},
        {name: 'Search', title: 'Search and quickly jump to a page'},
        {name: 'Favorite', title: 'Place for favorite projects '},
        {name: 'Archive', title: 'Place for hidden projects'},
        {name: 'Settings', title: 'Manage your account and settings'},
      ],
      thisSort: 'Manual',
      thisShow: '10 items',
    };
  },
};
</script>

<style scoped>
.heightClass {
  height: calc(100vh - 206px);
}
</style>
