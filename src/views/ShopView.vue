<template>
  <div>
    <h2>Shop 商店</h2>
    <p class="mb-12">
      Willkommen im TierischAnders-Shop – Deiner Anlaufstelle für einzigartige Produkte! Entdecke eine breite Palette von hochwertigen Artikeln, die deinen Alltag verschönern. Von trendigen
      Accessoires bis zu praktischen Gadgets – wir bieten qualitativ herausragende Produkte zu unschlagbaren Preisen. Tauche ein und finde, was du liebst!
    </p>
    <div class="grid md:grid-cols-12 gap-2.5">
      <div v-for="(product, index) in products" :key="product.id" :class="`tile product-tile-${(index % 4) + 1}`">
        <img loading="lazy" :src="'/images/products/' + product.imageTitle + '.png'" :alt="product.title" class="max-h-[400px] h-full object-cover max-md:aspect-square" />
        <div class="flex justify-between max-lg:flex-col p-4 items-center grow">
          <span>{{ product.title }}</span>
          <span>{{ product.price }} CHF</span>
        </div>
        <div v-if="productsLoaded" class="overlay" />
        <div v-if="productsLoaded" class="product-details">
          <div class="text-h4 mx-4">{{ product.title }}</div>
          <p class="m-4 text-center">{{ product.description }}</p>
          <v-icon v-if="product.inStock" icon="mdi-cart" class="cursor-pointer" />
          <span class="font-bold" v-else>Out of Stock</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import productData from '../assets/db/db.json'
import { computed, onBeforeMount, onMounted, ref } from 'vue'

const products = computed(() => productData.products)
const productsLoaded = ref(false)
onMounted(() => {
  setTimeout(() => {
    productsLoaded.value = true
  }, 1000)
})

onBeforeMount(() => {
  document.body.className = 'shop'
})
</script>
<style scoped>
body {
  @apply bg-bluish-purple;
}

.overlay {
  @apply left-0 bottom-full h-0 w-full overflow-hidden bg-indigo-950 absolute opacity-80 flex flex-col justify-center items-center;
  transition: all 0.3s ease-in-out;
}

.product-details {
  @apply flex flex-col items-center h-fit m-auto absolute opacity-0 top-0 left-0 bottom-0 right-0;
}

.tile:hover .product-details {
  @apply opacity-100;
  transition: all 0.6s;
}

.tile {
  @apply flex flex-col w-full max-h-[500px] !border-yellowish-green !border relative;
}

.tile:hover > .overlay {
  @apply bottom-0 h-full;
}

.product-tile-1 {
  @apply md:col-span-8 h-full md:aspect-[2/1];
}

.product-tile-2 {
  @apply md:col-span-4;
}

.product-tile-3 {
  @apply md:col-span-5;
}

.product-tile-4 {
  @apply md:col-span-7 h-full md:aspect-[7/5];
}
</style>
