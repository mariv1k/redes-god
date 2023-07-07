<template>
  <div class="flex flex-col my-5">
    <span class="font-bold">{{ data?.title }}</span>
    <ul class="list-none">
      <Choice
        v-for="(choice, index) in data.choices"
        @click="setChoice(index, data.id)"
        :key="index"
        :data="{id: index, choice, solution: data!.solution, answer: data.answer}"
        :showResult="showResult"
        :disableInteraction="disableInteraction"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import Choice from "@/components/Choice.vue"
import type { IQuestion } from "@/types"
import type { PropType } from "vue"

export default {
  name: "Question",
  props: {
    data: { type: Object as PropType<IQuestion>, required: true },
    showResult: { type: Boolean, required: false, default: false },
    disableInteraction: { type: Boolean, required: false, default: false }
  },
  methods: {
    setChoice(choice: number, id: number) {
      if ((this.data.answer !== undefined && this.showResult) || this.disableInteraction) return
      this.$emit("setChoice", choice, id)
    }
  },
  components: {
    Choice
  },
  emits: {
    setChoice(choice: number, id: number) {
      return choice >= 0 && choice <= 3
    }
  }
}
</script>
