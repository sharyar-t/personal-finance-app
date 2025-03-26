<script setup lang="ts">
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { PhCaretRight } from '@phosphor-icons/vue'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <Card class="border-none shadow-none">
    <CardHeader class="flex-row items-center justify-between">
      <h2 class="text-preset-2">Transactions</h2>
      <RouterLink
        :to="{ name: 'Transactions' }"
        class="flex items-center gap-3 text-preset-4 text-grey-500"
      >
        View All
        <PhCaretRight weight="fill" />
      </RouterLink>
    </CardHeader>
    <CardContent>
      <div class="flex items-center">
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/images/avatars/emma-richardson.jpg" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <div class="text-preset-4-bold">Emma Richardson</div>
        </div>
        <div class="ml-auto flex flex-col gap-2 text-right">
          <div class="text-preset-4-bold text-green">+$75.50</div>
          <div class="text-preset-5 text-grey-500">19 Aug 2024</div>
        </div>
      </div>
      <Separator class="my-5" />
      <div class="flex items-center">
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/images/avatars/savory-bites-bistro.jpg" />
            <AvatarFallback>SBB</AvatarFallback>
          </Avatar>
          <div class="text-preset-4-bold">Savory Bites Bistro</div>
        </div>
        <div class="ml-auto flex flex-col gap-2 text-right">
          <div class="text-preset-4-bold">+$55.50</div>
          <div class="text-preset-5 text-grey-500">19 Aug 2024</div>
        </div>
      </div>
      <Separator class="my-5" />
      <div class="flex items-center">
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/images/avatars/daniel-carter.jpg" />
            <AvatarFallback>DC</AvatarFallback>
          </Avatar>
          <div class="text-preset-4-bold">Daniel Carter</div>
        </div>
        <div class="ml-auto flex flex-col gap-2 text-right">
          <div class="text-preset-4-bold">+$42.30</div>
          <div class="text-preset-5 text-grey-500">18 Aug 2024</div>
        </div>
      </div>
      <Separator class="my-5" />
      <div class="flex items-center">
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/images/avatars/sun-park.jpg" />
            <AvatarFallback>SP</AvatarFallback>
          </Avatar>
          <div class="text-preset-4-bold">Sun Park</div>
        </div>
        <div class="ml-auto flex flex-col gap-2 text-right">
          <div class="text-preset-4-bold text-green">+$120.00</div>
          <div class="text-preset-5 text-grey-500">17 Aug 2024</div>
        </div>
      </div>
      <Separator class="my-5" />
      <div class="flex items-center">
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/images/avatars/urban-services-hub.jpg" />
            <AvatarFallback>USH</AvatarFallback>
          </Avatar>
          <div class="text-preset-4-bold">Urban Services Hub</div>
        </div>
        <div class="ml-auto flex flex-col gap-2 text-right">
          <div class="text-preset-4-bold">-$65.00</div>
          <div class="text-preset-5 text-grey-500">17 Aug 2024</div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
