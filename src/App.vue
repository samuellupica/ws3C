<template>
  <div class="min-h-screen flex flex-col" :class="router.currentRoute.value.path === '/' ? 'bg-home' : ''"
       :style="`background-color: ${$route.meta.color}`">
    <header>
      <Header/>
    </header>
    <div class=" pl-0 flex justify-between">
      <div class="max-lg:hidden  py-24 pr-5 pl-5 top-0 gap-1 border-r" :style="{ minHeight: navHeight}">
        <div class="sticky top-24 flex justify-between desktop-navigation gap-8 h-1/2 overflow-auto">
          <p>Shop</p>
          <p>Contact</p>
          <p>About us</p>
        </div>
      </div>

      <RouterView class="lg:pl-24 inlay" id="content"></RouterView>
    </div>
    <footer class="mt-auto">
      <Footer/>
    </footer>
  </div>
</template>
<script setup lang="js">
import {RouterLink, RouterView} from 'vue-router'
import router from "@/router";
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";
import Navigation from "@/components/Header/NavMobile.vue";
import {onBeforeMount, onMounted, ref} from "vue";

const navHeight = ref('auto');

const updateNavHeight = () => {
  const headerHeight = document.querySelector('header').offsetHeight;
  const footerHeight = document.querySelector('footer').offsetHeight;
  const clientHeight = document.documentElement.clientHeight;
  navHeight.value = (clientHeight - headerHeight - footerHeight) + 'px';
}

onMounted(() => {
  updateNavHeight();
  window.addEventListener('resize', updateNavHeight);
})
</script>


<style>
.bg-home {
  @apply bg-[url(../../images/dog-violet.png)] bg-cover absolute bottom-0 top-0 left-0 w-screen h-screen;
  background-position: 25% 75%;

}

.desktop-navigation {
  writing-mode: vertical-rl;
  rotate: 180deg;
}
</style>

