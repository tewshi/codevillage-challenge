<template>
  <h1 class="text-yellow text-6xl font-display font-semibold mb-6">
    Game over!
  </h1>
  <p class="text-default text-2xl font-display font-normal">
    Total Food: <strong>{{ eaten }} / {{ grid }}</strong>
  </p>
  <p class="text-default text-2xl font-display font-normal mt-5 mb-12">
    Time Spent: <strong>{{ seconds }} seconds</strong>
  </p>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "FailedGame",
  setup() {
    const route = useRoute();
    const { grid: _grid, seconds: _seconds, eaten: _eaten } = route.params;
    const grid = ref(Number(_grid));
    const seconds = ref(Number(_seconds));
    const eaten = ref(Number(_eaten));

    return {
      grid,
      seconds,
      eaten,
    };
  },
});
</script>
