<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import type { DrawerRootEmits, DrawerRootProps } from 'vaul-vue'
import { useForwardPropsEmits } from 'reka-ui'
import { DrawerRoot } from 'vaul-vue'

const props = withDefaults(defineProps<DrawerRootProps>(), {
  shouldScaleBackground: true,
})

const emits = defineEmits<DrawerRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DrawerRoot v-bind="forwarded">
    <slot />
  </DrawerRoot>
</template>
