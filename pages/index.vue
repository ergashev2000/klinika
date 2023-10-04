<template>
  <MainLayout>
    <Hero />
    <Consultant />
    <Discount />
    <Services />
    <Steps />
    <Doctors />
    <ServiceCategory />
    <Reviews />
    <Licenses />
    <Registration />
    <Contact />
  </MainLayout>
</template>

<script lang="ts" setup>
import Hero from "~/components/Hero.vue";
import Consultant from "~/components/Consultant.vue";
import Discount from "~/components/Discount.vue";
import Services from "~/components/Services.vue";
import Steps from "~/components/Steps.vue";
import Doctors from "~/components/Doctors.vue";
import ServiceCategory from "~/components/ServiceCategory.vue";
import Reviews from "~/components/Reviews.vue";
import Licenses from "~/components/Licenses.vue";
import Registration from "~/components/Registration.vue";
import Contact from "~/components/Contact.vue";
import MainLayout from "~/layouts/MainLayout.vue";
</script>

<style scoped></style>
