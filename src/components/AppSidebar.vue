<script setup lang="ts">
import {
  PhArrowFatLinesLeft,
  PhArrowsDownUp,
  PhChartDonut,
  PhHouse,
  PhReceipt,
  PhTipJar,
} from '@phosphor-icons/vue'
import {
  useSidebar,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'

const links = [
  {
    to: { name: 'Overview' },
    label: 'Overview',
    icon: PhHouse,
  },
  {
    to: { name: 'Transactions' },
    label: 'Transactions',
    icon: PhArrowsDownUp,
  },
  {
    to: { name: 'Budgets' },
    label: 'Budgets',
    icon: PhChartDonut,
  },
  {
    to: { name: 'Pots' },
    label: 'Pots',
    icon: PhTipJar,
  },
  {
    to: { name: 'RecurringBills' },
    label: 'Recurring Bills',
    icon: PhReceipt,
  },
]

const route = useRoute()
const { toggleSidebar } = useSidebar()
</script>

<template>
  <Sidebar class="rounded-lg">
    <SidebarHeader class="px-8 py-10 pr-6">
      <img src="/logo.svg" alt="Finance" width="121" />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem v-for="link in links" :key="link.label">
            <SidebarMenuButton as-child :is-active="link.to.name === route.name">
              <RouterLink :to="link.to">
                <component :is="link.icon" :size="48" />
                {{ link.label }}
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton @click="toggleSidebar">
            <PhArrowFatLinesLeft />
            Minimize Sidebar
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>
