<script setup lang="ts">
import { announcement } from '@/data/homepage'
</script>

<template>
  <aside
    class="border-b border-white/10 bg-forest px-4 py-2.5 text-center text-[10px] font-light uppercase tracking-[0.12em] text-linen/85 sm:text-[11px]"
  >
    {{ announcement }}
  </aside>
</template>
