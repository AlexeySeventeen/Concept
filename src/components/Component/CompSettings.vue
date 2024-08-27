<template>
  <div class="max-w-[1064px] mx-auto">
    <ComponentHeading v-if="this.$store.state.language === 'English'" :title="'Settings'" :description="''" />
    <ComponentHeading v-if="this.$store.state.language === 'Russian'" :title="'Настройки'" :description="''" />
    <div>
      <p v-if="this.$store.state.language === 'English'" class="account passive__font-light mb-2">Account Settings</p>
      <p v-if="this.$store.state.language === 'Russian'" class="account passive__font-light mb-2">Настройки аккаунта</p>
      <div class="flex justify-between mb-2 items-center relative">
        <h3 v-if="this.$store.state.language === 'English'" class="settingText">UserName:</h3>
        <h3 v-if="this.$store.state.language === 'Russian'" class="settingText mr-11">Имя пользователя:</h3>
        <MyInput v-if="this.$store.state.language === 'English'" :disabled="true" v-model="userName" :placeholder="'Change username'" />
        <MyInput v-if="this.$store.state.language === 'Russian'" :disabled="true" v-model="userName" :placeholder="'Поменять имя пользователя'" />
        <img
          @click="($event.target.offsetParent.children[1].disabled = false), $event.target.offsetParent.children[1].focus()"
          @keydown.enter="($event.target.offsetParent.children[1].disabled = false), $event.target.offsetParent.children[1].focus()"
          tabindex="1"
          class="absolute top-4 right-3 cursor-pointer p-1"
          src="../AllSvg/MainSvg/pencil.svg"
          alt="pencil" />
      </div>
      <div class="flex justify-between mb-2 items-center relative">
        <h3 v-if="this.$store.state.language === 'English'" class="settingText">Email:</h3>
        <h3 v-if="this.$store.state.language === 'Russian'" class="settingText">Почта:</h3>
        <MyInput v-if="this.$store.state.language === 'English'" :disabled="true" v-model="login" :placeholder="'Change email'" />
        <MyInput v-if="this.$store.state.language === 'Russian'" :disabled="true" v-model="login" :placeholder="'Поменять почту'" />
        <img
          @click="($event.target.offsetParent.children[1].disabled = false), $event.target.offsetParent.children[1].focus()"
          @keydown.enter="($event.target.offsetParent.children[1].disabled = false), $event.target.offsetParent.children[1].focus()"
          tabindex="2"
          class="absolute top-4 right-3 cursor-pointer p-1"
          src="../AllSvg/MainSvg/pencil.svg"
          alt="pencil" />
      </div>
      <div class="flex justify-between mb-2 items-center relative">
        <h3 v-if="this.$store.state.language === 'English'" class="settingText">Password:</h3>
        <h3 v-if="this.$store.state.language === 'Russian'" class="settingText">Пароль:</h3>
        <MyInput v-if="this.$store.state.language === 'English'" :disabled="true" v-model="password" :placeholder="'Change password'" />
        <MyInput v-if="this.$store.state.language === 'Russian'" :disabled="true" v-model="password" :placeholder="'Поменять пароль'" />
        <img
          @click="($event.target.offsetParent.children[1].disabled = false), $event.target.offsetParent.children[1].focus()"
          @keydown.enter="($event.target.offsetParent.children[1].disabled = false), $event.target.offsetParent.children[1].focus()"
          tabindex="3"
          class="absolute top-4 right-3 cursor-pointer p-1"
          src="../AllSvg/MainSvg/pencil.svg"
          alt="pencil" />
      </div>
    </div>
    <p v-if="this.$store.state.language === 'English'" class="global passive__font-light mb-2">Global Settings</p>
    <p v-if="this.$store.state.language === 'Russian'" class="global passive__font-light mb-2">Глобальные настройки</p>
    <div class="flex justify-between mb-2">
      <h3 class="settingText" v-if="this.$store.state.language === 'English'">Theme:</h3>
      <h3 class="settingText" v-if="this.$store.state.language === 'Russian'">Тема:</h3>
      <button class="myButton flex border border-solid h-7 relative dark:bg-text-passive" @click="changeTheme">
        <transition-group name="slide-up">
          <div v-if="this.theme === 'Light'" class="top-[3px] left-[15px] flex items-center absolute">
            <p v-if="this.$store.state.language === 'English'">Light</p>
            <p v-if="this.$store.state.language === 'Russian'" class="ml-[-4px]">Светлая</p>
            <img class="h-5 w-5 ml-4" src="../AllSvg/SelectSvg/sun.svg" alt="sun" />
          </div>
          <div v-if="this.theme === 'Dark'" class="top-[3px] left-[15px] flex items-center absolute">
            <p v-if="this.$store.state.language === 'English'">Dark</p>
            <p v-if="this.$store.state.language === 'Russian'">Тёмная</p>
            <img v-if="this.$store.state.language === 'English'" class="h-5 w-5 ml-4" src="../AllSvg/SelectSvg/moon.svg" alt="moon" />
            <img v-if="this.$store.state.language === 'Russian'" class="h-5 w-5 ml-1" src="../AllSvg/SelectSvg/moon.svg" alt="moon" />
          </div>
        </transition-group>
      </button>
    </div>
    <div class="flex justify-between">
      <h3 v-if="this.$store.state.language === 'English'" class="settingText">Language:</h3>
      <h3 v-if="this.$store.state.language === 'Russian'" class="settingText">Язык:</h3>
      <button class="myButton flex border border-solid h-7 relative dark:bg-text-passive" @click="changeLanguage">
        <transition-group name="slide-up">
          <div v-if="this.language === 'Russian'" class="top-[3px] left-[15px] flex items-center absolute">
            <p class="ml-[-5px]">Русский</p>
            <img class="h-5 w-5 ml-1" src="../AllSvg/SelectSvg/rus.svg" alt="rus" />
          </div>
          <div v-if="this.language === 'English'" class="top-[3px] left-[15px] flex items-center absolute">
            <p>English</p>
            <img class="h-5 w-5 ml-1" src="../AllSvg/SelectSvg/eng.svg" alt="eng" />
          </div>
        </transition-group>
      </button>
    </div>

    <div class="flex justify-end mt-4 gap-1">
      <button v-if="this.$store.state.language === 'English'" @click="saveChanges" class="myButton bg-basic-button hover:bg-basic-button-hover text-white">
        Save Changes
      </button>
      <button v-if="this.$store.state.language === 'Russian'" @click="saveChanges" class="myButton bg-basic-button hover:bg-basic-button-hover text-white">
        Сохранить изменения
      </button>
      <button v-if="this.$store.state.language === 'English'" @click="exit" class="myButton text-exit border border-exit hover:bg-exit-hover">Exit</button>
      <button v-if="this.$store.state.language === 'Russian'" @click="exit" class="myButton text-exit border border-exit hover:bg-exit-hover">Выход</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'CompSettings',

  data() {
    return {
      theme: this.$store.state.theme,
      language: this.$store.state.language,
      login: this.$store.state.userLogin,
      password: this.$store.state.userPassword,
      userName: this.$store.state.userName,
    };
  },

  methods: {
    saveChanges() {
      this.$store.commit('setLanguage', this.language);
      this.$store.commit('setTheme', this.theme);
      this.$store.commit('setLogin', this.login);
      this.$store.commit('setPassword', this.password);
      this.$store.commit('setName', this.userName);
      localStorage.setItem('language', JSON.stringify(this.language));
      localStorage.setItem('theme', JSON.stringify(this.theme));
      localStorage.setItem('login', JSON.stringify(this.login));
      localStorage.setItem('password', JSON.stringify(this.password));
      localStorage.setItem('name', JSON.stringify(this.userName));
      axios.patch('https://aa9aa081e8c8442e.mokky.dev/profiles/' + this.$store.state.id, {
        language: this.language,
        theme: this.theme,
        login: this.login,
        password: this.password,
        name: this.userName,
      });
    },
    exit() {
      this.$store.commit('setId', '');
      this.$store.commit('setName', 'A');
      this.$store.commit('setLogin', '');
      this.$store.commit('setPassword', '');
      this.$store.commit('setProjects', {});
      this.$store.commit('setCurrentProject', null);
      localStorage.clear();
      this.$router.push('/');
    },
    changeTheme() {
      let newValue = '';
      this.theme === 'Light' ? (newValue = 'Dark') : (newValue = 'Light');
      this.theme = newValue;
      this.$store.commit('setTheme', newValue);
    },
    changeLanguage() {
      let newValue = '';
      this.language === 'English' ? (newValue = 'Russian') : (newValue = 'English');
      this.language = newValue;
      this.$store.commit('setLanguage', newValue);
    },
  },

  watch: {
    language(newValue) {
      this.$store.commit('setLanguage', newValue);
    },
    theme(newValue) {
      this.$store.commit('setTheme', newValue);
      if (newValue === 'Dark' && document.querySelector('html').classList.contains('dark') === false) {
        document.querySelector('html').classList.add('dark');
      } else {
        document.querySelector('html').classList.remove('dark');
      }
    },
  },
};
</script>

<style scoped>
.account {
  position: relative;
  margin-left: 21px;
  padding-left: 1px;
  &::before {
    content: url(../AllSvg/MainSvg/account.svg);
    height: 14px;
    width: 14px;
    position: absolute;
    left: -16px;
  }
}
.global {
  position: relative;
  margin-left: 21px;
  padding-left: 1px;
  &::before {
    content: url(../AllSvg/MainSvg/global.svg);
    height: 14px;
    width: 14px;
    position: absolute;
    left: -16px;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
