<template>
  <li
    class="select-none w-[calc(100%+2*0.75rem)] rounded-lg px-3 py-0.5 ml-[-0.75rem] my-0.5"
    :class="style"
  >
    <span class="box-decoration-clone">{{ data?.choice }}</span>
  </li>
</template>

<script lang="ts">
import type { PropType } from "vue"
import type { IChoice } from "@/types"

export default {
  name: "Choice",
  props: {
    data: {
      type: Object as PropType<IChoice>,
      required: true
    },
    showResult: { type: Boolean, required: false },
    disableInteraction: { type: Boolean, required: false }
  },
  computed: {
    style() {
      var style = []

      if (this.showResult) {
        if (this.data.answer === this.data.id) {
          style.push(
            "[&>span]:underline [&>span]:decoration-2 [&>span]:underline-offset-2 [&>span]:font-bold [&>span]:text-nightless"
          )
        }
        if (this.data.solution === this.data.id) {
          if (this.data.answer === undefined) {
            style.push("grad-wrong [&>span]:text-nightless")
          } else {
            style.push("grad-correct [&>span]:text-nightless")
          }
        }
        if (this.data.answer === this.data.id && this.data.solution !== this.data.id) {
          style.push("grad-wrong [&>span]:text-nightless")
        }
      } else {
        if (this.data.answer === this.data.id) {
          style.push(
            "grad-hover [&>span]:underline [&>span]:decoration-2 [&>span]:underline-offset-2 [&>span]:font-bold [&>span]:text-nightless cursor-default"
          )
        } else {
          style.push("cursor-pointer hover:bg-nightless")
        }
      }
      if (this.data.answer === undefined && !this.disableInteraction) {
        style.push("cursor-pointer hover:bg-nightless")
      }

      return style.join(" ")
    }
  }
}
</script>
