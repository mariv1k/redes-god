<template>
  <div class="flex flex-col">
    <span class="font-bold text-lg">{{ data?.title }}</span>
    <ul class="mb-2 list-none">
      <Choice
        v-for="(choice, index) in data.choices"
        :key="index"
        @click="setChoice(index, data.id)"
        :data="{id: index, choice, solution: data!.solution, answer: data.answer}"
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
    data: { type: Object as PropType<IQuestion>, required: true }
  },
  methods: {
    setChoice(choice: number, id: number) {
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
