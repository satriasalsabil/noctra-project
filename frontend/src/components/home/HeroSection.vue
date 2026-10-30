<script setup lang="ts">
import { computed, ref } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { heroSlides } from '@/data/homepage'

const activeIndex = ref(0)
const activeSlide = computed(() => heroSlides[activeIndex.value] ?? heroSlides[0])

function goTo(index: number) {
  const total = heroSlides.length
  activeIndex.value = (index + total) % total
}
</script>

<template>
  <section
    class="relative h-[460px] w-full overflow-hidden bg-charcoal md:h-[620px] lg:h-[700px]"
    aria-roledescription="carousel"
    aria-label="Campaign highlights"
  >
    <div
      v-for="(slide, index) in heroSlides"
      :key="slide.id"
      class="absolute inset-0 transition-opacity duration-700"
      :class="index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'"
      :aria-hidden="index !== activeIndex"
    >
      <img
        :src="slide.image"
        :alt="slide.imageAlt"
        class="h-full w-full object-cover object-center brightness-[0.78]"
        :loading="index === 0 ? 'eager' : 'lazy'"
      >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent"
      />
    </div>

    <div
      class="container-page relative flex h-full flex-col justify-end pb-16 text-white md:justify-center md:pb-0"
    >
      <Transition name="fade" mode="out-in">
        <div v-if="activeSlide" :key="activeSlide.id" class="max-w-xl space-y-3 md:space-y-4">
          <h1
            class="text-balance font-serif text-[34px] leading-[1.1] md:text-5xl md:leading-[1.08] lg:text-7xl"
          >
            {{ activeSlide.title }}
          </h1>
          <p
            class="max-w-md pb-2 text-xs font-light tracking-wide text-stone-300 md:pb-4 md:text-base"
          >
            {{ activeSlide.description }}
          </p>
          <div>
            <BaseButton as="a" :href="activeSlide.ctaHref" variant="light" size="lg">
              <span>{{ activeSlide.ctaLabel }}</span>
              <span aria-hidden="true" class="text-sm">→</span>
            </BaseButton>
          </div>
        </div>
      </Transition>
    </div>

    <button
      type="button"
      class="absolute left-4 top-1/2 hidden -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-white md:left-8 md:flex"
      aria-label="Previous slide"
      @click="goTo(activeIndex - 1)"
    >
      <AppIcon name="arrow-left" class="h-6 w-6" />
    </button>
    <button
      type="button"
      class="absolute right-4 top-1/2 hidden -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-white md:right-8 md:flex"
      aria-label="Next slide"
      @click="goTo(activeIndex + 1)"
    >
      <AppIcon name="arrow-right" class="h-6 w-6" />
    </button>

    <div class="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1 md:bottom-8">
      <button
        v-for="(slide, index) in heroSlides"
        :key="slide.id"
        type="button"
        class="group flex h-6 w-6 items-center justify-center"
        :aria-label="`Go to slide ${index + 1}`"
        :aria-current="index === activeIndex ? 'true' : undefined"
        @click="goTo(index)"
      >
        <span
          class="block h-2 rounded-full transition-all duration-300"
          :class="index === activeIndex ? 'w-5 bg-white' : 'w-2 bg-white/40 group-hover:bg-white/70'"
        />
      </button>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 250ms ease,
    transform 250ms ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(0.5rem);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}
</style>
