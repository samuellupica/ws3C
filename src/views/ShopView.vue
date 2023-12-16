<template>
  <div>
    <h2>Shop 商店</h2>
    <p class="mb-12">
      Willkommen im TierischAnders-Shop – Deiner Anlaufstelle für einzigartige Produkte! Entdecke eine breite Palette von hochwertigen Artikeln, die deinen Alltag verschönern. Von trendigen
      Accessoires bis zu praktischen Gadgets – wir bieten qualitativ herausragende Produkte zu unschlagbaren Preisen. Tauche ein und finde, was du liebst!
    </p>
    <div class="grid md:grid-cols-12 gap-2.5">
      <div v-for="(product, index) in products" :key="product.id" :class="`tile product-tile-${(index % 4) + 1}`">
        <img loading="lazy" :src="'/images/products/' + product.imageTitle + '.png'" alt="" class="max-h-[400px] h-full object-cover max-md:aspect-square" />
        <div class="flex justify-between max-lg:flex-col p-8 items-center">
          <span>{{ product.title }}</span>
          <span>{{ product.price }} CHF</span>
        </div>
        <div class="overlay">
          <div class="text-h4">{{ product.title }}</div>
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
import { computed } from 'vue'

const products = computed(() => productData.products)
</script>
<style>
.overlay {
  @apply left-0 bottom-full h-0 w-full overflow-hidden absolute backdrop-blur-lg brightness-90 flex flex-col justify-center items-center;
  transition: all 0.4s ease-in-out;
}

.tile {
  @apply flex flex-col w-full max-h-[500px] !border-yellowish-green !border relative;
}

.tile:hover > .overlay {
  @apply bottom-0 h-full;
}

.product-tile-1 {
  @apply md:col-span-8 md:aspect-[2/1];
}

.product-tile-2 {
  @apply md:col-span-4;
}

.product-tile-3 {
  @apply md:col-span-5;
}

.product-tile-4 {
  @apply md:col-span-7 md:aspect-[7/5];
}
</style>
