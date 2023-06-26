<template>
  <Question v-for="question in questions" @set-choice="setChoice" :data="question" />
</template>

<script lang="ts">
import Question from "@/components/Question.vue"
import { getQuestions } from "@/utils"

const QUESTIONS_AMOUNT = 25
const questions = getQuestions().slice(0, QUESTIONS_AMOUNT)

export default {
  data() {
    return {
      questions
    }
  },
  methods: {
    setChoice(choice: number, id: number) {
      if (this.questions[id].answer !== undefined) return
      this.questions[id].answer = choice
    }
  },
  components: {
    Question
  }
}
</script>
