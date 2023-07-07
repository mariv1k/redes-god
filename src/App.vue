<script lang="ts">
import FastView from "./views/FastView.vue"
import TestView from "./views/TestView.vue"
import Navigation from "./components/Navigation.vue"
import { Tabs } from "@/types"

const DEFAULT_TAB = Tabs.FAST_MODE
export default {
  data() {
    return { tab: DEFAULT_TAB, Tabs }
  },
  methods: {
    setTab(tab: Tabs) {
      this.tab = tab
    }
  },
  components: {
    FastView,
    Navigation,
    TestView
  }
}
</script>

<template>
  <header><Navigation @set-tab="setTab" /></header>
  <main>
    <FastView v-if="tab === Tabs.FAST_MODE" />
    <TestView v-else-if="tab === Tabs.TEST" />
  </main>
  <footer></footer>
</template>
