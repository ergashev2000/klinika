<template>
  <section class="relative" id="contact">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11986.719688064535!2d69.2758336!3d41.31582625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b302631a383%3A0x324fb78013c57369!2sHyatt%20Regency%20Tashkent!5e0!3m2!1sen!2s!4v1696432640746!5m2!1sen!2s"
      width="100%"
      height="600"
      style="border: 0"
      loading="lazy"
    ></iframe>
    <div class="max-container mx-auto">
      <div
        class="max-w-md text-white bg-primary rounded-xl px-10 py-6 bg-opacity-80 absolute top-10 ml-10 space-y-5 w-full max-lg:left-0 max-lg:ml-0 max-lg:mx-2 max-sm:static max-sm:my-5 max-sm:rounded-none "
      >
        <h3 class="text-3xl">Контакты</h3>
        <p>г. Коломна, ул. Октябрьской  революции д. 161</p>
        <p>
          <span> с 9:00 до 21:00</span> <br />
          последняя запись до 19:00
        </p>
        <div class="flex flex-col gap-1">
          <NuxtLink to="tel:+998908887766">+7 (496) 614-15-15 </NuxtLink>
          <NuxtLink to="tel:+998908887766"> +7 (926) 025-57-67 </NuxtLink>
          <NuxtLink to="tel:+998908887766">+7 (985) 025-55-66 </NuxtLink>
        </div>

        <div class="flex gap-4 items-center py-2">
          <NuxtLink to="/">
            <img src="~/assets/icons/telegram.svg" alt="Icon" class="w-7 h-7" />
          </NuxtLink>
          <NuxtLink to="/">
            <img src="~/assets/icons/whatsapp.svg" alt="Icon" class="w-7 h-7" />
          </NuxtLink>
          <h4>спросить в мессенджере</h4>
        </div>
        <NuxtLink to="/" class="flex gap-2 items-center">
            <img src="~/assets/icons/VK.svg" alt="Icon" class="w-7 h-7" />
            Наша круппа в ВКонтакте
          </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
