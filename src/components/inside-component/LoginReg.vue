<template>
  <MyModal v-if="this.$store.state.language === 'English'" @close="this.$emit('close')" :heading="'Authorization'">
    <div class="border-y border-y-text-passive my-2 py-3 px-2 grid">
      <!-- Email -->
      <h4 class="action__font-light">Email:</h4>
      <MyInput :id="'email'" v-model="email" type="email" :placeholder="'email@adrees.com'" />
      <div class="passive__font-light text-exit mt-1" v-if="emailInvalid">∗email address was entered incorrectly</div>
      <!-- Password -->
      <h4 class="action__font-light mt-2">Password:</h4>
      <PasswordInput v-model="password" />
      <div class="passive__font-light text-exit mt-1" v-if="passwordInvalid">∗password was entered incorrectly</div>
      <!-- login -->
      <button @click="login" class="myButton bg-basic-button hover:bg-basic-button-hover text-white mt-3">Log in</button>
    </div>
  </MyModal>
  <MyModal v-if="this.$store.state.language === 'Russian'" @close="this.$emit('close')" :heading="'Авторизация'">
    <div class="border-y border-y-text-passive my-2 py-3 px-2 grid">
      <!-- Email -->
      <h4 class="action__font-light">Почта:</h4>
      <MyInput :id="'email'" v-model="email" type="email" :placeholder="'email@adrees.com'" />
      <div class="passive__font-light text-exit mt-1" v-if="emailInvalid">∗почтовый адрес введён не верно</div>
      <!-- Password -->
      <h4 class="action__font-light mt-2">Password:</h4>
      <PasswordInput v-model="password" />
      <div class="passive__font-light text-exit mt-1" v-if="passwordInvalid">∗пароль введён неверно</div>
      <!-- login -->
      <button @click="login" class="myButton bg-basic-button hover:bg-basic-button-hover text-white mt-3">Войти</button>
    </div>
  </MyModal>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginReg',

  data() {
    return {
      email: '',
      password: '',
      emailInvalid: false,
      passwordInvalid: false,
      continue: true,
    };
  },

  methods: {
    login() {
      axios.get('https://aa9aa081e8c8442e.mokky.dev/profiles').then((response) => {
        this.emailInvalid = false;
        this.passwordInvalid = false;
        response.data.forEach((item) => {
          if (this.continue) {
            if (item.login !== this.email && item.password === this.password) {
              this.emailInvalid = true;
            } else if (item.password !== this.password && item.login === this.email) {
              this.passwordInvalid = true;
            }
            // final
            else if (item.login === this.email && item.password === this.password) {
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
              this.$store.commit('setLoading', true);
              this.$router.push('/Home');

              axios.get('https://aa9aa081e8c8442e.mokky.dev/items?id=' + this.$store.state.id).then((result) => {
                setTimeout(() => {
                  this.$store.commit('setProjects', result.data[0].projects);
                  localStorage.setItem('projects', JSON.stringify(result.data[0].projects));
                  this.$store.commit('setLoading', false);
                }, 1000);
              });

              this.continue = false;
            }
          }
        });
      });
    },
  },
};
</script>

<style scoped></style>
