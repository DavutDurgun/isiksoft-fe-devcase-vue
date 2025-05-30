<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
    <StatCard :title="$t('activeProducts')" value="247,384" change="+18%" :isPositive="true" />
    <StatCard :title="$t('newProducts')" value="+2,368" change="+2%" :isPositive="true" />
    <StatCard :title="$t('completedOrder')" value="33,847" change="-4.5%" :isPositive="false" />
    <StatCard :title="$t('pendingPayment')" value="1,284" change="+5%" :isPositive="true" />
    <StatCard :title="$t('canceledOrder')" value="836" change="-2%" :isPositive="false" />
  </div>
</template>

<script setup lang="ts">
import StatCard from '@/components/StatCard.vue'
</script>
