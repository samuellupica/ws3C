<template>
  <FormInput v-for="(prop, index) in inputProps" :input-label="prop" :key="index"></FormInput>
  <FormTextArea text-label="Nachricht"> </FormTextArea>
  <VButton button-lable="Senden"></VButton>
</template>
<script setup lang="ts">
import FormInput from '@/components/form/FormInput.vue'
import FormTextArea from '@/components/form/FormTextArea.vue'
import VButton from '@/components/button/VButton.vue'

const inputProps = defineProps<{
  firstNameLabel?: String
  lastNameLabel?: String
  emailLabel?: String
}>()
</script>
