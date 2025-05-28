<template>
  <ChevronDownIcon
    :class="['h-4 w-4 transition-transform duration-200', isExpanded ? 'rotate-180' : 'rotate-0']"
  />
</template>

<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

interface Props {
  isExpanded: boolean
}

defineProps<Props>()
</script>
