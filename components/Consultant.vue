<template>
  <section class="pt-36">
    <div class="max-container">
      <h2 class="text-3xl font-semibold text-center">
        Бесплатная консультация врача
      </h2>
      <p class="text-center text-lg text-primary font-semibold py-5">
        На бесплатной консультации врач клиники проведет диагностику всех зубов:
      </p>
      <div class="flex gap-5 justify-evenly py-5">
        <div class="max-w-xs w-full">
          <img
            src="~/assets/images/consultant-img.png"
            alt="Consultant Image"
            class="w-full object-cover rounded-2xl shadow"
          />
          <div class="p-2">
            <h3 class="font-semibold text-lg pb-3 text-center">
              Полный осмотр и диагностика полости рта
            </h3>
            <p class="text-[14px] text-center">
              При необходимости сделаем дополнительный снимок зубов, у нас в
              клинике
            </p>
          </div>
        </div>
        <div class="max-w-xs w-full">
          <img
            src="~/assets/images/consultant-img.png"
            alt="Consultant Image"
            class="w-full object-cover rounded-2xl shadow"
          />
          <div class="p-2">
            <h3 class="font-semibold text-lg pb-3 text-center">
              Составит 2-3 плана лечения на выбор
            </h3>
            <p class="text-[14px] text-center">
              Вы сможете выбрать подходящий план лечения, исходя из бюджета
            </p>
          </div>
        </div>
        <div class="max-w-xs w-full">
          <img
            src="~/assets/images/consultant-img.png"
            alt="Consultant Image"
            class="w-full object-cover rounded-2xl"
          />
          <div class="p-2">
            <h3 class="text-center text-lg font-semibold pb-3">
              При необходимости проведем проф. гигиену
            </h3>
            <p class="text-[14px] text-center">Чистка зубов в 4 этапа</p>
          </div>
        </div>
      </div>

      <Button class="primary-btn w-64 mx-auto block my-5">Записаться</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '~/components/UI/Button.vue'
</script>

<style scoped></style>
