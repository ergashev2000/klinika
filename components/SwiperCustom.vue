<template>
  <swiper
    :modules="modules"
    :slides-per-view="view"
    :space-between="25"
    :pagination="{ clickable: true }"
    :navigation="true"
    :loop="loop"
  >
    <slot />
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const modules = [Navigation, Pagination, Scrollbar, A11y];

const { view, loop } = defineProps(['view','loop']);
</script>

<style scoped>

</style>
