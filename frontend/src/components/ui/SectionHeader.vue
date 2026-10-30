<script setup lang="ts">
defineProps<{
  title: string
  titleId?: string
  linkLabel?: string
  linkHref?: string
}>()
</script>

<template>
  <div class="mb-8 flex items-baseline justify-between gap-4 border-b border-line pb-3">
    <h2 :id="titleId" class="font-serif text-2xl text-forest md:text-3xl">{{ title }}</h2>
    <a
      v-if="linkLabel"
      :href="linkHref ?? '#'"
      class="group inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-forest"
    >
      {{ linkLabel }}
      <span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5">→</span>
    </a>
  </div>
</template>
