<template>
  <div class="modal__wrapper" @click="this.$emit('close', false)">
    <div class="modal__block scale-up-center dark:!bg-nav-bg-dark" @click.stop>
      <div class="modal__close">
        <p class="cursor-default action__font-light text-xl">{{ heading }}</p>
        <button class="mb-[-2px]" @click="this.$emit('close', false)">
          <svg class="dark:bg-nav-bg-dark" viewBox="0 0 48 48" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: {
    heading: String,
  },
};
</script>

<style scoped>
.modal__wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__block {
  border-radius: 10px;
  background-color: #fff;
  min-width: 340px;
  padding: 10px;
  margin: 10px;
}
.modal__close {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background-color: #fff;
  border: 0;
  padding-right: 0;
  padding: 0;
}
svg:hover {
  fill: #e00d0d;
}

.scale-up-center {
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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
