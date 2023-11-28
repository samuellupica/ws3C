<template>
  <nav class="max-lg:hidden pr-5 pl-5 top-0 gap-1 border-r border-yellowish-green" :style="{ minHeight: navHeight }">
    <div class="sticky top-24 flex justify-between desktop-navigation gap-8 h-1/2 overflow-auto">
      <RouterLink v-for="(item, index) in items" :key="index" :to="item.path">
        {{ item.name }}
      </RouterLink>
    </div>
  </nav>
</template>
<script setup lang="js">
import {onMounted, ref} from 'vue'
import router from "@/router";

const navHeight = ref('auto')
const items = ref([]);

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
<style>
.desktop-navigation {
  writing-mode: vertical-rl;
  rotate: 180deg;
}
</style>
