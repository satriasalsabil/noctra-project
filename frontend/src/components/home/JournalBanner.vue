<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <section id="journal" class="container-page py-16" aria-labelledby="journal-heading">
    <div
      class="relative flex h-[360px] w-full items-center overflow-hidden bg-charcoal md:h-[420px]"
    >
      <img
        src="/images/journal-banner.jpg"
        alt="Mountain landscape at dusk"
        loading="lazy"
        class="absolute inset-0 h-full w-full object-cover brightness-[0.65]"
      >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-transparent"
      />

      <div class="relative max-w-xl space-y-3 px-8 text-white md:px-16">
        <h2 id="journal-heading" class="font-serif text-3xl tracking-wide md:text-4xl">
          The NOCTRA Journal
        </h2>
        <p class="pb-3 text-xs font-light leading-relaxed text-stone-300 md:text-sm">
          Stories, style and a closer look at what inspires us.
        </p>
        <BaseButton as="a" href="#journal" variant="outline-light" size="sm">
          <span>Explore</span>
          <span aria-hidden="true">→</span>
        </BaseButton>
      </div>
    </div>
  </section>
</template>
