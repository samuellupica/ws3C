<template>
  <div>
    <h2>Kontakt 联系</h2>
    <p class="mb-12">
      Bitte füllen Sie untenstehende Felder aus. Sie erhalten nach Absenden der Anfrage eine Bestätigung an Ihre Mail-Adresse. Ich werde mich bemühen, Ihre Frage oder Ihr Anliegen innert 48 Stunden*
      zu beantworten.
    </p>
    <FormContact first-name-label="Vorname" last-name-label="Nachname" email-label="E-Mail"></FormContact>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import FormContact from '@/components/form/FormContact.vue'

export default defineComponent({
  components: { FormContact }
})
</script>
