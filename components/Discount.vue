<template>
  <section class="py-10" id="discount">
    <div class="max-container">
      <h2 class="text-3xl font-semibold text-center max-sm:text-xl">Акции</h2>
      <p
        class="text-center text-lg text-primary font-semibold py-5 max-sm:text-sm px-5"
      >
        Для подписчиков группы VK стоматологической клиники "Семейный доктор"
        <br />
        <span class="text-primarybold"
          >действуют акции и специальные предложения</span
        >
      </p>

      <div class="w-full px-10">
        <SwiperCustom :view="3" :loop="false" :breakpoints="breakpoints">
          <swiper-slide v-for="dis in discount">
            <DiscountCard :dis="dis"/>
          </swiper-slide>

         
        </SwiperCustom>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";

import { discount } from "~/data";

import DiscountCard from "~/components/DiscountCard.vue";
import SwiperCustom from "./SwiperCustom.vue";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1280: {
    slidesPerView: 3,
  },
};
</script>

<style scoped></style>
