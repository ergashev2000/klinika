<template>
  <section class="max-container px-5">
    <div class="bg-second rounded-2xl shadow">
      <div class="p-10 max-sm:p-5">
        <div class="flex gap-10 max-lg:flex-col">
          <div class="w-1/2 max-lg:w-full flex gap-5 flex-col">
            <h2 class="text-primary text-2xl font-semibold pb-5">
              Технология профессиональной гигиены полости рта
              <span class="text-primarybold"> в 4 этапа</span>
            </h2>

            <p class="text-primary">Посмотрите видео о технологии</p>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YuFwvXVCEUA"
              title="Отзыв пациента - SmileDesign.uz"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            <Button class="w-fit px-16 bg-second text-brown">
              Узнать цены
            </Button>
          </div>

          <ul class="[&>li]:list-disc space-y-5 pl-8 text-xl w-1/2 text-brown max-lg:w-full max-sm:text-sm max-sm:pl-2 ">
            <li>
              Максимальная чистка в труднодоступных местах от камня и налета
            </li>
            <li>Применение AIR FLOW не доставляет дискомфорта и боли</li>
            <li>Такая чистка помогает убрать неприятный запах изо рта</li>
            <li>Осветляет зубы на 2-3 тона</li>
            <li>
              Очищает протезы брекеты и другие ортодонтические конструкции
            </li>
            <li>Убирает пятна от кофе, чая, табака и красного вина</li>
            <li>Удаляет налет курильщика</li>
            <li>Снижается развитие кариозного процесса</li>
            <li>Все этапы безболезнены и атравматичны</li>
          </ul>
        </div>
      </div>
      <div
        class="bg-[url('~/assets/images/steps-banner.png')] bg-cover w-full bg-second p-20 rounded-b-3xl mb-5 max-lg:p-2 max-lg:pt-5"
      >
        <div class="flex gap-5 flex-col w-full">
          <div class="flex gap-3 w-2/3 bg-[#BDF8F9] p-2 rounded-xl shadow max-lg:w-full">
            <i
              class="text-5xl font-bold h-fit bg-white p-5 rounded-full text-primarybold w-24 h-22 flex justify-center items-center "
              >1</i
            >
            <p class="w-full font-semibold py-1 max-sm:text-sm">
              Ультразвуковым аппаратом производится максимальная чистка в
              труднодоступных местах от поддесневого и наддесневого камня и
              налета.
            </p>
          </div>

          <div
            class="flex gap-3 w-2/3 bg-[#BDF8F9] p-2 rounded-xl mr-24 self-center shadow max-lg:w-full max-lg:mr-0"
          >
            <i
              class="text-5xl font-bold bg-white p-5 rounded-full text-primarybold w-24 h-22 flex justify-center items-center"
              >2</i
            >
            <p class="w-full font-semibold py-1 max-sm:text-sm ">
              Применение AIR FLOW не доставляет дискомфорта и боли, очищая
              межзубные отложения.
            </p>
          </div>

          <div
            class="flex gap-3 w-2/3 bg-[#BDF8F9] p-2 rounded-xl ml-24 self-center shadow max-lg:w-full max-lg:ml-0"
          >
            <i
              class="text-5xl font-bold bg-white p-5 h-fit rounded-full text-primarybold w-24 h-22 flex justify-center items-center"
              >3</i
            >
            <p class="w-full font-semibold p-1 max-sm:text-sm">
              Полировка зубов при помощи специальных паст и щеточек. Такая
              чистка устраняет все неровности скопившихся отложений, освежает и
              убирает неприятный запах.
            </p>
          </div>

          <div
            class="flex gap-3 w-2/3 bg-[#BDF8F9] p-2 rounded-xl self-end shadow max-lg:w-full"
          >
            <i
              class="h-fit text-5xl font-bold bg-white p-5 rounded-full text-primarybold w-24 h-22 flex justify-center items-center"
              >4</i
            >
            <p class="w-full font-semibold py-1 max-sm:text-sm">
              Покрытие зубов ременилизирующим гелем. Снимает чувствительность,
              предотвращает развитие кариеса.
            </p>
          </div>
        </div>

        <div class="py-2">
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
          <div class="flex items-center justify-center gap-5 max-sm:flex-col">
            <Button class="w-52 bg-second text-primary hover:shadow-lg">
              Записаться
            </Button>
            <Button class="w-52 whitespace-nowrap"> Выбрать врача </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "./UI/Button.vue";
</script>

<style scoped></style>
