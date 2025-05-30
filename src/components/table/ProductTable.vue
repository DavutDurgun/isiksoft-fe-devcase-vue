<template>
  <div class="block rounded-lg overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr class="text-[#B2B3B9]">
          <th scope="col" class="px-6 py-3 text-left text-base font-bold tracking-wider w-[25%]">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="form-checkbox h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                @change="emit('selectAll', $event)"
                :checked="selectedProductIds.size === products.length && products.length > 0"
                ref="masterCheckboxRef"
              />
              <span class="ml-2">{{ $t('product') }}</span>
            </div>
          </th>
          <th
            scope="col"
            class="hidden md:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[18%]"
          >
            {{ $t('transactionID') }}
          </th>
          <th
            scope="col"
            class="hidden lg:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[18%]"
          >
            {{ $t('date') }}
          </th>
          <th
            scope="col"
            class="hidden lg:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[15%]"
          >
            {{ $t('amount') }}
          </th>
          <th
            scope="col"
            class="hidden lg:table-cell px-6 py-3 text-left text-base font-bold tracking-wider w-[18%]"
          >
            {{ $t('status') }}
          </th>
          <th
            scope="col"
            class="hidden lg:table-cell px-6 py-3 text-right text-base font-bold tracking-wider w-[6%]"
          ></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <ProductTableRow
          v-for="product in products"
          :key="product.id"
          :product="product"
          :isSelected="selectedProductIds.has(product.id)"
          @select="(productId, event) => emit('selectProduct', productId, event)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import ProductTableRow from '@/components/table/ProductTableRow.vue'
import type { Product } from '@/types/product'

interface Props {
  products: Product[]
  selectedProductIds: Set<number>
}

interface Emits {
  (e: 'selectProduct', productId: number, event: Event): void
  (e: 'selectAll', event: Event): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const masterCheckboxRef = ref<HTMLInputElement | null>(null)

watch(
  () => [props.selectedProductIds.size, props.products.length],
  () => {
    if (masterCheckboxRef.value) {
      masterCheckboxRef.value.indeterminate =
        props.selectedProductIds.size > 0 && props.selectedProductIds.size < props.products.length
    }
  },
  { immediate: true, deep: true },
)
</script>
