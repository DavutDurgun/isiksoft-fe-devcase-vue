<template>
  <button
    @click="$emit('click')"
    class="p-2 rounded-md hover:bg-gray-200 focus:outline-none transition-colors duration-300"
    :class="isOpen ? 'justify-end' : 'justify-center'"
  >
    <Bars3Icon v-if="isOpen" class="h-6 w-6" />
    <Bars3Icon v-else class="h-6 w-6" />
  </button>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/24/outline'

interface Props {
  isOpen: boolean
}

defineProps<Props>()
defineEmits<{
  click: []
}>()
</script>
