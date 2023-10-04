<template>
  <div class="relative shadow-lg rounded-2xl overflow-hidden my-10">
    <img :src="dis" alt="Image" class="w-full" />
    <button
      class="absolute bottom-5 left-1/2 -translate-x-1/2 w-44 py-1 px-5 rounded-full border-2 border-primary bg-opacity-50 text-primary bg-second hover:bg-primary transition-all duration-500 hover:text-white"
    >
      Участвовать
    </button>
  </div>
</template>

<script setup>
const { dis } = defineProps(["dis"]);
</script>
