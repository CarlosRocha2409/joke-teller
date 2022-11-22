<script setup lang="ts">
import LandingView from "@/views/LandingView.vue";
import JokeTeller from "./components/JokeTeller.vue";
</script>

<template>
  <main>
    <LandingView />
    <JokeTeller />
  </main>
</template>

<style scoped lang="scss">
main {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center h-full;
}
</style>
