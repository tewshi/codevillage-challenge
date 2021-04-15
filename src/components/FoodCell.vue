<template>
  <div
    class="item transition duration-300 ease-in-out"
    :class="{ 'cursor-pointer': untouched, 'bg-red': isEmpty }"
    @click="$emit('click', value)"
  >
    <div class="content">
      <div class="content-inside">
        <transition name="fade">
          <img
            v-if="hasFood"
            src="../assets/img/food.png"
            srcset="
              ../assets/img/food.png    33w,
              ../assets/img/food@2x.png 66w,
              ../assets/img/food@3x.png 99w
            "
            sizes="(max-width: 640px) 33px, (max-width: 1280px) 66px, 99px"
            alt="Food"
            class="w-8"
          />
          <img
            v-else-if="isPlayer"
            src="../assets/img/character.png"
            srcset="
              ../assets/img/character.png    33w,
              ../assets/img/character@2x.png 66w,
              ../assets/img/character@3x.png 99w
            "
            sizes="(max-width: 640px) 33px, (max-width: 1280px) 66px, 99px"
            alt="Character"
            class="w-8"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, toRef, Ref, defineComponent } from "vue";

export default defineComponent({
  name: "FoodCell",
  props: {
    col: { type: Number, required: true },
  },
  emits: {
    click(payload: number) {
      return payload >= 0;
    },
  },
  setup(props) {
    const value: Ref = toRef(props, "col");
    const untouched = computed(() => value.value <= 1);
    const hasFood = computed(() => value.value === 2);
    const isPlayer = computed(() => value.value === 3);
    const isEmpty = computed(() => value.value === 4);

    return { untouched, isEmpty, hasFood, isPlayer, value };
  },
});
</script>
