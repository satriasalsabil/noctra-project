<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AdminNav from '@/components/admin/AdminNav.vue'
import SkipLink from '@/components/layout/SkipLink.vue'
import AppIcon from '@/components/ui/AppIcon.vue'

const route = useRoute()
const navOpen = ref(false)

const pageTitle = computed(() => (typeof route.meta.title === 'string' ? route.meta.title : 'Admin'))

watch(
  () => route.fullPath,
  () => {
    navOpen.value = false
  },
)
</script>

<template>
  <div class="min-h-screen bg-linen lg:flex">
    <SkipLink />

    <aside class="hidden w-64 shrink-0 flex-col bg-forest px-4 py-6 lg:flex">
      <RouterLink
        to="/admin"
        class="px-2 font-serif text-xl uppercase tracking-[0.18em] text-paper"
        aria-label="NOCTRA admin home"
      >
        NOCTRA
      </RouterLink>
      <p class="mt-1 px-2 text-[10px] uppercase tracking-[0.2em] text-linen/50">Admin</p>

      <nav class="mt-8 flex-1" aria-label="Admin">
        <AdminNav />
      </nav>

      <RouterLink
        to="/"
        class="mt-6 flex items-center gap-2 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-linen/60 transition-colors hover:text-paper"
      >
        <AppIcon name="arrow-left" class="h-4 w-4" />
        Storefront
      </RouterLink>
    </aside>

    <div class="flex min-w-0 flex-1 flex-col">
      <header class="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div class="flex h-16 items-center gap-3 px-4 md:px-6 lg:px-8">
          <button
            type="button"
            class="p-1 text-charcoal transition-colors hover:text-forest lg:hidden"
            :aria-expanded="navOpen"
            aria-controls="admin-nav-mobile"
            :aria-label="navOpen ? 'Close admin navigation' : 'Open admin navigation'"
            @click="navOpen = !navOpen"
          >
            <AppIcon :name="navOpen ? 'close' : 'menu'" class="h-5 w-5" />
          </button>

          <p class="truncate font-serif text-lg text-forest">{{ pageTitle }}</p>

          <div class="ml-auto flex items-center gap-4">
            <RouterLink
              to="/"
              class="hidden text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-forest sm:block"
            >
              View store
            </RouterLink>
            <span
              aria-hidden="true"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-[11px] font-medium text-linen"
            >
              RP
            </span>
          </div>
        </div>

        <nav
          v-if="navOpen"
          id="admin-nav-mobile"
          class="border-t border-white/10 bg-forest px-3 py-3 lg:hidden"
          aria-label="Admin mobile"
        >
          <AdminNav />
        </nav>
      </header>

      <main id="main-content" class="flex-1 px-4 py-8 md:px-6 lg:px-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
