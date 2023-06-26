<template>
  <div class="flex flex-row gap-2 [&>span]:font-bold [&>span]:text-sm">
    <span class="opacity-50">{{ question_idx + 1 }} / {{ questions.length }}</span>
    <span class="text-[#96e6a1]">{{ hits }}</span>
    <span class="text-[#f5576c]">{{ fails }}</span>
  </div>
  <Question @set-choice="setChoice" :data="question" />
  <div
    class="flex flex-row gap-2 [&>button]:w-full [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:h-16 [&>button]:rounded-lg [&>button>svg]:stroke-[#1e293b]"
  >
    <button
      class="bg-gradient-to-tr hover:bg-gradient-to-br from-[#84fab0] to-[#8fd3f4]"
      @click="prevQuestion"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </button>
    <button
      class="bg-gradient-to-tl hover:bg-gradient-to-bl from-[#84fab0] to-[#8fd3f4]"
      @click="nextQuestion"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        class="w-6 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
        />
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { getQuestions, randomIntFromInterval } from "@/utils"
import Question from "@/components/Question.vue"
const questions = getQuestions()

export default {
  data() {
    return {
      question_idx: 0,
      questions,
      hits: 0,
      fails: 0
    }
  },
  methods: {
    nextQuestion() {
      this.question_idx = this.question_idx + 1 >= this.questions.length ? 0 : this.question_idx + 1
    },
    prevQuestion() {
      this.question_idx =
        this.question_idx - 1 < 0 ? this.questions.length - 1 : this.question_idx - 1
    },
    setChoice(choice: number, id: number) {
      if (this.question.answer !== undefined) return
      this.questions[this.question_idx].answer = choice
      this.question.solution === this.question.answer ? this.hits++ : this.fails++
    }
  },
  computed: {
    question() {
      return this.questions[this.question_idx]
    }
  },
  components: {
    Question
  }
}
</script>
