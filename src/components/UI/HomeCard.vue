<template>
  <div
    @click="openPost"
    @keydown.enter="openPost"
    tabindex="1"
    :class="{'hover:border-white shadow-dark': this.$store.state.theme === 'Dark', 'hover:border-black shadow-light': this.$store.state.theme === 'Light'}"
    class="scale-up-center w-36 h-36 p-3 cursor-pointer rounded-lg border-solid border-[1px] border-border-color relative dark:bg-black dark:border-text-passive">
    <div class="h-5 w-5">{{ project.img }}</div>
    <svg
      v-if="project.isFavorite"
      class="absolute top-[4px] right-[5px]"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="red"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9996 21.0542C-8 10 5.99999 -1.99997 11.9996 5.58809C18 -1.99997 32 10 11.9996 21.0542Z" stroke="#000" stroke-width="1.8" />
    </svg>
    <svg
      v-if="project.isArchive"
      :class="{'!right-[23px]': project.isFavorite}"
      class="absolute top-[4px] right-[5px] w-6 h-5 dark:fill-text-passive dark:stroke-text-passive"
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000">
      <path
        d="M6.85665 2.30447C8.2922 2.16896 10.3981 2 12 2C13.6019 2 15.7078 2.16896 17.1433 2.30447C18.4976 2.4323 19.549 3.51015 19.6498 4.85178C19.7924 6.74918 20 9.90785 20 12.2367C20 14.022 19.8781 16.2915 19.7575 18.1035C19.697 19.0119 19.6365 19.8097 19.5911 20.3806C19.5685 20.6661 19.5496 20.8949 19.5363 21.0526L19.5209 21.234L19.5154 21.2966L19.5153 21.2976C19.5153 21.2977 19.5153 21.2977 18.7441 21.2308L19.5153 21.2976C19.4927 21.5553 19.3412 21.7845 19.1122 21.9075C18.8831 22.0305 18.6072 22.0309 18.3779 21.9085L12.1221 18.5713C12.0458 18.5307 11.9542 18.5307 11.8779 18.5713L5.62213 21.9085C5.39277 22.0309 5.11687 22.0305 4.88784 21.9075C4.65881 21.7845 4.50732 21.5554 4.48466 21.2977L5.25591 21.2308C4.48466 21.2977 4.48467 21.2978 4.48466 21.2977L4.47913 21.234L4.46371 21.0526C4.45045 20.8949 4.43154 20.6661 4.40885 20.3806C4.3635 19.8097 4.30303 19.0119 4.24255 18.1035C4.12191 16.2915 4 14.022 4 12.2367C4 9.90785 4.20763 6.74918 4.3502 4.85178C4.45102 3.51015 5.50236 2.4323 6.85665 2.30447ZM5.93179 19.9971L11.1455 17.2159C11.6791 16.9312 12.3209 16.9312 12.8545 17.2159L18.0682 19.9971C18.1101 19.4598 18.1613 18.7707 18.2124 18.0019C18.3327 16.1962 18.4516 13.9687 18.4516 12.2367C18.4516 9.97099 18.2482 6.86326 18.1057 4.96632C18.0606 4.366 17.5938 3.89237 16.9969 3.83603C15.5651 3.70088 13.5225 3.53846 12 3.53846C10.4775 3.53846 8.43487 3.70088 7.00309 3.83603C6.40624 3.89237 5.9394 4.366 5.89429 4.96632C5.75175 6.86326 5.54839 9.97099 5.54839 12.2367C5.54839 13.9687 5.66734 16.1962 5.78756 18.0019C5.83874 18.7707 5.88993 19.4598 5.93179 19.9971Z"></path>
    </svg>

    <h1 v-if="project.title.length === 0" class="w-[120px] action__font-light text-xl h-[76px] text-wrap leading-tight text-ellipsis overflow-hidden">
      Untitled
    </h1>
    <h1 v-else class="w-[120px] action__font-light text-xl h-[76px] text-wrap leading-tight text-ellipsis overflow-hidden">{{ project.title }}</h1>
    <div>
      <p v-if="this.$store.state.language === 'English'" class="passive__font-light">Last edited:</p>
      <p v-if="this.$store.state.language === 'Russian'" class="passive__font-light ml-[-6px]">Последние изменения:</p>
      <p class="passive__font-light" :class="{'ml-[-2px]': this.$store.state.language === 'Russian'}">{{ project.lastChange }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    project: Object,
  },
  methods: {
    openPost() {
      this.$store.commit('setCurrentProject', this.project);
      this.$router.push('/Home/prj' + this.project.lastChangeSort);
      localStorage.setItem('currentProject', JSON.stringify(this.project));
    },
  },
};
</script>

<style scoped>
.scale-up-center {
  -webkit-animation: scale-up-center 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-center 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.shadow-light {
  box-shadow: 2px 8px 20px -12px rgba(0, 0, 0, 0.35);
}
.shadow-dark {
  box-shadow: 2px 8px 20px -12px rgba(255, 255, 255, 0.4);
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
