<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/inter/Inter-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/inter/Inter-Medium.ttf") format("truetype");
  font-weight: 500;
}

@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/inter/Inter-SemiBold.ttf") format("truetype");
  font-weight: 600;
}

@font-face {
  font-family: "Inter";
  src: url("./assets/fonts/inter/Inter-Bold.ttf") format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/roboto/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "Roboto";
  src: url("./assets/fonts/roboto/Roboto-Bold.ttf") format("truetype");
  font-weight: 700;
}

.bg-dots {
  background-image: url("./assets/img/dots.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.btn {
  @apply py-4 px-6 text-2xl font-display font-medium md:px-10 lg:px-14 rounded-lg shadow-md bg-secondary text-white hover:bg-yellow hover:text-black focus:outline-none transition duration-300 ease-in-out;
}

.start {
  @apply min-h-screen px-1 md:px-4 lg:px-9 xl:px-12 py-12 md:py-20 lg:py-24 xl:py-28 grid grid-cols-8;
  background-image: url("./assets/img/bg-game.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
