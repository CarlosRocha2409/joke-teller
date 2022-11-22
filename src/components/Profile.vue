<template>
  <section class="profile">
    <img alt="profile" src="@/assets/images/profile.jpg" />
    <h2>Carlos Rocha</h2>
    <h3>2017-0931U</h3>
    <p
      >🎵 Part-Time Musician 💻 Full-Stack Web Developer 🧙‍♂️ Solana Wizzard 👨‍🎓
      Systems Engineer 2023 🤖 DevOps Padawan 🏢 Co-founder of Binary
      Solutions</p
    >
  </section>
</template>

<style scoped lang="scss">
.profile {
  @apply flex flex-col justify-center items-center gap-4 p-10 rounded-[35px];
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(@/assets/images/bg-profile.jpg);
  img {
    @apply w-80 h-auto rounded-full border-dark-blue border-4;
  }
  h2 {
    @apply text-6xl font-bold text-white text-center;
  }
  h3 {
    @apply text-2xl text-white;
  }
  p {
    @apply text-center;
  }
}
</style>
