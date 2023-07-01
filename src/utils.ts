import type { IQuestion } from "./types"
import questions from "@/assets/questions.json"

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getQuestions() {
  return shuffle(
    questions.map((question, index) => {
      const solution = question.choices[question.solution]
      const shuffled = shuffle(question.choices)

      return {
        id: index,
        title: question.title,
        choices: shuffled,
        solution: shuffled.indexOf(solution)
      } as IQuestion
    })
  )
}
export function clamp(number: number, min: number, max: number) {
  return Math.max(min, Math.min(number, max))
}
