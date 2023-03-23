<script setup>
import TheNav from './components/TheNav.vue'
import TheAside from './components/TheAside.vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'

</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheNav />
  <TheAside />
  <TheFooter />
</template>

<style scoped></style>
