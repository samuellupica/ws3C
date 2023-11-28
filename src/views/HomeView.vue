<template>
    <div class="flex flex-col justify-between lg:flex-row w-full" :style="{ height: contentHeight }">
      <div class="flex flex-col">
        <h1 class="w-max" id="tierisch-heading-1">Tierisch</h1>
        <p :style="{ maxWidth: textWidth}">Mir geht es darum, dass ich Tieren und ihren Haltern helfen kann, wenn die Tiere Behindert sind oder werden.
          Für
          die Halter ist es oft eine neue, schwierige Situation, wobei ich unterstützend mit vielen Infos weiterhelfen
          kann.</p>
      </div>
      <div class="flex justify-end">
        <h1>anders</h1>
      </div>
  </div>
</template>
<script setup lang="js">
import {onMounted, ref} from "vue";

const contentHeight = ref('auto');
const textWidth = ref('auto');

const updateWidth = () => {
  textWidth.value = document.getElementById('tierisch-heading-1').offsetWidth + 'px';
}

const updateHeight = () => {
  const footerHeight = document.querySelector('footer').offsetHeight;
  const headerHeight = document.querySelector('header').offsetHeight;
  const clientHeight = document.documentElement.clientHeight;
  contentHeight.value = (clientHeight - footerHeight - headerHeight) + 'px'
}

onMounted(() => {
  updateHeight();
  updateWidth();
  window.addEventListener(("resize"), () => {
    updateWidth();
    updateHeight();
  })
})
</script>
