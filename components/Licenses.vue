<template>
  <section id="licenses">
    <div class="max-container px-5 py-14">
      <h2 class="text-3xl font-semibold text-center max-lg:text-lg">Лицензии и награды</h2>
      <p class="text-center text-xl text-primary font-semibold py-10 max-lg:text-sm max-lg:px-2">
        Деятельность клиники сертифицирована, мы имеем все необходимые лицензии
        и разрешающие документы.
      </p>
      <div>
        <SwiperCustom :view="4" :loop="false" :breakpoints="breakpoints">
          <swiper-slide>
            <img
              src="~/assets/images/license-1.png"
              alt="License"
              class="mx-auto"
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="~/assets/images/license-1.png"
              alt="License"
              class="mx-auto"
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="~/assets/images/license-1.png"
              alt="License"
              class="mx-auto"
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="~/assets/images/license-1.png"
              alt="License"
              class="mx-auto"
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="~/assets/images/license-1.png"
              alt="License"
              class="mx-auto"
            />
          </swiper-slide>
        </SwiperCustom>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import SwiperCustom from "./SwiperCustom.vue";

const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1280: {
    slidesPerView: 4,
  },
};
</script>

<style scoped></style>
