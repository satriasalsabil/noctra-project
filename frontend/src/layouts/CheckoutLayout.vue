<script setup lang="ts">
import SkipLink from '@/components/layout/SkipLink.vue'
import AppIcon from '@/components/ui/AppIcon.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-linen">
    <SkipLink />

    <header class="border-b border-line bg-paper">
      <div class="container-page flex h-16 items-center justify-between gap-4">
        <RouterLink
          to="/"
          class="font-serif text-xl uppercase tracking-[0.18em] text-forest"
          aria-label="NOCTRA home"
        >
          NOCTRA
        </RouterLink>

        <p class="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-muted sm:text-[11px]">
          <AppIcon name="lock" class="h-4 w-4" />
          Secure Checkout
        </p>
      </div>
    </header>

    <main id="main-content" class="flex-1">
      <RouterView />
    </main>

    <footer class="border-t border-line">
      <p class="container-page py-6 text-center text-[11px] font-light tracking-wide text-muted">
        256-bit SSL encrypted · Payments processed by Midtrans
      </p>
    </footer>
  </div>
</template>
