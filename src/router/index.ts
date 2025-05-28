import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomePage,
        },
        {
          path: 'products',
          name: 'AllProducts',
          component: ProductsPage,
        },
        {
          path: 'scan-barcode',
          name: 'ScanBarcode',
          component: { template: '<div class="p-4">Barkod Tarama Sayfası</div>' },
        },
        {
          path: '/tags',
          name: 'Tags',
          component: { template: '<div class="p-4">Tags Sayfası</div>' },
        },
        {
          path: '/:pathMatch(.*)*', // Catch-all route for 404
          name: 'NotFound',
          component: { template: '<div class="p-4">Sayfa Bulunamadı (404)</div>' },
        },
      ],
    },
  ],
})

export default router
