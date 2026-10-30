<script setup lang="ts">
import ProductCard from '@/components/ui/ProductCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { featuredProducts } from '@/data/homepage'
</script>

<template>
  <section id="featured" class="container-page py-10" aria-labelledby="featured-heading">
    <SectionHeader
      title="Selected for You"
      title-id="featured-heading"
      link-label="View all"
      link-href="#"
    />
    <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-6">
      <ProductCard
        v-for="product in featuredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
