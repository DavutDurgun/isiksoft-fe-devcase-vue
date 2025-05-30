<template>
  <div class="mb-6">
    <h2 v-if="isOpen && section.title" class="text-md font-[700] text-[#C7C7C7] uppercase mb-2">
      {{ $t(section.title) }}
    </h2>
    <MenuList
      :items="section.items"
      :isOpen="isOpen"
      :activeMenu="activeMenu"
      :currentPath="currentPath"
      @itemClick="handleItemClick"
      @toggleExpand="handleToggleExpand"
    />
  </div>
</template>

<script setup lang="ts">
import type { MenuSection } from '@/types/sidebar'
import MenuList from './MenuList.vue'

interface Props {
  section: MenuSection
  isOpen: boolean
  activeMenu: string
  currentPath: string
}

const emit = defineEmits<{
  itemClick: [path: string]
  toggleExpand: [path: string]
}>()

const handleItemClick = (path: string) => {
  emit('itemClick', path)
}

const handleToggleExpand = (path: string) => {
  emit('toggleExpand', path)
}

defineProps<Props>()
</script>
