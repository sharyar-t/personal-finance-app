<script setup lang="ts">
import OverviewCard from '@/components/overview/OverviewCard.vue'
</script>

<template>
  <main>
    <div class="mb-8">
      <h1 class="text-2xl font-medium">Overview</h1>
    </div>
    <div class="grid gap-3 md:grid-cols-3">
      <OverviewCard active title="$4,836.00" subtitle="Current Balance" />
      <OverviewCard title="$3,814.25" subtitle="Income" />
      <OverviewCard title="$1,700.50" subtitle="Expenses" />
    </div>
  </main>
</template>
