<template>
  <div class="flex min-h-screen min-w-screen bg-gray-50">
    <Sidebar />

    <div class="flex-1 flex flex-col">
      <div class="lg:p-8">
        <Navbar @menuToggle="toggleSidebar" />
      </div>

      <main
        :class="`
          p-8 transition-all duration-300
          md:${isOpen ? 'ml-64' : 'ml-20'}
          ml-0
          min-h-screen w-full
          overflow-y-auto
        `"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()

const { toggleSidebar, isOpen } = sidebarStore
</script>
