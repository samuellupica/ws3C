<template>
  <header>
    <div class="sticky absolute top-0">
      <div class="header-logo">
        <h3 @click="router.push('/')" class="scale-up cursor-pointer">Tierisch anders</h3>
      </div>
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
