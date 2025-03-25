<script setup lang="ts">
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset class="px-4 py-6 md:px-10 md:py-8">
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>

<style scoped></style>
