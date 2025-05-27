<template>
  <div class="p-8 bg-white shadow-md rounded-lg text-center">
    <h2 class="text-5xl font-bold text-red-600 mb-4">404</h2>
    <h3 class="text-2xl font-semibold text-gray-800 mb-4">Sayfa Bulunamadı</h3>
    <p class="text-lg text-gray-600 mb-6">
      Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL'yi kontrol edin.
    </p>
    <router-link
      to="/"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out"
    >
      Ana Sayfaya Dön
    </router-link>
  </div>
</template>
