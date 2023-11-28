<template>
  <header>
    <div class="sticky absolute top-0" :style="`background-color: ${$route.meta.color}`">
      <h3 @click="router.push('/')" class="header-logo">Tierisch anders</h3>
      <div class="lg:hidden">
        <Navigation />
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import router from '@/router'
import Navigation from '@/components/header/NavMobile.vue'
</script>
<style></style>
