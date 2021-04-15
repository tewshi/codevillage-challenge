<template>
  <div
    class="home bg-primary min-h-screen px-1 md:px-4 lg:px-9 xl:px-12 py-12 md:py-20 lg:py-24 xl:py-28 grid grid-cols-7"
  >
    <div class="bg-dots col-span-2" />
    <div class="col-span-3 p-1 md:p-4 lg:p-9 xl:p-12 text-center">
      <div class="mx-auto mb-8 w-44">
        <router-link :to="{ name: 'home' }">
          <img
            src="../assets/img/character.png"
            srcset="
              ../assets/img/character.png     35w,
              ../assets/img/character@2x.png  70w,
              ../assets/img/character@3x.png 105w
            "
            sizes="(max-width: 640px) 35px, (max-width: 1280px) 70px,
            105px"
            alt="Character"
          />
        </router-link>
      </div>
      <router-view />
      <div class="flex justify-center items-center mb-16">
        <h3 class="text-red text-2xl font-display font-medium mr-4">Game grid</h3>
        <div class="relative inline-flex">
          <svg
            class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
            <path
              d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
              fill="#EE8D94"
              fill-rule="nonzero"
            />
          </svg>
          <select
            v-model.number="grid"
            class="border-2 border-red rounded text-white h-10 pl-5 pr-10 bg-transparent focus:outline-none appearance-none"
          >
            <option v-for="value in 6" :key="value" :value="6 + value">
              {{ 6 + value }}
            </option>
          </select>
        </div>
      </div>
      <button class="btn" @click="start">Start again</button>
    </div>
    <div class="bg-dots col-span-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Wrapper",
  setup() {
    const grid = ref(7);
    const router = useRouter();

    const start = (): void => {
      router.push({ name: "start", params: { grid: grid.value } });
    };

    return { grid, start };
  },
});
</script>
