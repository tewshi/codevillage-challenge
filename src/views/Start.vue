<template>
  <div class="start">
    <div class="col-span-0 sm:col-span-1 xl:col-span-2" />
    <div
      class="col-span-8 sm:col-span-6 xl:col-span-4 p-1 md:p-4 lg:p-9 xl:p-12 bg-white rounded-lg"
    >
      <game-header :seconds="seconds" :grid="grid" :life="life" />

      <div class="game_grid" :style="{ gridTemplateColumns: gridCols }">
        <food-cell
          v-for="(col, j) in grids"
          :key="j"
          :col="col"
          @click="() => eat(j)"
        />
      </div>

      <game-footer :max="max" :moves="moves" />
    </div>
    <div class="col-span-0 sm:col-span-1 xl:col-span-2" />
  </div>
</template>

<script lang="ts">
import {
  ref,
  readonly,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  computed,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import GameHeader from "@/components/GameHeader.vue";
import FoodCell from "@/components/FoodCell.vue";
import GameFooter from "@/components/GameFooter.vue";

export default defineComponent({
  name: "StartGame",
  components: { GameHeader, GameFooter, FoodCell },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const grid = Number(route.params.grid);
    const grids = ref(new Array<number>(grid * grid).fill(0)); // 0: blank, 1: filled, 2: eaten, 3: player, 4: not-found
    const max = Math.ceil(Math.pow(grid, 2) / 2);
    const seconds = ref(-1);
    const eaten = ref(0);
    const moves = ref(0);
    const interval: number = setInterval(() => {
      seconds.value++;
    }, 1000);

    const gridCols = "1fr ".repeat(grid).trim();

    const failed = (): void => {
      router.push({
        name: "failed",
        params: { grid, seconds: seconds.value, eaten: eaten.value },
      });
    };

    const won = (): void => {
      router.push({
        name: "won",
        params: { grid, seconds: seconds.value, eaten: eaten.value },
      });
    };

    const totalRandomFoods = computed((): number => {
      return grids.value.filter((value) => value != 0).length;
    });

    const hasPlayer = computed((): boolean => {
      return grids.value.some((value) => value === 3);
    });

    const life = computed((): number => {
      return moves.value / max;
    });

    const getRandomInt = (): number => {
      return Math.ceil(Math.random() * (grids.value.length - 1));
    };

    const eat = (index: number): void => {
      if (grids.value[index] <= 1) {
        moves.value++;
        if (grids.value[index] === 1) {
          eaten.value++;
          grids.value[index] = 2;
        } else {
          grids.value[index] = 4;
        }
      }

      if (moves.value === max) {
        if (eaten.value < grid) {
          failed();
        } else {
          won();
        }
      } else if (eaten.value === grid) {
        won();
      }
    };

    onMounted(() => {
      while (totalRandomFoods.value < grid) {
        const rand = getRandomInt();
        if (grids.value[rand] === 0) {
          grids.value[rand] = 1;
        }
      }

      while (!hasPlayer.value) {
        const rand = getRandomInt();
        if (grids.value[rand] === 0) {
          grids.value[rand] = 3;
        }
      }
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return {
      grid,
      grids,
      max,
      gridCols,
      seconds: readonly(seconds),
      eaten: readonly(eaten),
      moves: readonly(moves),
      life: readonly(life),
      eat,
      failed,
      won,
    };
  },
});
</script>

<style lang="scss">
.game_grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border: 2px solid #853594;

  .item {
    @apply w-full relative;
    border: 1.234345px solid #853594;

    &:before {
      content: "";
      display: inline-block;
      padding-top: 100%;
    }

    .content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      display: grid;
      justify-items: center;
      align-items: center;
    }
  }
}
</style>
