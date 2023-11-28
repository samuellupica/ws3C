<template>
  <nav class="flex justify-between inlay !border-b !border-yellowish-green py-2">
    <RouterLink v-for="(item, index) in items" :key="index" :to="item.path" :class="router.currentRoute.value.path === item.path ? '!font-bold' : ''">
      {{ item.name }}
    </RouterLink>
  </nav>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const items = ref([])
router.options.routes.forEach((route) => {
  if (route.name !== 'home') {
    items.value.push({
      name: route.name,
      path: route.path
    })
  }
})
</script>
