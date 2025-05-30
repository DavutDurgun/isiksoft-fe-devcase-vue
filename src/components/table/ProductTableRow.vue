<template>
  <tr :key="product.id" :class="`hover:bg-gray-50 transition-colors text-base text-[#161919]`">
    <td :class="`px-6 py-4 whitespace-nowrap ${isSelected ? 'selected-row' : ''}`">
      <div class="flex items-center">
        <input
          type="checkbox"
          class="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500 mr-3 flex-shrink-0"
          :checked="isSelected"
          @change="(e) => emit('select', product.id, e as Event)"
        />
        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="w-12 h-12 rounded-md object-cover mr-3 flex-shrink-0"
        />
        <div class="flex flex-col">
          <span class="font-semibold">{{ product.name }}</span>
          <span class="text-[#B2B3B9] text-sm">{{ product.category }}</span>
        </div>
      </div>
    </td>
    <td class="hidden md:table-cell px-6 py-4 whitespace-nowrap">
      {{ product.productCode }}
    </td>
    <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-[#B2B3B9] font-normal">
      {{ formatDate(new Date()) }}
    </td>
    <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap font-bold">
      ${{ Math.trunc(product.price) }}
    </td>
    <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
      <span
        :class="[
          'inline-flex items-center justify-center w-38 h-10 px-2 py-1 rounded-lg text-xs font-semibold',
          product.status === true
            ? 'bg-[#89D2331A] text-[#89D233]'
            : product.status === false
              ? 'bg-[#F272771A] text-[#F27277]'
              : 'bg-gray-100 text-gray-800',
        ]"
      >
        <component
          :is="product.status === true ? CheckCircleIcon : MinusCircleIcon"
          class="h-5 w-5 mr-1.5"
        />
        {{ product.status === true ? 'Completed' : 'Pending' }}
      </span>
    </td>
    <td class="hidden lg:table-cell px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <button
        class="flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
      >
        <EllipsisHorizontalIcon class="h-5 w-5" />
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { CheckCircleIcon, MinusCircleIcon, EllipsisHorizontalIcon } from '@heroicons/vue/24/outline'
import type { Product } from '@/types/product'

interface Props {
  product: Product
  isSelected: boolean
}

interface Emits {
  (e: 'select', productId: number, event: Event): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>
