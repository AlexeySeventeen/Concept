<template>
  <div class="password__wrapper">
    <MyInput class="pr-9" v-model="password" type="password" :placeholder="'•••••••••'" />
    <button @click="showPassword($event)" id="btnEye">
      <img class="open-eye" src="../AllSvg/eye-open.svg" alt="show password" />
      <img class="close-eye" src="../AllSvg/eye-close.svg" alt="show password" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PasswordInput',

  data() {
    return {
      password: this.modelValue,
    };
  },

  props: {
    modelValue: String,
  },

  methods: {
    showPassword(btn) {
      let thisBtn;
      if (btn.target.offsetParent.localName === 'button') {
        thisBtn = btn.target.offsetParent;
      } else {
        thisBtn = btn.target;
      }
      const input = thisBtn.offsetParent.querySelector('input');
      thisBtn.classList.toggle('open');
      if (thisBtn.classList.value === 'open') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
      input.focus();
    },
    InputUpdate(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },

  watch: {
    password(newValue) {
      this.$emit('update:modelValue', newValue);
    },
  },
};
</script>

<style scoped>
.password__wrapper {
  position: relative;

  & button {
    width: 20px;
    height: 20px;
    padding: 0;
    position: absolute;
    top: 18px;
    right: 10px;
    border: 0;
    background-color: transparent;
    &.open {
      top: 15px;
      right: 9px;
      width: 21px;
      height: 21px;
    }
    &.open .open-eye {
      display: none;
    }
    &.open .close-eye {
      display: inline-block;
    }
  }
}
.close-eye {
  display: none;
}
</style>
