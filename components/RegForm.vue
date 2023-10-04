<template>
  <form
    class="p-10 rounded-xl bg-second space-y-3 flex flex-col gap-4 max-w-md w-full shadow-lg"
  >
    <h3 class="text-primarybold font-semibold text-lg text-center">
      Запишитесь на бесплатную первичную консультацию и диагностику зубов
    </h3>
    <p class="text-primary text-center">
      В ходе консультации вы получите 2-3 плана качественного лечения под ваш
      бюджет
    </p>

    <input
      type="text"
      placeholder="Имя"
      id="name"
      class="py-2 px-5 rounded-full border-2 border-[#BDF8F9]"
      required
    />
    <input
      type="number"
      placeholder="Телефон"
      id="name"
      class="py-2 px-5 rounded-full border-2 border-[#BDF8F9]"
      required
    />

    <Button>Записаться</Button>
  </form>
</template>

<script setup lang="ts">
import Button from "~/components/UI/Button.vue";
</script>

<style scoped></style>
