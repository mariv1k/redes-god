<template>
  <Question
    v-for="(question, index) in questions"
    :key="question.id"
    @set-choice="setChoice"
    :data="question"
    :show-result="showResults"
    :disable-interaction="disableInteraction"
    :index="index + 1"
  />
  <div class="my-5">
    <button
      v-if="!showResults"
      class="w-full flex justify-center items-center text-[#1e293b] h-16 rounded-md text-xl font-bold bg-gradient-to-tr hover:bg-gradient-to-br from-celeste to-[#8fd3f4]"
      @click="correct"
    >
      Correct
    </button>
    <div v-else class="p-3 bg-[#1e293b] rounded-md w-full flex flex-col items-center">
      <div class="flex flex-row gap-2 [&>span]:font-bold [&>span]:text-md">
        <span class="text-green">{{ ok }}</span>
        <span class="opacity-50">{{ blank }}</span>
        <span class="text-red">{{ wrong }}</span>
      </div>
      <span class="font-bold text-2xl">{{ score }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Question from "@/components/Question.vue"
import { getQuestions } from "@/utils"

const QUESTIONS_AMOUNT = 35
const questions = getQuestions().slice(0, QUESTIONS_AMOUNT)

export default {
  data() {
    return {
      questions,
      showResults: false,
      disableInteraction: false
    }
  },
  methods: {
    setChoice(choice: number, id: number) {
      const question = this.questions.find((question) => question.id === id)

      if (question === undefined) return
      question.answer = choice
    },
    correct() {
      this.showResults = true
      this.disableInteraction = true
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  },
  computed: {
    ok() {
      return this.questions.filter((question) => question.answer === question.solution).length
    },
    blank() {
      return this.questions.filter((question) => question.answer === undefined).length
    },
    wrong() {
      return this.questions.filter(
        (question) => question.answer !== undefined && question.answer !== question.solution
      ).length
    },
    score() {
      return (Math.max((this.ok - this.wrong / 3) / QUESTIONS_AMOUNT, 0) * 10).toFixed(1)
    }
  },
  components: {
    Question
  }
}
</script>
