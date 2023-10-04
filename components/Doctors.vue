<template>
  <section class="max-container px-5 py-10">
    <h2 class="text-3xl font-semibold text-center">Врачи</h2>
    <p class="text-center text-lg text-primary font-semibold py-5">
      В нашей клинике работают высококлассные специалисты с большим опытом
      работы. Выберите подходящего врача и запишитесь на консультацию.
    </p>

    <div class="flex gap-5">
      <ul class="w-1/2 space-y-10">
        <li
          class="flex items-center gap-2 bg-[#BDF8F9] rounded-2xl cursor-pointer h-28 hover:shadow-lg transition-all duration-500"
        >
          <div class="w-32 relative h-full overflow-hidden">
            <img
              src="~/assets/images/doc1.png"
              alt=""
              class="absolute top-0 h-52 left-2 object-cover"
            />
          </div>
          <div class="p-3 font-semibold">
            <h3 class="text-xl">Саидов Шамсулло Нарзуллоевич</h3>
            <p>
              <span class="text-primarybold">Врач-стоматолог </span>
              Ведущий специалист
            </p>
          </div>
        </li>
      </ul>
      <div class="w-1/2">
        <div
          class="relative bg-white shadow-lg h-[700px] rounded-xl bg-[url('~/assets/images/doc1.png')] bg-no-repeat bg-right-bottom p-7"
        >
          <div class="space-y-2 absolute top-3 left-3">
            <h3 class="text-2xl">Саидов Шамсулло Нарзуллоевич</h3>
            <p class="text-primarybold font-semibold text-lg">
              Врач-стоматолог
            </p>
            <p>Ведущий специалист</p>
          </div>
          <div
            class="doctor-card p-5 rounded-lg max-w-[380px] absolute bottom-3 left-3 border border-primary border-opacity-20"
          >
            <h4 class="text-primary text-lg pb-3 font-semibold">
              Опыт работы более 25 лет
            </h4>
            <p>
              <b> Действующие сертификаты:</b>
              стоматология ортопедическая; стоматология хирургическая
              <b
                ><br />
                Все виды высококачественного протезирования:</b
              >
              съемные, несъемные, безметалловые конструкции, цирконий, проте-
              зирование на имплантах, драгметаллах, вкладки, виниры, гнатология
              и хирургия
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <Button class="bg-white text-primarybold my-7 w-fit mx-auto"
            >Записаться</Button
          >
          <div class="flex gap-4 items-center justify-center">
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "./UI/Button.vue";
</script>

<style scoped>
.doctor-card {
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}
</style>
