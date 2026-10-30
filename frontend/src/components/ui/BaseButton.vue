<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'outline' | 'light' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    as?: 'button' | 'a' | 'router-link'
    href?: string
    to?: string
    variant?: Variant
    size?: Size
    type?: 'button' | 'submit'
  }>(),
  {
    as: 'button',
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
)

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-6 py-3 text-xs',
  lg: 'px-7 py-3.5 text-xs',
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-forest text-linen hover:bg-forest-dark',
  outline: 'border border-forest text-forest hover:bg-forest hover:text-linen',
  light: 'bg-paper text-forest hover:bg-linen',
  'outline-light': 'border border-white/80 text-white hover:bg-paper hover:text-forest',
}

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-[0.14em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
  sizeClasses[props.size],
  variantClasses[props.variant],
])

/*
 * Only bind the attribute that belongs to the rendered element. Passing
 * `href: undefined` to RouterLink would land as a fallthrough attribute and
 * strip the `href` RouterLink generates itself.
 */
const bindings = computed(() => {
  if (props.as === 'a') return { href: props.href }
  if (props.as === 'router-link') return { to: props.to }
  return { type: props.type }
})
</script>

<template>
  <component :is="as" v-bind="bindings" :class="classes">
    <slot />
  </component>
</template>
