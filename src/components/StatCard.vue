<template>
  <div class="bg-white p-6 rounded-lg shadow-sm">
    <h3 class="text-md font-medium text-[#878787] mb-2">{{ title }}</h3>
    <p class="text-2xl font-bold text-[#161919] mb-2">{{ value }}</p>
    <div class="flex items-center text-sm">
      <component
        :is="isPositive ? ArrowTrendingUpIcon : ArrowTrendingDownIcon"
        :class="[isPositive ? 'text-green-500' : 'text-red-500', 'h-4 w-4 mr-1']"
      />
      <span :class="isPositive ? 'text-green-500' : 'text-red-500'">
        {{ change }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from '@heroicons/vue/24/outline'

interface Props {
  title: string
  value: string
  change: string
  isPositive: boolean
}

defineProps<Props>()
</script>
