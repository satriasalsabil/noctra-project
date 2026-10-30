<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'

const route = useRoute()

const title = computed(() =>
  typeof route.meta.title === 'string' ? route.meta.title : 'This page',
)
</script>

<template>
  <section class="container-page py-20 md:py-28">
    <div class="mx-auto max-w-xl text-center">
      <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-leather">Coming soon</p>
      <h1 class="mt-3 font-serif text-3xl leading-tight text-forest md:text-4xl">{{ title }}</h1>
      <p class="mt-4 text-sm leading-relaxed text-muted">
        The route and layout are in place. This screen is built in a later stage, once the design
        system and the catalogue pages are ready.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <BaseButton as="router-link" to="/" variant="primary">Back to home</BaseButton>
        <BaseButton as="router-link" to="/shop" variant="outline">Browse the shop</BaseButton>
      </div>
    </div>
  </section>
</template>
