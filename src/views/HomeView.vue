<template>
    <div class="flex flex-col justify-between lg:flex-row" :style="{ height: contentHeight }">
      <div class="flex flex-col">
        <h1>Tierisch</h1>
        <p class="max-w-[450px]">Mir geht es darum, dass ich Tieren und ihren Haltern helfen kann, wenn die Tiere Behindert sind oder werden.
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

const contentHeight = ref('auto')
const updateHeight = () => {
  const footerHeight = document.querySelector('footer').offsetHeight;
  const headerHeight = document.querySelector('header').offsetHeight;
  const clientHeight = document.documentElement.clientHeight;
  const contentElement = document.getElementById('content');
  const contentPadding = parseInt(window.getComputedStyle(contentElement).getPropertyValue('padding-top'));
console.log(contentPadding)
  contentHeight.value = (clientHeight - footerHeight - headerHeight - 2*contentPadding) + 'px'
}

onMounted(() => {
  updateHeight();
  window.addEventListener('resize', updateHeight)
})
</script>