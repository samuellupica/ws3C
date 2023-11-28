<template>
<v-btn variant="outlined" rounded="0" class="w-full">
  {{ buttonLable }}
</v-btn>
</template>
<script setup lang="ts">
defineProps<{
  buttonLable?: String
}>()
</script>