<template>
  <div :class="[baseClasses, activeClasses, justificationClass]" @click="handleItemMainClick">
    <div class="flex items-center">
      <component
        :is="item.icon"
        :class="['h-5 w-5', isActive && !isSubMenu ? 'text-[#CDFF65]' : '', isOpen ? 'mr-2' : '']"
      />
      <span :class="isOpen ? '' : 'hidden'">{{ $t(item.name) }}</span>
    </div>

    <Badge v-if="item.badge && isOpen" :count="item.badge" />
    <ExpandIcon
      v-if="isOpen && item.subItems"
      :isExpanded="activeMenu === item.path"
      @click.stop="handleExpandIconClick"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MenuItemType } from '@/types/sidebar'
import Badge from '@/components/Badge.vue'
import ExpandIcon from '@/components/ExpandIcon.vue'

interface Props {
  item: MenuItemType
  isOpen: boolean
  isActive: boolean
  isSubMenu?: boolean
  activeMenu: string
}

const props = withDefaults(defineProps<Props>(), {
  isSubMenu: false,
})

const emit = defineEmits<{
  itemClick: [path: string]
  toggleExpand: [path: string]
}>()

const handleItemMainClick = () => {
  emit('itemClick', props.item.path)
}

const handleExpandIconClick = () => {
  emit('toggleExpand', props.item.path)
}

const baseClasses = computed(() => {
  return `flex items-center w-full p-2 text-[17px] rounded-md transition-colors duration-300 cursor-pointer ${
    props.isOpen ? '' : 'w-full'
  }`
})

const activeClasses = computed(() => {
  return props.isActive
    ? props.isSubMenu
      ? 'text-[#4F56D3]'
      : 'bg-[#4F56D3] text-white'
    : 'hover:bg-gray-200 text-[#878787]'
})

const justificationClass = computed(() => {
  if (props.isOpen) {
    if (props.item.subItems || props.item.badge) {
      return 'justify-between'
    } else {
      return 'justify-start'
    }
  } else {
    return 'justify-center'
  }
})
</script>
