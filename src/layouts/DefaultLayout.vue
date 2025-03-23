<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <div class="px-10 py-8">
      <RouterView />
    </div>
  </SidebarProvider>
</template>

<style scoped></style>
