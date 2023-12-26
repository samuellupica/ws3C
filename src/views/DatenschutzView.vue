<template>
  <div>
    <h2>Datenschutz 数据保护</h2>
    <h3>Datenschutzerklärung</h3>
    <p>
      Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz "Daten") im Rahmen unserer Website und der mit ihr
      verbundenen Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unseren Social-Media-Profilen auf (nachfolgend gemeinsam bezeichnet als "Onlineangebot"). Im Hinblick auf die
      verwendeten Begrifflichkeiten, wie z.B. "Verarbeitung" oder "Verantwortlicher", verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO
    </p>
    <br />
    <h3>Arten der verarbeiteten Daten</h3>
    <ol class="list-disc list-inside">
      <li>Bestanddaten</li>
      <li>Kontaktdaten</li>
      <li>Inhaltsdaten</li>
      <li>Nutzungsdaten</li>
    </ol>
    <br />
    <h3>Maßgebliche Rechtsgrundlagen</h3>
    <p>
      Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, gilt Folgendes:
      Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung
      vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs.
      1 lit. c DSGVO, und die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.
    </p>
  </div>
</template>
<script setup lang="js">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  document.body.className = 'datenschutz'
})
</script>
