<template>
  <section>
    <div class="max-container px-5 py-14">
      <h2 class="text-3xl font-semibold text-center">Услуги</h2>
      <p class="text-center text-lg text-primary font-semibold py-5">
        Наша клиника предоставляет широкий спектр услуг, выберите подходящую
        <br />
        <span class="text-primarybold"
          >вам и запишитесь на бесплатную консультацию</span
        >
      </p>

      <div class="w-full relative">
        <SwiperCustom :view="2" loop>
          <swiper-slide>
            <ReviewCard />
          </swiper-slide>

          <swiper-slide>
            <ReviewCard />
          </swiper-slide>

          <swiper-slide>
            <ReviewCard />
          </swiper-slide>

          <swiper-slide>
            <ReviewCard />
          </swiper-slide>
        </SwiperCustom>

        <NuxtLink to="/" class="absolute right-5 -bottom-5">
          <div class="flex gap-3">
            Оставить отзыв
            <img src="~/assets/icons/VK.svg" alt="" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import SwiperCustom from "./SwiperCustom.vue";
</script>

<style scoped>
.swiper-pagination {
  bottom: 0px !important;
}
</style>
