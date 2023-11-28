<template>
  <nav class="desktop-navigation" :style="{ minHeight: navHeight }">
    <div class="desktop-navigation-sidebar">
      <RouterLink class="scale-up my-5" v-for="(item, index) in items" :key="index" :to="item.path" :class="router.currentRoute.value.path === item.path ? '!font-bold' : ''">
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="js">
import { onMounted, ref } from 'vue'
import router from '@/router'

const navHeight = ref('auto')
const items = ref([])

router.options.routes.forEach((route) => {
  if (route.name !== 'home') {
    items.value.push({
      name: route.name,
      path: route.path
    })
  }
})

const updateNavHeight = () => {
  const headerHeight = document.querySelector('header').offsetHeight
  const footerHeight = document.querySelector('footer').offsetHeight
  const clientHeight = document.documentElement.clientHeight
  navHeight.value = clientHeight - headerHeight - footerHeight + 'px'
}

onMounted(() => {
  updateNavHeight()
  window.addEventListener('resize', updateNavHeight)
})
</script>
<style></style>
