<template>
  <button
    @click="emit('onClick')"
    class="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 focus:outline-none z-50"
  >
    <component :is="isOpen ? ChevronDoubleLeftIcon : ChevronDoubleRightIcon" class="h-6 w-6" />
  </button>
</template>

<script setup lang="ts">
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/vue/24/outline'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'onClick'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()
</script>
