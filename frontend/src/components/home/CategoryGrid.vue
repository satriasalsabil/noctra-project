<script setup lang="ts">
import CategoryCard from '@/components/ui/CategoryCard.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { categories } from '@/data/homepage'
</script>

<template>
  <section id="categories" class="container-page pb-16 pt-20" aria-labelledby="categories-heading">
    <SectionHeader
      title="Shop by Category"
      title-id="categories-heading"
      link-label="View all"
      link-href="#"
    />
    <div class="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-6">
      <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
    </div>
  </section>
</template>
