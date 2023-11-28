<template>
  <v-text-field :label="inputLabel" variant="outlined" rounded="0" hide-details class="mb-2.5">
  </v-text-field>
</template>
<script setup lang="ts">
defineProps({
  inputLabel: String,
})
</script>