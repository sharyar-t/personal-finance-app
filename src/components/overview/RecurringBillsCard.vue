<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PhCaretRight } from '@phosphor-icons/vue'
</script>

<template>
  <Card class="border-none shadow-none">
    <CardHeader class="flex-row items-center justify-between">
      <CardTitle class="text-preset-2">Recurring Bills</CardTitle>
      <RouterLink
        :to="{ name: 'RecurringBills' }"
        class="flex items-center gap-3 text-preset-4 text-grey-500"
      >
        See Details
        <PhCaretRight weight="fill" />
      </RouterLink>
    </CardHeader>
    <CardContent class="flex flex-col gap-3">
      <div
        class="flex items-center justify-between rounded-lg border-l-4 border-l-green bg-beige-100 px-4 py-5"
      >
        <div class="text-preset-4 text-grey-500">Paid Bills</div>
        <div class="text-preset-4-bold">$190.00</div>
      </div>
      <div
        class="flex items-center justify-between rounded-lg border-l-4 border-l-yellow bg-beige-100 px-4 py-5"
      >
        <div class="text-preset-4 text-grey-500">Total Upcoming</div>
        <div class="text-preset-4-bold">$194.98</div>
      </div>
      <div
        class="flex items-center justify-between rounded-lg border-l-4 border-l-cyan bg-beige-100 px-4 py-5"
      >
        <div class="text-preset-4 text-grey-500">Due Soon</div>
        <div class="text-preset-4-bold">$59.98</div>
      </div>
    </CardContent>
  </Card>
</template>
