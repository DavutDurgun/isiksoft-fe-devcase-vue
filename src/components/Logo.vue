<template>
  <div :class="`flex items-center mb-6 ${isOpen ? 'justify-start' : 'justify-center'}`">
    <template v-if="isOpen">
      <SwatchIcon class="h-8 w-8 text-indigo-600" />
      <span class="text-xl font-bold text-gray-800">master POS</span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { SwatchIcon } from '@heroicons/vue/24/outline'

interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
</script>
