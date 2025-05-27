<template>
  <div id="app">
    <router-link to="/">Ana Sayfa</router-link>
    <router-view />
  </div>
</template>

<script setup lang="ts">
// Eğer burada hata varsa, geçici olarak boş bırakın veya çok basit bir şey deneyin
</script>

<style>
/* Eğer Tailwind CSS düzgün yüklenmediyse, bazı temel stilleri buraya ekleyin */
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
