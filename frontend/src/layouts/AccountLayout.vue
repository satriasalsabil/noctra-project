<script setup lang="ts">
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SkipLink from '@/components/layout/SkipLink.vue'

interface AccountLink {
  label: string
  to: string
  exact?: boolean
}

const accountLinks: AccountLink[] = [
  { label: 'Profile', to: '/account', exact: true },
  { label: 'Orders', to: '/account/orders' },
  { label: 'Wishlist', to: '/account/wishlist' },
  { label: 'Addresses', to: '/account/addresses' },
  { label: 'Security', to: '/account/security' },
]

function isCurrent(link: AccountLink, isActive: boolean, isExactActive: boolean): boolean {
  return link.exact ? isExactActive : isActive
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-linen">
    <SkipLink />
    <SiteHeader />

    <main id="main-content" class="flex-1">
      <div class="container-page py-10 md:py-14">
        <div class="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
          <aside class="min-w-0">
            <p class="font-serif text-2xl text-forest">My Account</p>

            <nav aria-label="Account" class="mt-4 border-b border-line lg:border-b-0">
              <ul
                class="flex gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-line"
              >
                <li v-for="link in accountLinks" :key="link.to" class="shrink-0">
                  <RouterLink v-slot="{ href, navigate, isActive, isExactActive }" :to="link.to" custom>
                    <a
                      :href="href"
                      :aria-current="isCurrent(link, isActive, isExactActive) ? 'page' : undefined"
                      class="-mb-px block whitespace-nowrap border-b-2 px-3 py-3 text-xs tracking-wide transition-colors lg:mb-0 lg:border-b-0 lg:border-l-2 lg:py-2.5"
                      :class="
                        isCurrent(link, isActive, isExactActive)
                          ? 'border-forest text-forest'
                          : 'border-transparent text-muted hover:text-forest'
                      "
                      @click="navigate"
                    >
                      {{ link.label }}
                    </a>
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </aside>

          <div class="min-w-0">
            <RouterView />
          </div>
        </div>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
