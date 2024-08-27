<template>
  <div class="absolute top-0 right-0 bottom-0 left-0 z-[60] bg-white p-2 dark:bg-nav-bg-dark">
    <div class="max-w-[1492px] mx-auto h-full grid grid-rows-registration">
      <!-- header -->
      <header class="flex justify-between items-center flex-nowrap fade-down">
        <div class="flex items-center flex-nowrap mt-[-5px]" :class="{shadowDark: this.theme === 'Dark'}">
          <img src="../img/logo.png" class="h-6 w-6" alt="logo" />
          <div class="action__font-light weight-500 font-semibold ml-1 mb-[-1px] text-lg cursor-default dark:text-white">Concept</div>
        </div>
        <div class="flex items-center">
          <img class="h-6 w-6 mt-[-2px]" src="../AllSvg/SelectSvg/moon.svg" alt="moon" />
          <button
            @click="changeTheme"
            :class="{'justify-start': this.theme === 'Dark', 'justify-end': this.theme === 'Light'}"
            class="h-5 w-8 border-2 border-solid rounded-full flex p-0.5 relative">
            <div class="w-3 h-3 bg-basic-button rounded-full" id="themeToggle"></div>
          </button>
          <img class="h-6 w-6" src="../AllSvg/SelectSvg/sun.svg" alt="sun" />
        </div>
      </header>

      <!-- main -->
      <main class="cursor-default flex justify-center items-center">
        <div class="flex flex-col">
          <img data-aos="fade-down" data-aos-delay="100" class="shadowImg max-h-60 max-w-80 self-center" src="../img/headingReg.png" alt="header" />
          <h1 v-if="this.language === 'English'" class="mb-1 action__font-light text-3xl text-wrap text-center">
            Concept is a purpose-built tool for planning and building any projects.
          </h1>
          <h1 v-if="this.language === 'Russian'" class="mb-1 action__font-light text-3xl text-wrap text-center">
            Concept - это специальный инструмент для планирования и создания любых проектов.
          </h1>
          <h1 v-if="this.language === 'English'" class="action__font-light mb-3 text-lg text-text-passive text-wrap text-center dark:text-text-passive">
            Meet the system for modern planning.Manage any endeavor from beginning to end.It is a workspace for notetaking, knowledge and data management, as
            well as project and task management.
          </h1>
          <h1 v-if="this.language === 'Russian'" class="action__font-light mb-3 text-lg text-text-passive text-wrap text-center dark:text-text-passive">
            Познакомьтесь с системой современного планирования. Это рабочее пространство для ведения заметок, управления знаниями и данными, а также для
            управления проектами и задачами.
          </h1>
          <div class="text-nowrap text-center mt-2">
            <button
              v-if="this.language === 'English'"
              @click="this.loginModal = true"
              class="myButton bg-nav-bg-light border border-solid border-white hover:border-basic-button text-basic-button dark:border-text-passive dark:bg-nav-bg-dark">
              Log in
            </button>
            <button
              v-if="this.language === 'Russian'"
              @click="this.loginModal = true"
              class="myButton bg-nav-bg-light border border-solid border-white hover:border-basic-button text-basic-button dark:border-text-passive dark:bg-nav-bg-dark">
              Войти
            </button>
            <button
              v-if="this.language === 'English'"
              @click="this.signModal = true"
              class="myButton bg-basic-button hover:bg-basic-button-hover text-white ml-1">
              Sign up
            </button>
            <button
              v-if="this.language === 'Russian'"
              @click="this.signModal = true"
              class="myButton bg-basic-button hover:bg-basic-button-hover text-white ml-1">
              Регистрация
            </button>
          </div>
          <div
            v-if="this.language === 'English'"
            data-aos="fade-up"
            data-aos-delay="50"
            class="dark:bg-nav-bg-dark flex gap-6 justify-center md:justify-between flex-wrap border-y-1 border-y-text-passive my-2 py-3">
            <div v-for="(item, index) in benefitsArray" class="flex items-center flex-col">
              <img :class="{invertImg: this.theme === 'Dark'}" :src="require('../img/benefits' + (index + 1) + '.png')" alt="" />
              <p class="action__font-light">{{ item.title }}</p>
              <p class="passive__font-light">{{ item.text }}</p>
            </div>
          </div>
          <div
            v-if="this.language === 'Russian'"
            data-aos="fade-up"
            data-aos-delay="50"
            class="dark:bg-nav-bg-dark flex gap-6 justify-center md:justify-between flex-wrap border-y-1 border-y-text-passive my-2 py-3">
            <div v-for="(item, index) in benefitsArrayRus" class="flex items-center flex-col">
              <img :class="{invertImg: this.theme === 'Dark'}" :src="require('../img/benefits' + (index + 1) + '.png')" alt="" />
              <p class="action__font-light">{{ item.title }}</p>
              <p class="passive__font-light">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </main>

      <!-- footer -->
      <footer class="flex justify-between items-center">
        <div v-if="this.language === 'English'" class="passive__font-light self-center cursor-default">Created by Alexey Vileiskiy</div>
        <div v-if="this.language === 'Russian'" class="passive__font-light self-center cursor-default">Создано Вилейским Алексеем</div>
        <div :class="{shadowDark: this.theme === 'Dark'}">
          <button
            @click="changeLanguage('English')"
            :class="{'!border-black dark:!border-white': this.language === 'English'}"
            class="mr-1 rounded-full h-6 w-6 dark:border-black hover:border-black border border-nav-bg-light overflow-hidden bg-white">
            <svg
              viewBox="4 4 30 28"
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#00247D"
                  d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path>
                <path
                  fill="#CF1B2B"
                  d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path>
                <path
                  fill="white"
                  d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path>
                <path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path>
              </g>
            </svg>
          </button>
          <button
            @click="changeLanguage('Russian')"
            :class="{'!border-black dark:!border-white': this.language === 'Russian'}"
            class="rounded-full h-6 w-6 dark:border-black hover:border-black border border-nav-bg-light overflow-hidden bg-white">
            <svg
              class="w-6"
              viewBox="4 4 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#CE2028" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-4h36v4z"></path>
                <path fill="#22408C" d="M0 13h36v10H0z"></path>
                <path fill="white" d="M32 5H4a4 4 0 0 0-4 4v4h36V9a4 4 0 0 0-4-4z"></path>
              </g>
            </svg>
          </button>
        </div>
      </footer>

      <LoginReg v-if="this.loginModal" @close="this.loginModal = false" />
      <signReg v-if="this.signModal" @close="this.signModal = false" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompRegistration',

  data() {
    return {
      loginModal: false,
      signModal: false,
      theme: JSON.parse(localStorage.getItem('theme')) || 'Light',
      language: JSON.parse(localStorage.getItem('language')) || 'English',
      benefitsArray: [
        {title: 'Building blocks', text: 'Many content types to communicate any idea.'},
        {title: 'Tasks and to-dos', text: 'Tackle any project, big or small.'},
        {title: 'Goals', text: 'Set objectives, get organized, and track progress.'},
      ],
      benefitsArrayRus: [
        {title: 'Составляющие компоненты', text: 'Множество типов контента для передачи любой идеи.'},
        {title: 'Многозадачность', text: 'Беритесь за любой проект, большой или маленький.'},
        {title: 'Достижения', text: 'Ставьте цели, организуйте их и отслеживайте прогресс.'},
      ],
    };
  },

  methods: {
    changeTheme() {
      const toggle = document.querySelector('#themeToggle');
      if (this.theme === 'Light') {
        toggle.classList.add('slide-left');
        this.$store.commit('setTheme', 'Dark');
        setTimeout(() => {
          this.theme = 'Dark';
          toggle.classList.remove('slide-left');
        }, 500);
      }
      if (this.theme === 'Dark') {
        toggle.classList.add('slide-right');
        this.$store.commit('setTheme', 'Light');
        setTimeout(() => {
          this.theme = 'Light';
          toggle.classList.remove('slide-right');
        }, 500);
      }
    },
    changeLanguage(value) {
      this.language = value;
      this.$store.commit('setLanguage', value);
    },
  },

  watch: {
    theme() {
      if (this.theme === 'Dark' && document.querySelector('html').classList.contains('dark') === false) {
        document.querySelector('html').classList.add('dark');
      }
      if (this.theme === 'Light' && document.querySelector('html').classList.contains('dark') === true) {
        document.querySelector('html').classList.remove('dark');
      }
    },
  },
};
</script>

<style scoped>
/* dark theme img */
.shadowImg {
  filter: drop-shadow(10px 16px 30px white);
}
.shadowDark {
  filter: drop-shadow(2px 4px 6px black);
}
.invertImg {
  filter: invert(0.5) drop-shadow(2px 4px 1px black);
}

/* slide animation */
.slide-right {
  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
.slide-left {
  -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(12px);
    transform: translateX(12px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(12px);
    transform: translateX(12px);
  }
}

@-webkit-keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-12px);
    transform: translateX(-12px);
  }
}
@keyframes slide-left {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-12px);
    transform: translateX(-12px);
  }
}
</style>
