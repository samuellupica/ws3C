<template>
  <v-textarea :label="textLabel" variant="outlined" rounded="0"
  ></v-textarea>
</template>
<script setup lang="ts">
defineProps({
  textLabel: String
})
</script>