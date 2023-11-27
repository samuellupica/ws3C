<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import router from "@/router";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
</script>

<template>

<!--  <div >-->
  <div class="min-h-screen flex flex-col" :class="router.currentRoute.value.path === '/' ? 'bg-home' : ''" :style="`background-color: ${$route.meta.color}`">
    <header>
      <Header/>
    </header>
    <div class="inlay" id="content"><RouterView/></div>
    <footer class="mt-auto">
      <Footer/>
    </footer>
  </div>

</template>

<style>
.bg-home {
  @apply bg-[url(../../images/dog-violet.png)] bg-cover absolute bottom-0 top-0 left-0 w-screen h-screen;
  background-position: 25% 75%;

}
</style>

