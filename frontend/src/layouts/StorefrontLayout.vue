<script setup lang="ts">
import AnnouncementBar from '@/components/layout/AnnouncementBar.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader.vue'
import SkipLink from '@/components/layout/SkipLink.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-linen">
    <SkipLink />
    <AnnouncementBar />
    <SiteHeader />

    <main id="main-content" class="flex-1">
      <RouterView />
    </main>

    <SiteFooter />
  </div>
</template>
