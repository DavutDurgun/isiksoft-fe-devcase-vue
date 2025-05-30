<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 bg-white rounded-lg shadow-md"
  >
    <div class="text-gray-600 text-sm mb-4 sm:mb-0">
      Showing {{ Math.min(totalItems, (currentPage - 1) * 20 + 1) }}-
      {{ Math.min(totalItems, currentPage * 20) }} from {{ totalItems }} data
    </div>
    <div class="flex justify-center items-center space-x-2">
      <button
        @click="emit('pageChange', currentPage - 1)"
        :disabled="currentPage === 1 || loading"
        :class="`
          p-2 rounded-md
          bg-[#5D3FD3] text-white shadow-md hover:bg-[#4a32a6]
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors text-sm
        `"
      >
        <ChevronLeftIcon class="h-5 w-5" />
      </button>

      <button
        v-for="page in getPageNumbers"
        :key="page"
        @click="emit('pageChange', page)"
        :disabled="loading"
        :class="`
          px-3 py-1.5 rounded-md transition-colors text-sm
          ${
            page === currentPage
              ? 'bg-[#5D3FD3] text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }
        `"
      >
        {{ page }}
      </button>

      <button
        @click="emit('pageChange', currentPage + 1)"
        :disabled="currentPage === totalPages || loading"
        :class="`
          p-2 rounded-md
          bg-[#5D3FD3] text-white shadow-md hover:bg-[#4a32a6]
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors text-sm
        `"
      >
        <ChevronRightIcon class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

interface Props {
  currentPage: number
  totalPages: number
  totalItems: number
  loading: boolean
}

interface Emits {
  (e: 'pageChange', page: number): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const getPageNumbers = computed(() => {
  const pageNumbers: number[] = []
  const maxPagesToShow = 5
  let startPage = Math.max(1, props.currentPage - Math.floor(maxPagesToShow / 2))
  const endPage = Math.min(props.totalPages, startPage + maxPagesToShow - 1)

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }
  return pageNumbers
})
</script>
