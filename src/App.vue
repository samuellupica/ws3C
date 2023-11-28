<template>
  <div :class="router.currentRoute.value.path === '/' ? 'bg-home default-page' : 'default-page'"
       :style="`background-color: ${$route.meta.color}`">
    <Header/>
    <Container/>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Container from "@/components/Container.vue";
</script>
<style>
.bg-home {
  @apply bg-[url(../../images/dog-violet.png)] bg-cover absolute bottom-0 top-0 left-0 w-screen h-screen;
  background-position: 25% 75%;

}
</style>

