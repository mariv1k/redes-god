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
  <nav>
    <div
      class="flex flex-row gap-0.5 [&>button:hover]:bg-opacity-75 [&>button]:w-full [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:h-12 [&>button>span]:font-bold"
    >
      <button @click="setTab(Tabs.FAST_MODE)" class="bg-nightless rounded-s-lg">
        <span>Fast Mode</span>
      </button>
      <button @click="setTab(Tabs.TEST)" class="bg-nightless rounded-e-lg">
        <span>Test</span>
      </button>
    </div>
  </nav>
</template>
