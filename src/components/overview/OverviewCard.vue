<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'

interface Props {
  title: string
  subtitle: string
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <Card class="border-none shadow-none" :class="{ 'bg-grey-900': active, 'text-white': active }">
    <CardContent class="p-5">
      <div class="text-preset-4 mb-3">{{ subtitle }}</div>
      <div class="text-preset-1">{{ title }}</div>
    </CardContent>
  </Card>
</template>
