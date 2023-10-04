<template>
  <header>
    <div
      class="flex items-center justify-between gap-5 py-2 px-5 max-container"
    >
      <div class="flex items-center gap-5">
        <NuxtLink to="/">
          <div class="min-w-min flex gap-2 items-center pr-3">
            <img
              src="~assets/icons/header-logo.svg"
              alt="Icon"
              class="max-sm:w-14"
            />
            <h2 class="text-primary font-semibold">
              Стоматологическая <br />
              клиника
            </h2>
          </div>
        </NuxtLink>

        <button
          class="bg-white p-1 w-6 h-6 rounded-sm flex-col justify-between max-sm:flex hidden absolute right-5 top-5 z-20"
          @click="toggleMenu"
        >
          <span class="bg-primary w-5 h-[2px]"></span>
          <span class="bg-primary w-5 h-[2px]"></span>
          <span class="bg-primary w-5 h-[2px]"></span>
        </button>

        <div
          class="bg-white absolute top-0 left-0 w-full h-screen z-10 transition-all duration-500"
          :class="menuOpen ? 'translate-y-0' : ' -translate-y-full'"
        >
          <ul class="space-y-2 flex justify-center mt-10 flex-col items-center">
            <li>
              <NuxtLink to="/">Главная</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#discount">Акции</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#services">Услуги</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#doctors">Врачи</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#reviews">Отзывы</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#licenses">Лицензии</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#contact">Контакты</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="max-w-[280px] text-[15px] max-lg:hidden">
          <h3 class="font-semibold">Адрес</h3>
          <p class="flex gap-2">
            <img src="~/assets/icons/map-pin.svg" alt="Icon" />
            г. Коломна, ул. Октябрьской <br />
            революции д. 161
          </p>
        </div>
        <div class="max-w-[280px] text-[15px] max-lg:hidden">
          <h3 class="font-semibold">Время работы</h3>
          <p class="text-[15px] flex gap-2 items-center">
            <img src="~/assets/icons/clock.svg" alt="Icon" class="w-5 h-5" />
            Работаем без выходных <br />
            с 9:00 до 21:00
          </p>
        </div>
      </div>
      <div class="flex gap-4 items-start max-sm:hidden">
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
    <nav class="bg-second py-2 px-5 mt-3 shadow max-sm:hidden">
      <ul class="flex gap-5 items-center text-sm max-container">
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="/">Главная</NuxtLink>
        </li>
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="#discount">Акции</NuxtLink>
        </li>
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="#services">Услуги</NuxtLink>
        </li>
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="#doctors">Врачи</NuxtLink>
        </li>
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="#reviews">Отзывы</NuxtLink>
        </li>
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="#licenses">Лицензии</NuxtLink>
        </li>
        <li
          class="hover:text-[#046DBF] duration-500 transition-all text-primary before:h-[1px] before:w-full before:bg-primary before:transition-all before:duration-300 hover:before:scale-100 before:scale-0 before:absolute relative before:bottom-0"
        >
          <NuxtLink to="#contact">Контакты</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;

  // Toggle body scroll
  if (menuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};


</script>

<style scoped></style>
