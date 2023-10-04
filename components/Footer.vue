<template>
  <footer class="bg-second">
    <div class="max-container">
      <div class="flex justify-between items-center p-5 max-lg:flex-col">
        <NuxtLink to="/">
          <div class="min-w-min flex gap-2 items-center pr-3">
            <img src="~assets/icons/header-logo.svg" alt="" />
            <h2 class="text-primary font-semibold">
              Стоматологическая <br />
              клиника
            </h2>
          </div>
        </NuxtLink>

        <ul class="flex items-center gap-4 text-primary max-lg:flex-col">
          <li>
            <NuxtLink to="/"> Главная </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Акции </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Услуги </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Врачи </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Отзывы </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Лицензии </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> О клинике </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/"> Контакты </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
