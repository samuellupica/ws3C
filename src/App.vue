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
</script>
