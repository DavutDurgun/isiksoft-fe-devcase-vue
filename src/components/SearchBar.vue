<template>
  <div :class="{ hidden: !isOpen, block: isOpen }" class="mb-6">
    <div class="relative">
      <input
        type="text"
        :placeholder="$t('searchHere')"
        class="w-full p-2 pl-8 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      />
      <span class="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"> 🔍 </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean
}

const props = defineProps<Props>()
</script>
