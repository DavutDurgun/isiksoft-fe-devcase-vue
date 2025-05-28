<template>
  <div class="mb-4" :class="isOpen ? 'block' : 'hidden'">
    <div class="relative">
      <MagnifyingGlassIcon
        class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
      />
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="$t('searchHere')"
        class="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

interface Props {
  isOpen: boolean
}

defineProps<Props>()

const searchQuery = ref<string>('')
</script>
