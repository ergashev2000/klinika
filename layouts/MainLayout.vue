<template>
  <Navbar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
