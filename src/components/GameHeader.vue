<template>
  <div class="flex flex-col sm:flex-row mb-6 justify-between items-center">
    <p class="text-black text-base font-body font-normal">
      Grid: <strong>{{ grid }} x {{ grid }}</strong>
    </p>
    <div class="relative flex items-center ml-10 my-6 sm:my-0">
      <div>
        <div class="life-bg" />
        <div class="life-line" :style="{ width: `${lifeLine}px` }" />
        <img
          src="../assets/img/heart.png"
          srcset="
            ../assets/img/heart.png    33w,
            ../assets/img/heart@2x.png 66w,
            ../assets/img/heart@3x.png 99w
          "
          sizes="(max-width: 640px) 33px, (max-width: 1280px) 66px, 99px"
          alt="heart"
          class="w-16 absolute -top-4 -left-10"
        />
      </div>
    </div>
    <p class="text-black text-base font-body font-normal">
      Time spent:
      <strong v-if="seconds >= 0">
        {{ seconds }} {{ seconds === 1 ? "sec " : "secs" }}</strong
      >
      <strong v-else> 0 secs </strong>
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from "vue";

export default defineComponent({
  name: "GameHeader",
  props: {
    grid: { type: Number, required: true },
    seconds: { type: Number, required: true },
    life: { type: Number, required: true },
  },
  setup(props) {
    const life: Ref = toRef(props, "life");
    const lifeLine = computed(() => life.value * 160);

    return { lifeLine };
  },
});
</script>

<style lang="scss">
.life {
  &-bg {
    @apply rounded-full;
    width: 163px;
    height: 18px;
    background: linear-gradient(180deg, #853594 47.39%, #692789 47.4%);
    border: 2px solid #532461;
    box-sizing: border-box;
  }
  &-line {
    @apply absolute rounded-full transition;
    transition-property: width;
    width: 0;
    height: 16px;
    left: 3px;
    top: 1px;
    background: linear-gradient(180deg, #f07cc3 44.27%, #c5418e 44.28%);
    border: 1.87639px solid #fffffd;
    box-sizing: border-box;
  }
}
</style>
