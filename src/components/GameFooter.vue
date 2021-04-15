<template>
  <div class="flex mt-6 justify-between">
    <p class="text-black text-base font-body font-normal">
      Maximum moves: <strong>{{ max }}</strong>
    </p>
    <p class="text-black text-base font-body font-normal">
      Total moves: <strong>{{ moves }}</strong>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameFooter",
  props: {
    max: { type: Number, required: true },
    moves: { type: Number, required: true },
  },
});
</script>
