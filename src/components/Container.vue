<template>
  <div class="pl-0 flex justify-between">
    <NavDesktop/>
    <RouterView class="lg:pl-24 inlay" id="content"></RouterView>
  </div>
</template>
<script setup lang="js">

import NavDesktop from "@/components/Header/NavDesktop.vue";
</script>