<template>
  <header class="">
    <div class="flex items-center justify-between gap-5 p-2 max-container">
      <div class="flex items-center gap-5">
        <NuxtLink to="/">
          <div class="min-w-min flex gap-2 items-center pr-3">
            <img src="~assets/icons/header-logo.svg" alt="" />
            <h2 class="text-primary font-semibold">
              Стоматологическая <br />
              клиника
            </h2>
          </div>
        </NuxtLink>
        <div class="max-w-[280px] text-[15px]">
          <h3 class="font-semibold">
           Адрес
          </h3>
          <p>
            г. Коломна, ул. Октябрьской <br />
            революции д. 161
          </p>
        </div>
        <div class="max-w-[280px] text-[15px]">
          <h3 class="font-semibold">
            Время работы
          </h3>
          <p class="text-[15px]">
            Работаем без выходных <br />
            с 9:00 до 21:00
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start">
        <div class="flex items-center gap-3 mt-3">
          <NuxtLink to="/">
            <img
              src="~assets/icons/telegram.svg"
              alt="Telegram icon"
              class="w-5 h-5"
            />
          </NuxtLink>
          <NuxtLink to="/">
            <img
              src="~assets/icons/whatsapp.svg"
              alt="Whatsapp icon"
              class="w-5 h-5"
            />
          </NuxtLink>
        </div>
        <div class="space-y-1 text-end">
          <NuxtLink to="/">
            <h4 class="font-semibold text-sm">+7 (496) 614-15-15</h4>
          </NuxtLink>
          <NuxtLink to="/">
            <h4 class="font-semibold text-sm">+7 (926) 025-57-67</h4>
          </NuxtLink>
          <p class="font-semibold text-[14px] text-primary p-0 m-0">
            Перезвоните мне
          </p>
        </div>
      </div>
    </div>
    <nav class="bg-second p-2 mt-3 shadow">
      <ul class="flex gap-5 items-center text-sm max-container">
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary  before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Главная</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Акции</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Услуги</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Врачи</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Отзывы</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Лицензии</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">О клинике</NuxtLink>
        </li>
        <li class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0">
          <NuxtLink to="/">Контакты</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
