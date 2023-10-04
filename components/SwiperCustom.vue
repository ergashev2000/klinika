<template>
  <swiper
    :modules="modules"
    :slides-per-view="view"
    :space-between="25"
    :pagination="{ clickable: true }"
    :navigation="true"
    :loop="loop"
    :breakpoints="breakpoints"
  >
    <slot />
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
const modules = [Navigation, Pagination, Scrollbar, A11y];

const { view, loop, breakpoints } = defineProps(['view', 'loop', 'breakpoints']);


</script>

<style scoped>

</style>
