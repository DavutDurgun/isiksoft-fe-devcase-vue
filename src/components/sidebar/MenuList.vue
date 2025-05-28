<template>
  <ul :class="isSubMenu ? (isOpen ? 'ml-4' : 'ml-0') : ''">
    <li v-for="item in items" :key="item.name" class="mb-1">
      <MenuItem
        :item="item"
        :isOpen="isOpen"
        :isActive="isItemActive(item)"
        :isSubMenu="isSubMenu"
        :activeMenu="activeMenu"
        @itemClick="handleItemClick"
        @toggleExpand="handleToggleExpand"
      />

      <div v-if="item.subItems && activeMenu === item.path && isOpen" class="bg-[#F5F5F5]">
        <MenuList
          :items="item.subItems"
          :isOpen="isOpen"
          :activeMenu="activeMenu"
          :isSubMenu="true"
          :currentPath="currentPath"
          @itemClick="handleItemClick"
          @toggleExpand="handleToggleExpand"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { MenuItemType } from '@/types/sidebar'
import MenuItem from '@/components/sidebar/MenuItem.vue'

interface Props {
  items: MenuItemType[]
  isOpen: boolean
  activeMenu: string
  isSubMenu?: boolean
  currentPath: string
}

const props = withDefaults(defineProps<Props>(), {
  isSubMenu: false,
})

const emit = defineEmits<{
  itemClick: [path: string]
  toggleExpand: [path: string]
}>()

const isItemActive = (item: MenuItemType): boolean => {
  return (
    props.currentPath === item.path ||
    props.currentPath.startsWith(item.path + '/') ||
    (item.subItems
      ? item.subItems.some(
          (sub) => props.currentPath === sub.path || props.currentPath.startsWith(sub.path + '/'),
        )
      : false)
  )
}

const handleItemClick = (path: string) => {
  emit('itemClick', path)
}

const handleToggleExpand = (path: string) => {
  emit('toggleExpand', path)
}
</script>
