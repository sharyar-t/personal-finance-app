<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PhCaretRight } from '@phosphor-icons/vue'
import { DonutChart } from '@/components/ui/chart-donut'

const data = [
  {
    name: 'Entertainment',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Bills',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Dining Out',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  {
    name: 'Personal Care',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
]

function valueFormatter(tick: number | Date) {
  return typeof tick === 'number' ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}` : ''
}
</script>

<template>
  <Card class="border-none shadow-none">
    <CardHeader class="flex-row items-center justify-between">
      <CardTitle class="text-preset-2">Budgets</CardTitle>
      <RouterLink
        :to="{ name: 'Budgets' }"
        class="flex items-center gap-3 text-preset-4 text-grey-500"
      >
        See Details
        <PhCaretRight weight="fill" />
      </RouterLink>
    </CardHeader>
    <CardContent class="flex flex-col items-center gap-4 md:flex-row">
      <DonutChart
        index="name"
        :category="'total'"
        :data="data"
        :value-formatter="valueFormatter"
        :colors="['#277C78', '#82C9D7', '#F2CDAC', '#626070']"
        class="max-w-[250px]"
      />
      <div class="grid w-full grid-cols-2 gap-4 md:grid-cols-1">
        <div class="flex gap-4">
          <div class="h-full w-[4px] rounded-lg bg-green"></div>
          <div>
            <div class="text-preset-5 text-grey-500">Savings</div>
            <div class="text-preset-4-bold">$159</div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="h-full w-[4px] rounded-lg bg-cyan"></div>
          <div>
            <div class="text-preset-5 text-grey-500">Gift</div>
            <div class="text-preset-4-bold">$40</div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="h-full w-[4px] rounded-lg bg-navy"></div>
          <div>
            <div class="text-preset-5 text-grey-500">Concert Ticket</div>
            <div class="text-preset-4-bold">$110</div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="h-full w-[4px] rounded-lg bg-yellow"></div>
          <div>
            <div class="text-preset-5 text-grey-500">New Laptop</div>
            <div class="text-preset-4-bold">$10</div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
