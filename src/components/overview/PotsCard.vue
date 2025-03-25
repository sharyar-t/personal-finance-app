<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PhCaretRight, PhTipJar } from '@phosphor-icons/vue'
</script>

<template>
  <Card class="border-none shadow-none">
    <CardHeader class="flex-row items-center justify-between">
      <CardTitle class="text-preset-2">Pots</CardTitle>
      <RouterLink
        :to="{ name: 'Pots' }"
        class="text-preset-4 text-grey-500 flex items-center gap-3"
      >
        See Details
        <PhCaretRight weight="fill" />
      </RouterLink>
    </CardHeader>
    <CardContent class="flex flex-col gap-4 md:flex-row">
      <div class="bg-beige-100 flex basis-1/2 items-center gap-4 rounded-xl p-4">
        <PhTipJar :size="40" class="text-green" />
        <div>
          <div class="text-preset-4 text-grey-500 mb-3">Total Saved</div>
          <div class="text-preset-1">$850</div>
        </div>
      </div>
      <div class="grid basis-1/2 grid-cols-2 gap-4">
        <div class="flex gap-4">
          <div class="bg-green h-full w-[4px] rounded-lg"></div>
          <div>
            <div class="text-preset-5 text-grey-500">Savings</div>
            <div class="text-preset-4-bold">$159</div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="bg-cyan h-full w-[4px] rounded-lg"></div>
          <div>
            <div class="text-preset-5 text-grey-500">Gift</div>
            <div class="text-preset-4-bold">$40</div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="bg-navy h-full w-[4px] rounded-lg"></div>
          <div>
            <div class="text-preset-5 text-grey-500">Concert Ticket</div>
            <div class="text-preset-4-bold">$110</div>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="bg-yellow h-full w-[4px] rounded-lg"></div>
          <div>
            <div class="text-preset-5 text-grey-500">New Laptop</div>
            <div class="text-preset-4-bold">$10</div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped></style>
