<template>
  <div :class="sidebarClasses">
    <div class="flex-shrink-0">
      <ToggleButton :is-open="isOpen" @click="toggleSidebar" />
      <Logo :is-open="isOpen" />
      <SearchBar :is-open="isOpen" />
    </div>

    <div class="flex-grow mt-6">
      <MenuSection
        v-for="(section, index) in MENU_SECTIONS"
        :key="index"
        :section="section"
        :is-open="isOpen"
        :active-menu="activeMenu"
        :current-path="currentPath"
        @itemClick="handleItemClick"
        @toggleExpand="handleToggleExpand"
      />
    </div>
  </div>

  <div
    v-if="isOpen && isMobile"
    class="fixed inset-0 bg-black opacity-10 z-40"
    @click="closeSidebar"
  ></div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
import ToggleButton from '@/components/ToggleButton.vue'
import SearchBar from '@/components/SearchBar.vue'
import Logo from '@/components/Logo.vue'
import MenuSection from '@/components/sidebar/MenuSection.vue'
import { MENU_SECTIONS } from '@/constants/menu.ts'

const sidebarStore = useSidebarStore()
const { isOpen, activeMenu, currentPath } = storeToRefs(sidebarStore)
const { toggleSidebar, closeSidebar, handleItemClick, handleToggleExpand } = sidebarStore

const isMobile = ref(window.innerWidth < 768)

const updateIsMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  window.addEventListener('resize', updateIsMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})

const sidebarClasses = computed(() => {
  return `
    flex flex-col bg-white shadow-lg p-4
    transition-all duration-300 ease-in-out
    ${isOpen.value ? 'min-w-64' : 'min-w-20'}

    fixed inset-y-0 left-0 z-50
    ${isOpen.value ? 'translate-x-0' : '-translate-x-full'}
    h-full overflow-y-auto

    md:relative md:flex md:translate-x-0
    md:${isOpen.value ? 'min-w-64' : 'min-w-20'}
    md:h-screen md:overflow-y-auto
  `
    .replace(/\s+/g, ' ')
    .trim()
})
</script>
