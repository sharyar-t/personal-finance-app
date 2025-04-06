<script setup lang="ts">
import { shallowRef } from 'vue'
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  PhCaretLeft,
  PhCaretRight,
  PhFunnel,
  PhMagnifyingGlass,
  PhSortAscending,
} from '@phosphor-icons/vue'
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { transactions } from '@/data.json'
import type { Transaction } from '@/types.ts'

const data = shallowRef<Transaction[]>(transactions)
const columnHelper = createColumnHelper<Transaction>()
const columns = [
  columnHelper.accessor('name', {
    header: 'Recipient / Sender',
    cell: ({ row }) => {
      const { name, avatar } = row.original

      return h('div', { class: 'flex items-center gap-4' }, [
        h('img', { src: avatar, alt: name, class: 'w-[40px] h-[40px] rounded-full' }),
        h('div', { class: 'text-grey-900 text-preset-4-bold' }, name),
      ])
    },
  }),
  {
    accessorKey: 'category',
    header: 'Category',
  },
  columnHelper.accessor('date', {
    header: 'Transaction Date',
    cell: ({ row }) => {
      const date = new Date(row.getValue('date'))
      const formatted = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).format(date)
      return h('div', {}, formatted)
    },
  }),
  columnHelper.accessor('amount', {
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return h(
        'div',
        { class: `text-right font-medium ${amount > 0 ? 'text-green' : ''}` },
        formatted,
      )
    },
  }),
]

const search = ref('')
const sortBy = ref('latest')
const filterBy = ref('all')

const table = useVueTable({
  data: data.value,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  state: {
    get globalFilter() {
      return search.value
    },
  },
})
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
              v-model="search"
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
                <Command>
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
                <Command>
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
            <Select v-model="sortBy">
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
            <Select v-model="filterBy">
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
        <Table>
          <TableHeader>
            <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
              <TableHead
                v-for="header in headerGroup.headers"
                :key="header.id"
                class="text-preset-5 font-normal text-grey-500"
              >
                <FlexRender
                  v-if="!header.isPlaceholder"
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <template v-if="table.getRowModel().rows.length">
              <TableRow v-for="row in table.getRowModel().rows" :key="row.id">
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TableCell>
              </TableRow>
            </template>
            <TableRow v-else>
              <TableCell :colspan="columns.length" class="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div class="flex items-center justify-between space-x-2 py-4">
          <Button
            variant="outline"
            :disabled="!table.getCanPreviousPage()"
            @click="table.previousPage()"
            class="text-grey-900 shadow-none"
          >
            <PhCaretLeft weight="fill" class="mr-2 text-grey-500" />
            <span class="text-preset-4">Previous</span>
          </Button>
          <div class="flex gap-2">
            <Button
              v-for="i in table.getPageCount()"
              :key="i"
              :variant="i === table.getState().pagination.pageIndex + 1 ? 'default' : 'outline'"
              class="border-beige-500 shadow-none"
              :class="{
                'border-none': i === table.getState().pagination.pageIndex + 1,
              }"
              @click="table.setPageIndex(i - 1)"
            >
              {{ i }}
            </Button>
          </div>
          <Button
            variant="outline"
            :disabled="!table.getCanNextPage()"
            @click="table.nextPage()"
            class="text-grey-900 shadow-none"
          >
            <span class="text-preset-4">Next</span>
            <PhCaretRight weight="fill" class="ml-2 text-grey-500" />
          </Button>
        </div>
      </CardContent>
    </Card>
  </main>
</template>
