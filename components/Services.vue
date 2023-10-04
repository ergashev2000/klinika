<template>
  <section class="py-10" id="services">
    <div class="max-container px-5">
      <h2 class="text-3xl font-semibold text-center max-sm:text-lg">Услуги</h2>
      <p
        class="text-center text-lg text-primary font-semibold py-5 max-sm:text-sm"
      >
        Наша клиника предоставляет широкий спектр услуг, выберите подходящую
        <br />
        <span class="text-primarybold"
          >вам и запишитесь на бесплатную консультацию</span
        >
      </p>
      <div class="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-second p-10 max-sm:p-5 flex flex-col justify-between rounded-lg shadow-lg max-sm:bg bg-no-repeat max-sm:bg-[length:150px] bg-right-top"
          :style="{ backgroundImage: `url(${service.img})` }"
        >
          <div class="w-2/3 max-sm:w-full">
            <h3 class="text-xl font-semibold text-primary">
              {{ service.title }}
            </h3>
            <p class="py-5 text-brown text-sm">
              {{ service.description }}
            </p>
            <ul class="pl-5">
              <li
                class="list-disc font-semibold"
                :key="item"
                v-for="item in service.usligi"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div>
            <div
              class="flex gap-4 items-center justify-center py-7 max-sm:gap-1"
            >
              <NuxtLink to="/">
                <img
                  src="~/assets/icons/telegram.svg"
                  alt="Icon"
                  class="w-7 h-7"
                />
              </NuxtLink>
              <NuxtLink to="/">
                <img
                  src="~/assets/icons/whatsapp.svg"
                  alt="Icon"
                  class="w-7 h-7"
                />
              </NuxtLink>
              <h4>спросить в мессенджере</h4>
            </div>
            <div
              class="flex items-center justify-center gap-5 max-sm:flex-col max-sm:justify-center"
            >
              <Button class="bg-second text-primary hover:shadow-lg">
                Записаться
              </Button>
              <Button
                class="text-primary bg-primary bg-opacity-40 px-10 whitespace-nowrap"
              >
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/UI/Button.vue";

import { services } from "~/data";
</script>

<style scoped></style>
