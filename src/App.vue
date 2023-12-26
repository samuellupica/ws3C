<template>
  <div :class="router.currentRoute.value.path === '/' ? 'bg-home default-page' : 'default-page'">
    <Header />
    <Container />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import router from '@/router'
import Header from '@/components/header/TheHeader.vue'
import Footer from '@/components/footer/TheFooter.vue'
import Container from '@/components/TheContainer.vue'

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in-body')
  document.body.classList.remove('invisible')
})
</script>
<style>
.bg-home {
  @apply bg-cover absolute bottom-0 top-0 left-0 w-screen h-screen;
  background-position: 25% 75%;
  background-image: url('../../images/dog-violet.jpg');

  @supports (background-image: url('../../images/dog-violet.webp')) {
    background-image: url('../../images/dog-violet.webp');
  }
}
</style>
