<template>
  <div>
    <h2>About us 关于</h2>
    <div class="grid lg:grid-cols-5 gap-8">
      <img src="/images/head-model.jpeg" loading="lazy" alt="About us" class="max-h-[400px] w-full object-cover aspect-[5/3] lg:col-span-3 invert" />
      <p class="lg:col-span-2">
        Willkommen bei TierischAnders – Ihrem Partner für einzigartige Mobilitätslösungen und stilvolle Accessoires für unsere tierischen Gefährten. Bei uns geht es nicht nur darum, das Leben von
        Hunden und anderen Tieren zu erleichtern, sondern auch darum, ihre Individualität zu unterstreichen. Entdecken Sie unsere hochwertigen Rollstühle und exklusiven Accessoires, die nicht nur
        funktional, sondern auch ein Statement sind. Erfahren Sie mehr über unsere Mission, unser Engagement und die Menschen, die hinter TierischAnders stehen. Zusammen schaffen wir eine Welt, in der
        Tiere ihren ganz eigenen, besonderen Platz haben.
      </p>
    </div>
  </div>
</template>
<script setup lang="js">
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  document.body.className = 'about'
})
</script>

<style>
.invert {
  -webkit-filter: invert(1);
  transition: all ease-in-out 0.3s;
}

@media screen and (min-width: 1024px) {
  .invert:hover {
    -webkit-filter: invert(0);
    transform: scale(0.95);
  }
}

</style>
