<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PhFunnel, PhMagnifyingGlass, PhSortAscending } from '@phosphor-icons/vue'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer'
import { Command, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
</script>

<template>
  <main>
    <h1 class="mb-8 text-2xl font-medium">Transactions</h1>

    <Card class="border-none shadow-none">
      <CardContent class="p-5 md:p-8">
        <div class="mb-6 flex items-center justify-between gap-4">
          <div class="relative w-full items-center md:max-w-sm">
            <Input
              id="search"
              type="text"
              placeholder="Search..."
              class="border-beige-500 pr-10 shadow-none"
            />
            <span class="absolute inset-y-0 end-0 flex items-center justify-center px-2">
              <PhMagnifyingGlass class="size-6 text-muted-foreground" />
            </span>
          </div>
          <div class="flex gap-2 md:hidden">
            <Drawer>
              <DrawerTrigger>
                <Button variant="ghost" size="icon">
                  <PhSortAscending weight="fill" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Sort by</DrawerTitle>
                </DrawerHeader>
                <Command class="bg-transparent">
                  <CommandList>
                    <CommandGroup>
                      <CommandItem value="latest">Latest</CommandItem>
                      <CommandItem value="oldest">Oldest</CommandItem>
                      <CommandItem value="asc">A to Z</CommandItem>
                      <CommandItem value="desc">Z to A</CommandItem>
                      <CommandItem value="highest">Highest</CommandItem>
                      <CommandItem value="lowest">Lowest</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose as-child>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger>
                <Button variant="ghost" size="icon">
                  <PhFunnel weight="fill" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Sort by</DrawerTitle>
                </DrawerHeader>
                <Command class="bg-transparent">
                  <CommandList>
                    <CommandGroup>
                      <CommandItem value="all">All Transactions</CommandItem>
                      <CommandItem value="entertainment">Entertainment</CommandItem>
                      <CommandItem value="bills">Bills</CommandItem>
                      <CommandItem value="groceries">Groceries</CommandItem>
                      <CommandItem value="diningOut">Dining Out</CommandItem>
                      <CommandItem value="transportation">Transportation</CommandItem>
                      <CommandItem value="personalCare">Personal Care</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose as-child>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div class="hidden md:flex md:gap-2">
            <Select>
              <SelectTrigger class="shadow-none">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="asc">A to Z</SelectItem>
                  <SelectItem value="desc">Z to A</SelectItem>
                  <SelectItem value="highest">Highest</SelectItem>
                  <SelectItem value="lowest">Lowest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger class="shadow-none">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                  <SelectItem value="bills">Bills</SelectItem>
                  <SelectItem value="groceries">Groceries</SelectItem>
                  <SelectItem value="diningOut">Dining Out</SelectItem>
                  <SelectItem value="transportation">Transportation</SelectItem>
                  <SelectItem value="personalCare">Personal Care</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        [Table]
      </CardContent>
    </Card>
  </main>
</template>
