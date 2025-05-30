<template>
  <div class="min-h-screen flex">
    <div class="flex-1 flex flex-col">
      <main class="flex-1 p-6">
        <ProductStatsCards />
        <div class="bg-white p-6 rounded-lg shadow-md mt-6">
          <ProductTableHeader
            @addProduct="handleAddNewProduct"
            @refresh="handleRefreshProducts"
            @filter="handleFilterProducts"
          />

          <div v-if="loading" class="flex justify-center items-center py-10">
            <p class="text-lg text-[#161919]">Ürünler yükleniyor...</p>
          </div>
          <div v-else-if="error" class="flex justify-center items-center py-10">
            <p class="text-lg text-red-600">Hata: {{ error }}</p>
          </div>
          <div v-else-if="products.length === 0" class="p-6 text-center text-gray-600">
            Henüz hiç ürün bulunmamaktadır.
          </div>
          <ProductTable
            v-else
            :products="products"
            :selectedProductIds="selectedProductIds"
            @selectProduct="handleSelectProduct"
            @selectAll="handleSelectAll"
          />
        </div>

        <Pagination
          v-if="totalPages > 0 && !loading && !error && products.length > 0"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :totalItems="totalItems"
          @pageChange="handlePageChange"
          :loading="loading"
        />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductService from '@/services/productService'
import type { Product } from '@/types/product'

import ProductTableHeader from '@/components/table/ProductTableHeader.vue' //
import ProductTable from '@/components/table/ProductTable.vue'
import Pagination from '@/components/Pagination.vue'
import ProductStatsCards from '@/components/ProductStatsCards.vue'

const products = ref<Product[]>([])
const loading = ref<boolean>(true)
const error = ref<string | null>(null)
const totalPages = ref<number>(1)
const totalItems = ref<number>(0)
const selectedProductIds = ref<Set<number>>(new Set())

const route = useRoute()
const router = useRouter()

const currentPage = computed(() => {
  return parseInt(route.query.page?.toString() || '1', 10)
})

const fetchProducts = async () => {
  loading.value = true
  error.value = null
  try {
    const responseData = await ProductService.getAllProducts(currentPage.value)
    products.value = responseData.data
    totalPages.value = responseData.totalPages
    totalItems.value = responseData.totalItems
  } catch (err: any) {
    console.error('Ürünler yüklenirken hata oluştu:', err)
    error.value = err.response?.data?.message || 'Ürünler yüklenemedi.'
    products.value = []
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})

watch(currentPage, fetchProducts, { immediate: false })

watch(
  products,
  () => {
    selectedProductIds.value = new Set()
  },
  { deep: true },
)

const handleSelectAll = (event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked
  if (isChecked) {
    const allIds = new Set(products.value.map((p) => p.id))
    selectedProductIds.value = allIds
  } else {
    selectedProductIds.value = new Set()
  }
}

const handleSelectProduct = (productId: number, event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked
  const newSelection = new Set(selectedProductIds.value)
  if (isChecked) {
    newSelection.add(productId)
  } else {
    newSelection.delete(productId)
  }
  selectedProductIds.value = newSelection
}

const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    router.push({ query: { ...route.query, page: page.toString() } })
  }
}

const handleAddNewProduct = () => {
  console.log('Yeni ürün ekle')
}

const handleRefreshProducts = () => {
  fetchProducts()
}

const handleFilterProducts = () => {
  console.log('Ürünleri filtrele')
}
</script>

<style>
.selected-row {
  background-color: #f0f8ff;
}
</style>
