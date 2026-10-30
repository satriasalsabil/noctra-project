<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section class="container-page py-20 md:py-28">
    <div class="mx-auto max-w-xl text-center">
      <p class="font-serif text-6xl leading-none text-forest/60 md:text-7xl">404</p>
      <h1 class="mt-4 font-serif text-3xl leading-tight text-forest md:text-4xl">
        This page has wandered off
      </h1>
      <p class="mt-4 text-sm leading-relaxed text-muted">
        The link may be broken, or the page may have moved. Let us guide you back to familiar
        ground.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <BaseButton as="router-link" to="/" variant="primary">Back to home</BaseButton>
        <BaseButton as="router-link" to="/shop" variant="outline">Browse the shop</BaseButton>
      </div>
    </div>
  </section>
</template>
