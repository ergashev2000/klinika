<template>
  <section class="pt-36 max-sm:pt-5">
    <div class="max-container">
      <h2 class="text-3xl font-semibold text-center max-sm:text-xl">
        Бесплатная консультация врача
      </h2>
      <p
        class="text-center text-lg text-primary font-semibold py-5 max-sm:text-sm"
      >
        На бесплатной консультации врач клиники проведет диагностику всех зубов:
      </p>
      <div
        class="flex gap-5 justify-evenly py-5 max-sm:flex-col max-sm:items-center max-sm:px-2"
      >
        <div class="max-w-xs w-full" v-for="c in consultant" :key="c.title">
          <img
            :src="c.img"
            alt="Consultant Image"
            class="w-full object-cover rounded-2xl shadow"
          />
          <div class="p-2">
            <h3 class="font-semibold text-lg pb-3 text-center">
              {{ c.title }}
            </h3>
            <p class="text-[14px] text-center">
              При необходимости сделаем дополнительный снимок зубов, у нас в
              клинике
            </p>
          </div>
        </div>
      </div>

      <Button class="primary-btn w-64 mx-auto block my-5">Записаться</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/UI/Button.vue";

import { consultant } from "~/data";
</script>

<style scoped></style>
