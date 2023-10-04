<template>
  <section
    class="bg-[url('~/assets/images/hero-banner.png')] bg-cover bg-center py-1 max-sm:bg-[50%] bg-no-repeat max-sm:bg-right-top"
  >
    <div class="max-container relative">
      <div class="space-y-6 p-5 py-14 max-sm:flex max-sm:flex-col max-sm:justify-center">
        <h2 class="text-4xl text-brown font-bold max-sm:text-xl">
          Лечение и протезирование зубов <br />
          по Европейским стандартам
        </h2>
        <p class="font-semibold text-xl text-primary max-sm:text-sm">
          Предоставим 2-3 плана качественного <br />
          лечения под ваш бюджет
        </p>
        <p class="text-lg text-brown max-sm:text-sm">
          Запишитесь на <span class="text-primary">бесплатную</span> первичную
          <br />
          консультацию - диагностику зубов
        </p>
        <Button class="max-sm:w-fit max-sm:mx-auto"> Записаться </Button>
      </div>
      <div
        class="flex justify-around gap-4 py-3 items-center absolute left-0 -bottom-24 px-5 max-sm:flex-col max-lg:static
         "
      >
        <div
          class="flex items-center gap-5 p-5 rounded-2xl shadow-lg max-w-sm bg-second max-lg:flex-col"
        >
          <img src="~/assets/icons/Calendar.svg" alt="Calendar" />
          <div>
            <h4 class="text-lg text-primary font-semibold">
              Работаем с 2011 года
            </h4>
            <p>Многолетний опыт работы - залог качественного сервиса</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 p-5 rounded-2xl shadow-lg max-w-sm bg-second  max-lg:flex-col"
        >
          <img src="~/assets/icons/UserGear.svg" alt="UserGear" />
          <div>
            <h4 class="text-lg text-primary font-semibold">
              Работаем с 2011 года
            </h4>
            <p>Многолетний опыт работы - залог качественного сервиса</p>
          </div>
        </div>
        <div
          class="flex items-center gap-5 p-5 rounded-2xl shadow-lg max-w-sm bg-second  max-lg:flex-col"
        >
          <img src="~/assets/icons/Fingerprint.svg" alt="Fingerprint" />
          <div>
            <h4 class="text-lg text-primary font-semibold">
              Работаем с 2011 года
            </h4>
            <p>Многолетний опыт работы - залог качественного сервиса</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "~/components/UI/Button.vue";
</script>

<style scoped>
@media (max-width: 640px) {
  .max-sm\:bg-\[50\%\] {
    background-position: right top;
    background-size: 150% auto;
  }
}
</style>
