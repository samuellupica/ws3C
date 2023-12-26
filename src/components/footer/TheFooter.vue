<template>
  <footer class="mt-auto">
    <div class="inlay mt-auto w-full flex py-5 justify-between !border-yellowish-green !border-t">
      <div class="flex w-full max-lg:justify-between lg:flex-col">
        <RouterLink v-for="(item, index) in footerItems" :key="index" :to="item.path" :class="router.currentRoute.value.path === item.path ? '!font-bold' : ''">
          {{ item.name }}
        </RouterLink>
      </div>
      <span class="max-lg:hidden text-end font-bold">
        <span>Sonja Tschudin </span>
        <span>Balmisriedweg 1</span>
        <span><br />4116 Metzerlen </span>
        <a href="tel:061 311 50 59" class="font-normal"><br />061 311 50 59</a>
      </span>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const footerItems = ref([])

router.options.routes.forEach((route) => {
  if (!route.meta.isNavItem && route.path !== '/') {
    footerItems.value.push({
      name: route.name,
      path: route.path
    })
  }
})
</script>
