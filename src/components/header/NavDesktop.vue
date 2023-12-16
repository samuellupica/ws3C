<template>
  <nav class="desktop-navigation">
    <div class="desktop-navigation-sidebar">
      <RouterLink class="scale-up" v-for="(item, index) in items" :key="index" :to="item.path" :class="router.currentRoute.value.path === item.path ? '!font-bold' : ''">
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="js">
import { ref } from 'vue'
import router from '@/router'
const items = ref([])

router.options.routes.forEach((route) => {
  if (route.meta.isNavItem) {
    items.value.push({
      name: route.name,
      path: route.path
    })
  }
})
</script>
