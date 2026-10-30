<script setup lang="ts">
interface AdminLink {
  label: string
  to: string
  exact?: boolean
}

const adminLinks: AdminLink[] = [
  { label: 'Dashboard', to: '/admin', exact: true },
  { label: 'Orders', to: '/admin/orders' },
  { label: 'Products', to: '/admin/products' },
  { label: 'Categories', to: '/admin/categories' },
  { label: 'Customers', to: '/admin/customers' },
  { label: 'Inventory', to: '/admin/inventory' },
  { label: 'Reports', to: '/admin/reports' },
  { label: 'Promotions', to: '/admin/promotions' },
  { label: 'Settings', to: '/admin/settings' },
]

function isCurrent(link: AdminLink, isActive: boolean, isExactActive: boolean): boolean {
  return link.exact ? isExactActive : isActive
}
</script>

<template>
  <ul class="space-y-0.5">
    <li v-for="link in adminLinks" :key="link.to">
      <RouterLink v-slot="{ href, navigate, isActive, isExactActive }" :to="link.to" custom>
        <a
          :href="href"
          :aria-current="isCurrent(link, isActive, isExactActive) ? 'page' : undefined"
          class="flex items-center justify-between px-3 py-2.5 text-[13px] tracking-wide transition-colors"
          :class="
            isCurrent(link, isActive, isExactActive)
              ? 'bg-linen/10 text-paper'
              : 'text-linen/70 hover:bg-linen/5 hover:text-paper'
          "
          @click="navigate"
        >
          {{ link.label }}
          <span
            v-if="isCurrent(link, isActive, isExactActive)"
            aria-hidden="true"
            class="h-1.5 w-1.5 rounded-full bg-linen/70"
          />
        </a>
      </RouterLink>
    </li>
  </ul>
</template>
