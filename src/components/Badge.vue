<template>
  <span
    class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black bg-[#CDFF65] rounded-full"
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
