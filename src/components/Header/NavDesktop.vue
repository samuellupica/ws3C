<template>
  <nav class="max-lg:hidden pr-5 pl-5 top-0 gap-1 border-r" :style="{ minHeight: navHeight}">
    <div class="sticky top-24 flex justify-between desktop-navigation gap-8 h-1/2 overflow-auto">
      <p>Shop</p>
      <p>Contact</p>
      <p>About us</p>
    </div>
  </nav>

</template>
<script setup lang="js">
import {onMounted, ref} from "vue";

const navHeight = ref('auto');

const updateNavHeight = () => {
  const headerHeight = document.querySelector('header').offsetHeight;
  const footerHeight = document.querySelector('footer').offsetHeight;
  const clientHeight = document.documentElement.clientHeight;
  navHeight.value = (clientHeight - headerHeight - footerHeight) + 'px';
}

onMounted(() => {
  updateNavHeight();
  window.addEventListener('resize', updateNavHeight);
})
</script>
<style>
.desktop-navigation {
  writing-mode: vertical-rl;
  rotate: 180deg;
}
</style>