<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue'
import type { Product } from '@/types/product'
import { formatPrice } from '@/utils/format'

defineProps<{ product: Product }>()
</script>

<template>
  <article class="group relative flex flex-col">
    <div class="relative flex aspect-square items-center justify-center overflow-hidden bg-stone-warm p-6">
      <button
        type="button"
        class="absolute right-2 top-2 z-10 p-2 text-charcoal/40 transition-colors hover:text-forest"
        :aria-label="`Add ${product.name} to wishlist`"
      >
        <AppIcon name="heart" class="h-4 w-4" />
      </button>

      <a :href="product.href" class="flex h-full w-full items-center justify-center">
        <img
          :src="product.image"
          :alt="product.imageAlt"
          loading="lazy"
          class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        >
      </a>
    </div>

    <div class="flex flex-col pt-3">
      <h3 class="text-xs tracking-wide text-charcoal md:text-sm">
        <a :href="product.href" class="transition-colors hover:text-forest">{{ product.name }}</a>
      </h3>
      <p class="pt-1 text-xs font-medium text-forest md:text-sm">{{ formatPrice(product.price) }}</p>
    </div>
  </article>
</template>
