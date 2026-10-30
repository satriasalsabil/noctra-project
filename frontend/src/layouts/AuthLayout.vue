<script setup lang="ts">
import SkipLink from '@/components/layout/SkipLink.vue'
</script>

<template>
  <div class="min-h-screen bg-linen lg:grid lg:grid-cols-2">
    <SkipLink />

    <aside class="relative hidden overflow-hidden bg-forest p-12 text-linen lg:flex lg:flex-col lg:justify-between">
      <RouterLink
        to="/"
        class="font-serif text-2xl uppercase tracking-[0.18em] text-paper"
        aria-label="NOCTRA home"
      >
        NOCTRA
      </RouterLink>

      <div class="max-w-sm space-y-4">
        <p class="font-serif text-4xl leading-[1.15] text-paper">
          Modern classics, kept in your archive.
        </p>
        <p class="text-sm font-light leading-relaxed text-linen/70">
          Sign in to follow your orders, keep a wishlist, and move through checkout faster.
        </p>
      </div>

      <p class="text-[10px] uppercase tracking-[0.2em] text-linen/50">
        Heritage-inspired essentials
      </p>
    </aside>

    <div class="flex min-h-screen flex-col">
      <div class="flex items-center justify-between px-5 py-5 lg:px-12">
        <RouterLink
          to="/"
          class="font-serif text-xl uppercase tracking-[0.18em] text-forest lg:hidden"
          aria-label="NOCTRA home"
        >
          NOCTRA
        </RouterLink>

        <RouterLink
          to="/"
          class="ml-auto inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-forest"
        >
          Back to shop
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>

      <main id="main-content" class="flex flex-1 items-center justify-center px-5 py-10 lg:px-12">
        <div class="w-full max-w-sm">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
