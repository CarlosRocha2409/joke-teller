<script setup lang="ts">
import { api } from "@/config/axios.config";
import { onMounted, ref } from "vue";

const setup = ref<string>("");
const punchline = ref<string>("");

function setupJoke() {
  api.get("/random_joke").then((joke: any) => {
    setup.value = joke.setup;
    punchline.value = joke.punchline;
  });
}

onMounted(() => {
  setupJoke();
});
</script>
<template>
  <div class="joke-teller">
    <h2>Let me tell you a joke!</h2>
    <div class="joke">
      <h3>{{ setup }}</h3>
      <h4>{{ punchline }}</h4>
      <button @click="setupJoke"> Get another joke </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.joke-teller {
  @apply flex flex-col;
  h2 {
    @apply text-7xl font-bold text-white text-center;
  }
  .joke {
    @apply bg-background-light mt-8 p-4 rounded-[25px] flex flex-col justify-center items-center gap-4 mb-9;
    * {
      @apply text-center;
    }
    h3 {
      @apply text-4xl font-semibold text-normal-blue;
    }
    h4 {
      @apply mt-4 text-2xl text-white;
    }
    button {
      @apply bg-normal-blue text-white p-2 rounded-xl;
    }
  }
}
</style>
