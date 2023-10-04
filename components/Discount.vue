<template>
  <section class="py-10">
    <div class="max-container">
      <h2 class="text-3xl font-semibold text-center">Акции</h2>
      <p class="text-center text-lg text-primary font-semibold py-5">
        Для подписчиков группы VK стоматологической клиники "Семейный доктор"
        <br />
        <span class="text-primarybold"
          >действуют акции и специальные предложения</span
        >
      </p>

      <div class="w-full  px-10">
        <SwiperCustom :view="3" :loop="false">
          <swiper-slide>
            <DiscountCard />
          </swiper-slide>

          <swiper-slide>
            <DiscountCard />
          </swiper-slide>

          <swiper-slide>
            <DiscountCard />
          </swiper-slide>

          <swiper-slide>
            <DiscountCard />
          </swiper-slide>

          <swiper-slide>
            <DiscountCard />
          </swiper-slide>
        </SwiperCustom>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";

import DiscountCard from "~/components/DiscountCard.vue";
import SwiperCustom from "./SwiperCustom.vue";
</script>

<style scoped>

</style>
