<script setup lang="ts">
import AppIcon from '@/components/ui/AppIcon.vue'
import { footerColumns, socialLinks } from '@/data/homepage'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-forest-dark bg-forest pb-12 pt-16 text-linen/70">
    <div class="container-page">
      <div class="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12">
        <div class="space-y-3 md:col-span-3">
          <h2 class="font-serif text-2xl uppercase tracking-[0.18em] text-paper">NOCTRA</h2>
          <p class="max-w-xs text-xs font-light leading-relaxed text-linen/70">
            Modern classics. Lasting quality.
          </p>
        </div>

        <div
          v-for="column in footerColumns"
          :key="column.title"
          class="space-y-3 md:col-span-2"
        >
          <h3 class="text-[11px] font-semibold uppercase tracking-[0.14em] text-paper">
            {{ column.title }}
          </h3>
          <ul class="space-y-2 text-xs font-light text-linen/70">
            <li v-for="link in column.links" :key="link.label">
              <a :href="link.href" class="transition-colors hover:text-paper">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="space-y-3 md:col-span-3">
          <h3 class="text-[11px] font-semibold uppercase tracking-[0.14em] text-paper">
            Join Our Newsletter
          </h3>
          <p class="text-[11px] font-light leading-normal text-linen/70">
            Get the latest look news and exclusive offers.
          </p>
          <form class="mt-2 flex items-center" @submit.prevent>
            <label for="newsletter-email" class="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              class="w-full border border-white/20 bg-forest-dark px-3 py-2.5 text-xs text-paper placeholder:text-linen/60 focus:border-linen/60 focus:outline-none"
            >
            <button
              type="submit"
              class="border border-l-0 border-white/20 bg-forest-soft px-3 py-2.5 text-paper transition-colors hover:bg-[#385945]"
              aria-label="Subscribe"
            >
              <AppIcon name="arrow-right" class="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div
        class="flex flex-col items-center justify-between gap-4 pt-8 text-xs font-light text-linen/70 md:flex-row"
      >
        <p>© {{ year }} NOCTRA. All rights reserved.</p>
        <div class="flex items-center gap-4 text-linen/60">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            class="transition-colors hover:text-paper"
          >
            <AppIcon :name="social.icon" class="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
