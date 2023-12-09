<template>
  <div class="pl-0 flex grow" :class="router.currentRoute.value.path === 'home' ? 'justify-between' : ''">
    <NavDesktop />
    <RouterView class="lg:pl-24 inlay fade-in" id="content"></RouterView>
  </div>
</template>
<script setup lang="js">
import NavDesktop from '@/components/header/NavDesktop.vue'
import router from '@/router'
</script>
