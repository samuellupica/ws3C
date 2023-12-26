<template>
  <div>
    <h2>Impressum 糖醋鸭</h2>
    <span>Impressum folgt bald</span>
  </div>
</template>
<script setup lang="js">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  document.body.className = 'impressum'
})
</script>
