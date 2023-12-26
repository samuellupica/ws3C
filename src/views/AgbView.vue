<template>
  <div>
    <h2>AGB 鸡汤</h2>
    <h3>Geltungsbereich</h3>
    <p>
      Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln die vertraglichen Beziehungen zwischen der Firma TierischAnders (nachfolgend "Verkäufer") und ihren Kunden. Durch die Nutzung
      der Website und den Erwerb von Produkten oder Dienstleistungen erklärt sich der Kunde mit diesen AGB einverstanden.
    </p>
    <br />
    <h3>Vertragsabschluss</h3>
    <p>
      Die Angebote des Verkäufers sind unverbindlich und dienen lediglich als Aufforderung zur Abgabe eines Angebots. Durch das Absenden einer Bestellung gibt der Kunde ein verbindliches Angebot zum
      Abschluss eines Kaufvertrags ab. Der Verkäufer behält sich das Recht vor, Bestellungen ohne Angabe von Gründen abzulehnen.
    </p>
    <br />
    <h3>Preise und Zahlung</h3>
    <p>
      Die angegebenen Preise verstehen sich als Endpreise und beinhalten die gesetzliche Mehrwertsteuer. Die Zahlung erfolgt nach individueller Vereinbarung, beispielsweise per Vorkasse, Rechnung oder
      Kreditkarte. Bei Zahlungsverzug behält sich der Verkäufer das Recht vor, Verzugszinsen und Mahngebühren zu erheben.
    </p>
    <br />
    <h3>Lieferung</h3>
    <p>
      Die Lieferung erfolgt gemäß den getroffenen Vereinbarungen, entweder durch den Verkäufer selbst oder durch einen beauftragten Lieferdienst. Die Lieferzeit wird individuell festgelegt, in der
      Regel beträgt sie jedoch zwischen 3 und 5 Werktagen. Der Kunde wird über Verzögerungen oder Änderungen umgehend informiert.
    </p>
    <br />
    <h3>Widerrufsrecht</h3>
    <p>
      Dem Kunden steht ein gesetzliches Widerrufsrecht zu. Die genauen Bedingungen und Fristen sind in der Widerrufsbelehrung auf der Website des Verkäufers ausführlich beschrieben. Um das
      Widerrufsrecht auszuüben, muss der Kunde den Verkäufer schriftlich informieren und die Ware fristgerecht zurücksenden.
    </p>
    <br />
    <h3>Gewährleistung</h3>
    <p>
      Der Verkäufer gewährleistet, dass die gelieferten Produkte frei von Mängeln sind und den geltenden gesetzlichen Bestimmungen entsprechen. Bei Mängeln oder Defekten hat der Kunde das Recht auf
      Nacherfüllung oder Ersatzlieferung. Die gesetzlichen Gewährleistungsfristen gelten.
    </p>
    <br />
    <h3>Haftung</h3>
    <p>
      Die Haftung des Verkäufers beschränkt sich auf Vorsatz und grobe Fahrlässigkeit. Für leicht fahrlässig verursachte Schäden haftet der Verkäufer nur bei Verletzung wesentlicher Vertragspflichten.
      Die Haftung für indirekte Schäden, Folgeschäden oder entgangenen Gewinn ist ausgeschlossen.
    </p>
    <br />
    <h3>Datenschutz</h3>
    <p>
      Die Datenschutzbestimmungen des Verkäufers sind auf der Website einsehbar. Der Verkäufer verpflichtet sich, die persönlichen Daten der Kunden vertraulich zu behandeln und ausschließlich für die
      Abwicklung von Bestellungen und die Kommunikation zu nutzen. Eine Weitergabe an Dritte erfolgt nur im Rahmen der gesetzlichen Bestimmungen.
    </p>
    <br />
    <h3>Schlussbestimmungen</h3>
    <p>
      Es gilt das Recht der Bundesrepublik Deutschland. Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform. Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
      Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
    </p>
  </div>
</template>
<script setup lang="js">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  document.body.className = 'agb'
})
</script>
