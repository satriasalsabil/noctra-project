<script setup lang="ts">
import type { Category } from '@/types/product'

defineProps<{ category: Category }>()
</script>

<template>
  <a :href="category.href" class="group relative block overflow-hidden bg-stone-warm">
    <div class="aspect-[4/3] overflow-hidden md:aspect-[4/5]">
      <img
        :src="category.image"
        :alt="category.imageAlt"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
    </div>
    <div class="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
    <span
      class="absolute bottom-4 left-4 font-serif text-sm tracking-wide text-white md:text-base"
    >
      {{ category.name }}
    </span>
  </a>
</template>
