<template>
  <MyModal v-if="this.$store.state.language === 'English'" @close="this.$emit('close')" :heading="'Registration'">
    <div class="border-y border-y-text-passive my-2 py-3 px-2 grid">
      <!-- UserName -->
      <h4 class="action__font-light">User name:</h4>
      <MyInput v-model="fullName" type="text" :placeholder="'John Doe'" />
      <div class="passive__font-light text-exit mt-1" v-if="!filledFullName">∗this field is not filled in</div>
      <!-- Email -->
      <h4 class="action__font-light mt-2">Email:</h4>
      <MyInput :id="'email'" v-model="email" type="email" :placeholder="'email@adrees.com'" />
      <div class="passive__font-light text-exit mt-1" v-if="!emailValid">∗email address was entered incorrectly</div>
      <!-- Password -->
      <h4 class="action__font-light mt-2">Password:</h4>
      <PasswordInput v-model="password" />
      <div class="passive__font-light text-exit mt-1" v-if="!passwordBigLetter">∗password must contain at least one uppercase English letters</div>
      <div class="passive__font-light text-exit mt-1" v-if="!passwordLength">∗password must contain at least 5 characters</div>
      <div class="passive__font-light text-exit mt-1" v-if="!passwordNumber">∗password must contain at least one number</div>
      <!-- Repeat password -->
      <h4 class="action__font-light mt-2">Repeat password:</h4>
      <PasswordInput v-model="repeatPassword" />
      <div class="passive__font-light text-exit mt-1" v-if="!passwordsIdentical">∗password do not match</div>
      <!-- sign up -->
      <button
        @click="this.registration"
        class="myButton bg-white border border-solid border-white hover:border-basic-button text-basic-button mt-3 dark:border-text-passive dark:bg-nav-bg-dark">
        Sign up
      </button>
    </div>
  </MyModal>
  <MyModal v-if="this.$store.state.language === 'Russian'" @close="this.$emit('close')" :heading="'Регистрация'">
    <div class="border-y border-y-text-passive my-2 py-3 px-2 grid">
      <!-- UserName -->
      <h4 class="action__font-light">Имя пользователя:</h4>
      <MyInput v-model="fullName" type="text" :placeholder="'Иван Иванов'" />
      <div class="passive__font-light text-exit mt-1" v-if="!filledFullName">∗это поле должно быть заполнено</div>
      <!-- Email -->
      <h4 class="action__font-light mt-2">Почта:</h4>
      <MyInput :id="'email'" v-model="email" type="email" :placeholder="'email@adrees.com'" />
      <div class="passive__font-light text-exit mt-1" v-if="!emailValid">∗почтовый адрес введён не верно</div>
      <!-- Password -->
      <h4 class="action__font-light mt-2">Пароль:</h4>
      <PasswordInput v-model="password" />
      <div class="passive__font-light text-exit mt-1" v-if="!passwordBigLetter">∗пароль должен содержать хотя бы одну английскую заглавную букву</div>
      <div class="passive__font-light text-exit mt-1" v-if="!passwordLength">∗пароль должен содержать не менее 5 символов</div>
      <div class="passive__font-light text-exit mt-1" v-if="!passwordNumber">∗пароль должен содержать хотя бы одно число</div>
      <!-- Repeat password -->
      <h4 class="action__font-light mt-2">Повторите пароль:</h4>
      <PasswordInput v-model="repeatPassword" />
      <div class="passive__font-light text-exit mt-1" v-if="!passwordsIdentical">∗пароли не совпадают</div>
      <!-- sign up -->
      <button
        @click="this.registration"
        class="myButton bg-white border border-solid border-white hover:border-basic-button text-basic-button mt-3 dark:border-text-passive dark:bg-nav-bg-dark">
        Зарегистрироваться
      </button>
    </div>
  </MyModal>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignReg',

  data() {
    return {
      email: '',
      fullName: '',
      password: '',
      repeatPassword: '',

      passwordsIdentical: true,
      passwordLength: true,
      passwordBigLetter: true,
      passwordNumber: true,

      filledFullName: true,

      emailValid: true,

      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    };
  },

  methods: {
    registration() {
      localStorage.clear();
      this.validationPassword();
      this.filledFullNameFn();
      this.emailCheck();

      if (
        this.passwordsIdentical === true &&
        this.passwordLength === true &&
        this.passwordBigLetter === true &&
        this.passwordNumber === true &&
        this.filledFullName === true &&
        this.emailValid === true
      ) {
        axios
          .post('https://aa9aa081e8c8442e.mokky.dev/profiles', {
            login: this.email,
            password: this.password,
            name: this.fullName,
            language: this.$store.state.language,
            theme: this.$store.state.theme,
          })
          .then(() => {
            axios.get('https://aa9aa081e8c8442e.mokky.dev/profiles').then((response) => {
              const item = response.data.pop();

              this.$store.commit('setId', item.id);
              localStorage.setItem('id', JSON.stringify(item.id));
              this.$store.commit('setName', item.name);
              localStorage.setItem('name', JSON.stringify(item.name));
              this.$store.commit('setLogin', item.login);
              localStorage.setItem('login', JSON.stringify(item.login));
              this.$store.commit('setPassword', item.password);
              localStorage.setItem('password', JSON.stringify(item.password));
              this.$store.commit('setTheme', item.theme);
              localStorage.setItem('theme', JSON.stringify(item.theme));
              this.$store.commit('setLanguage', item.language);
              localStorage.setItem('language', JSON.stringify(item.language));
            });
          })
          .then(() => {
            this.$router.push('/Home');
            this.$store.commit('setLoading', true);
            setTimeout(() => {
              const date = new Date().toString();
              const dateArray = date.split(' ').slice(1, 5);
              this.currentDate = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}, ${dateArray[3]}`;
              let thisColor = '';
              this.$store.state.theme === 'Light' ? (thisColor = 'Black') : (thisColor = 'White');
              const emptyObject = {
                title: 'My first project',
                lastChange: this.currentDate,
                isFavorite: false,
                isArchive: false,
                lastChangeSort: Date.now(),
                img: '📝',
                string: [{type: 'text', content: '', Align: 'left', Color: thisColor, BgColor: 'Transparent'}],
              };

              this.$store.commit('setProjects', [emptyObject]);
              localStorage.setItem('projects', JSON.stringify(this.$store.state.projects));
              this.$store.commit('setLoading', false);
            }, 1000);

            axios.post('https://aa9aa081e8c8442e.mokky.dev/items', {
              projects: this.$store.state.projects,
            });
          });
      }
    },

    validationPassword() {
      this.passwordsIdentical = true;
      this.passwordLength = true;
      this.passwordNumber = true;
      this.passwordBigLetter = true;

      const arrayPassword = this.password.split('');
      const numb = [];
      const letter = [];

      if (this.repeatPassword !== this.password) {
        this.passwordsIdentical = false;
      }
      if (this.password.length < 5) {
        this.passwordLength = false;
      }

      arrayPassword.forEach((symbol) => {
        if (this.numbers.includes(symbol)) {
          numb.push(symbol);
        }
        if (this.letters.includes(symbol)) {
          letter.push(symbol);
        }
      });

      if (numb.length === 0) {
        this.passwordNumber = false;
      }
      if (letter.length < 1) {
        this.passwordBigLetter = false;
      }
    },

    filledFullNameFn() {
      this.filledFullName = true;

      if (this.fullName.length === 0) {
        this.filledFullName = false;
      }
    },

    emailCheck() {
      this.emailValid = true;

      const emailArray = this.email.split('');

      if (!emailArray.includes('@')) {
        this.emailValid = false;
        return;
      }

      if (emailArray.slice(0, emailArray.indexOf('@')).length === 0) {
        this.emailValid = false;
        return;
      }

      if (emailArray[emailArray.length - 3] === '.' || emailArray[emailArray.length - 4] === '.') {
        this.emailValid = true;
      } else {
        this.emailValid = false;
      }
    },
  },
};
</script>

<style scoped></style>
