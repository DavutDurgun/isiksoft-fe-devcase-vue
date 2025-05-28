<template>
  <div class="flex items-center" :class="isOpen ? 'justify-start' : 'justify-center'">
    <div class="flex items-center">
      <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
        <span class="text-white font-bold text-sm">M</span>
      </div>
      <div v-if="isOpen" class="text-lg font-bold">
        <span class="text-gray-800">master</span>
        <span class="text-yellow-500">POS</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

defineProps<Props>()
</script>
