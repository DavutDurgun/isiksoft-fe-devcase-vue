<template>
  <div
    class="flex flex-col sm:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0 w-full"
  >
    <h1 class="text-[20px] font-bold text-[#333333]">All Products</h1>
    <div class="flex justify-end gap-1 w-full md:w-auto">
      <div class="relative flex-grow hidden lg:block">
        <MagnifyingGlassIcon
          class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search item..."
          class="pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full"
        />
      </div>

      <button
        class="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors lg:hidden"
      >
        <MagnifyingGlassIcon class="h-5 w-5" />
      </button>

      <div class="flex items-center space-x-2">
        <button
          class="hidden lg:block p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          @click="emit('refresh')"
        >
          <ArrowPathIcon class="h-5 w-5" />
        </button>
        <button
          class="hidden lg:block p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <CalendarIcon class="h-5 w-5" />
        </button>
        <button
          class="hidden lg:block p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          @click="emit('filter')"
        >
          <AdjustmentsHorizontalIcon class="h-5 w-5" />
        </button>
        <button
          class="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
        >
          <EllipsisVerticalIcon class="h-5 w-5" />
        </button>
      </div>

      <button
        class="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="emit('addProduct')"
      >
        <PlusIcon class="h-5 w-5 mr-2" />
        Add New Product
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  ArrowPathIcon,
  AdjustmentsHorizontalIcon,
  PlusIcon,
  EllipsisVerticalIcon,
  CalendarIcon,
} from '@heroicons/vue/24/outline'

interface Emits {
  (e: 'addProduct'): void
  (e: 'refresh'): void
  (e: 'filter'): void
}

const emit = defineEmits<Emits>()
</script>
