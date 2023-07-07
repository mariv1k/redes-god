<script lang="ts">
import { Tabs } from "@/types"

export default {
  data() {
    return {
      Tabs
    }
  },
  methods: {
    setTab(tab: Tabs) {
      this.$emit("setTab", tab)
    }
  },
  emits: {
    setTab(tab: Tabs) {
      return Object.values(Tabs).includes(tab)
    }
  }
}
</script>

<template>
  <div
    class="flex flex-row [&>button]:w-full [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:h-12 [&>button>span]:font-bold"
  >
    <button
      @click="setTab(Tabs.FAST_MODE)"
      class="bg-gradient-to-b hover:to-90% from-nightless to-night to-75%"
    >
      <span>Fast Mode</span>
    </button>
    <button
      @click="setTab(Tabs.TEST)"
      class="bg-gradient-to-b hover:to-90% from-nightless to-night to-75%"
    >
      <span>Test</span>
    </button>
  </div>
</template>
