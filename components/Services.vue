<template>
  <section class="py-10">
    <div class="max-container px-5">
      <h2 class="text-3xl font-semibold text-center">Услуги</h2>
      <p class="text-center text-lg text-primary font-semibold py-5">
        Наша клиника предоставляет широкий спектр услуг, выберите подходящую
        <br />
        <span class="text-primarybold"
          >вам и запишитесь на бесплатную консультацию</span
        >
      </p>
      <div class="grid grid-cols-2 gap-5">
        <div
          class="bg-second p-10 flex flex-col justify-between rounded-lg shadow-lg bg-[url(~/assets/images/services-img1.png)] bg-no-repeat bg-right-top"
        >
          <div class="w-2/3">
            <h3 class="text-xl font-semibold text-primary">Хирургия</h3>
            <p class="py-5 text-brown text-sm">
              Удаление зуба является одной из самых распространенных операций в
              стоматологической практике.
            </p>
            <ul class="pl-5">
              <li class="list-disc font-semibold">
                Удаление зубов любой сложности
              </li>
            </ul>
          </div>

          <div>
            <div class="flex gap-4 items-center justify-center py-7">
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
            <div class="flex items-center justify-center gap-5">
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

        <div
          class="bg-second p-10 flex flex-col justify-between rounded-lg shadow-lg bg-[url(~/assets/images/services-img2.png)] bg-no-repeat bg-right-top"
        >
          <div class="w-2/3">
            <h3 class="text-xl font-semibold text-primary">Хирургия</h3>
            <p class="py-5 text-brown text-sm">
              Удаление зуба является одной из самых распространенных операций в
              стоматологической практике.
            </p>
            <ul class="pl-5">
              <li class="list-disc font-semibold">
                Удаление зубов любой сложности
              </li>
            </ul>
          </div>

          <div>
            <div class="flex gap-4 items-center justify-center py-7">
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
            <div class="flex items-center justify-center gap-5">
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
</script>

<style scoped></style>
