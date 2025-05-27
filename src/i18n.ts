//
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    appTitle: 'Işıksoft Frontend DevCase',
    home: 'Home',
    products: 'Products',
    addProduct: 'Add New Product',
    scanBarcode: 'Scan Barcode',
    welcomeMessage: 'Welcome to our application!',
    allProducts: 'All Products',
    addNewProductTitle: 'Add New Product',
    barcodeScanTitle: 'Barcode Scan',
    notFoundTitle: '404 - Page Not Found',
    pageNotFoundDescription:
      'The page you are looking for does not exist or may have been moved. Please check the URL.',
    backToHome: 'Back to Home',
    productName: 'Product Name',
    price: 'Price',
    addProductButton: 'Add Product',
    manualBarcodeInput: 'Manually enter barcode...',
    scanBarcodeButton: 'Scan Barcode / Query',
    loadingProducts: 'Products are loading...',
    errorLoadingProducts: 'Error: {error}',
    retry: 'Retry',
    noProductsFound: 'No products found yet.',
    previous: 'Previous',
    next: 'Next',
    page: 'Page',
  },
  tr: {
    appTitle: 'Işıksoft Frontend DevCase',
    home: 'Ana Sayfa',
    products: 'Ürünler',
    addProduct: 'Yeni Ürün Ekle',
    scanBarcode: 'Barkod Tara',
    welcomeMessage: 'Uygulamamıza hoş geldiniz!',
    allProducts: 'Tüm Ürünler',
    addNewProductTitle: 'Yeni Ürün Ekle',
    barcodeScanTitle: 'Barkod Tarama',
    notFoundTitle: '404 - Sayfa Bulunamadı',
    pageNotFoundDescription:
      "Aradığınız sayfa mevcut değil veya taşınmış olabilir. Lütfen URL'yi kontrol edin.",
    backToHome: 'Ana Sayfaya Dön',
    productName: 'Ürün Adı',
    price: 'Fiyat',
    addProductButton: 'Ürün Ekle',
    manualBarcodeInput: 'Barkodu manuel girin...',
    scanBarcodeButton: 'Barkodu Tara / Sorgula',
    loadingProducts: 'Ürünler yükleniyor...',
    errorLoadingProducts: 'Hata: {error}',
    retry: 'Tekrar Dene',
    noProductsFound: 'Henüz hiç ürün bulunamadı.',
    previous: 'Önceki',
    next: 'Sonraki',
    page: 'Sayfa',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'tr',
  fallbackLocale: 'en',
  messages,
})

export default i18n
