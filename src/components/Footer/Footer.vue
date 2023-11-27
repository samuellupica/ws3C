<!--TODO: adjust items styling-->
<template>
  <div class="inlay  w-full flex py-5 justify-between border-yellowish-green border-t">
    <div class="max-lg:flex w-full justify-between">
      <p v-for="item in items">
        {{ item.valueOf() }}
      </p>
    </div>
    <span class="max-lg:hidden text-end font-bold">
      <span>Sonja Tschudin </span>
      <span>Balmisriedweg 1</span>
      <span><br>4116 Metzerlen </span>
      <span class="font-normal"><br>061 311 50 59 </span>
    </span>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const items = ref(['AGB', 'Datenschutz', 'Impressum'])

</script>