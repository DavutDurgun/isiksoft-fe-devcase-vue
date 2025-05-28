<template>
  <span
    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full"
  >
    {{ count }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  count: number
}

defineProps<Props>()
</script>
