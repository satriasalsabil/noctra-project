<script setup lang="ts">
import { ref } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { primaryNav } from '@/data/homepage'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-line bg-linen/95 backdrop-blur-md"
    @keydown.esc="mobileMenuOpen = false"
  >
    <div class="container-page flex h-16 items-center justify-between gap-4 md:h-20">
      <button
        type="button"
        class="p-1 text-charcoal transition-colors hover:text-forest lg:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <AppIcon :name="mobileMenuOpen ? 'close' : 'menu'" class="h-6 w-6" />
      </button>

      <RouterLink
        to="/"
        class="font-serif text-2xl uppercase tracking-[0.18em] text-forest md:text-3xl lg:text-4xl"
        aria-label="NOCTRA home"
      >
        NOCTRA
      </RouterLink>

      <nav
        class="hidden items-center gap-7 text-[13px] tracking-wide text-charcoal/80 lg:flex lg:gap-8"
        aria-label="Primary"
      >
        <RouterLink
          v-for="link in primaryNav"
          :key="link.to"
          :to="link.to"
          class="transition-colors hover:text-forest"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-3 text-charcoal/80 md:gap-5">
        <button
          type="button"
          class="p-1 transition-colors hover:text-forest"
          aria-label="Search"
        >
          <AppIcon name="search" class="h-5 w-5" />
        </button>
        <RouterLink
          to="/account"
          class="hidden p-1 transition-colors hover:text-forest sm:block"
          aria-label="Account"
        >
          <AppIcon name="user" class="h-5 w-5" />
        </RouterLink>
        <RouterLink
          to="/account/wishlist"
          class="hidden p-1 transition-colors hover:text-forest sm:block"
          aria-label="Wishlist"
        >
          <AppIcon name="heart" class="h-5 w-5" />
        </RouterLink>
        <RouterLink
          to="/cart"
          class="p-1 transition-colors hover:text-forest"
          aria-label="Shopping bag"
        >
          <AppIcon name="bag" class="h-5 w-5" />
        </RouterLink>
      </div>
    </div>

    <Transition name="menu">
      <nav
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="border-t border-line bg-linen lg:hidden"
        aria-label="Mobile"
      >
        <ul class="container-page divide-y divide-line/70 py-2">
          <li v-for="link in primaryNav" :key="link.to">
            <RouterLink
              :to="link.to"
              class="block py-3 text-sm tracking-wide text-charcoal/80 transition-colors hover:text-forest"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 200ms ease,
    transform 200ms ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
