Isiksoft FE DevCase - Vue
Bu proje, modern bir Vue 3 ön yüz geliştirme ortamı için tasarlanmış bir boilerplate ve geliştirme vaka çalışmasıdır. Temiz kod prensipleri, ölçeklenebilirlik ve güncel teknolojiler kullanılarak oluşturulmuştur.

🚀 Teknolojiler
Bu proje aşağıdaki temel teknolojileri kullanır:

Vue 3: Kullanıcı arayüzleri oluşturmak için progresif bir JavaScript çerçevesi.
Vite: Hızlı geliştirme deneyimi sağlayan yeni nesil bir build aracı.
TypeScript: Daha güvenli ve ölçeklenebilir kod yazmak için JavaScript'in süperseti.
Tailwind CSS: Hızlı UI geliştirme için yardımcı sınıf (utility-first) CSS framework'ü.
Pinia: Vue 3 için hafif ve merkezi durum yönetimi kütüphanesi.
Vue Router: Uygulama içi client-side yönlendirme için resmi yönlendirici kütüphanesi.
Heroicons (Vue): Kolayca kullanılabilen güzel tasarımlı SVG ikonları.
Vue i18n: Uluslararasılaştırma (i18n) ve çoklu dil desteği için popüler bir kütüphane.
Axios: Tarayıcıda ve Node.js'de HTTP istekleri yapmak için popüler bir kütüphane.
✨ Özellikler
Duyarlı Sidebar Yönetimi: Pinia ile merkezi olarak yönetilen ve ekran boyutuna duyarlı (mobil cihazlarda otomatik kapanma) akıllı sidebar.
Merkezi Durum Yönetimi: Pinia ile uygulamanın kritik durumları (örneğin sidebar durumu) kolayca yönetilir ve farklı bileşenler arasında paylaşılır.
Uluslararasılaştırma (i18n): vue-i18n ile çoklu dil desteği ve dinamik çeviriler.
Modüler Komponent Yapısı: Temiz ve yeniden kullanılabilir bileşenlere ayrılmış yapı.
Hızlı Geliştirme Deneyimi: Vite'ın sunduğu anında sıcak modül değişimi (HMR) ve hızlı build süreleri.
Kod Kalitesi: ESLint ve Prettier ile kod standartları ve formatlama.
DevTools Entegrasyonu: Vue DevTools ile kapsamlı hata ayıklama yetenekleri.
📦 Kurulum
Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyin:

Ön Gereksinimler
Node.js (v18.x veya üzeri önerilir)
npm veya Yarn
Adımlar
Depoyu Klonlayın:

Bash

git clone https://github.com/your-username/isiksoft-fe-devcase-vue.git
cd isiksoft-fe-devcase-vue
(Yukarıdaki URL'yi kendi depo URL'nizle değiştirmeyi unutmayın.)

Bağımlılıkları Yükleyin:

Bash

npm install

# veya

yarn install
🚀 Projeyi Çalıştırma
Geliştirme Modu
Geliştirme sunucusunu başlatmak için:

Bash

npm run dev

# veya

yarn dev
Uygulama genellikle http://localhost:5173 adresinde çalışacaktır.

Üretim Modu (Build)
Uygulamanın üretim sürümünü oluşturmak için:

Bash

npm run build

# veya

yarn build
Bu komut, üretim için optimize edilmiş dosyaları dist klasörüne derler.

Build'i Önizleme
Üretim build'ini yerel olarak önizlemek için:

Bash

npm run preview

# veya

yarn preview
📂 Proje Yapısı
Projenin temel dizin yapısı aşağıdaki gibidir:

isiksoft-fe-devcase-vue/
├── public/ # Statik dosyalar
├── src/
│ ├── assets/ # Global varlıklar (resimler, fontlar vb.)
│ ├── components/ # Genel, yeniden kullanılabilir UI bileşenleri
│ ├── constants/ # Sabit değerler ve menü verileri (örn: sidebarMenu.ts)
│ ├── features/ # Alan odaklı bileşenler ve composable'lar (örn: product/components)
│ ├── locales/ # i18n çeviri dosyaları (tr.json, en.json)
│ ├── pages/ # Router tarafından render edilen ana sayfa bileşenleri
│ ├── router/ # Vue Router yapılandırması ve rotalar
│ ├── stores/ # Pinia global durum yönetimi (örn: sidebar.ts)
│ ├── types/ # TypeScript tanımlamaları
│ ├── App.vue # Ana uygulama bileşeni
│ ├── main.ts # Uygulama giriş noktası
│ └── vite-env.d.ts # Vite TypeScript ortam tanımları
├── .env # Ortam değişkenleri
├── .eslintrc.cjs # ESLint yapılandırması
├── .prettierrc.json # Prettier yapılandırması
├── tailwind.config.ts # Tailwind CSS yapılandırması
├── tsconfig.json # TypeScript yapılandırması
├── vite.config.ts # Vite yapılandırması
└── package.json # Proje bağımlılıkları ve script'leri
📊 Durum Yönetimi (Pinia)
Sidebar'ın isOpen durumu, activeMenu ve ilgili tüm eylemler (toggle, handleItemClick, handleToggleExpand) merkezi bir Pinia store'unda yönetilir.

Store Tanımı: src/stores/sidebar.ts dosyasında defineStore fonksiyonu ile bir Pinia store'u tanımlanmıştır.
Kullanım: Bileşenlerinizde useSidebarStore() hook'unu çağırarak store'daki duruma (.isOpen, .activeMenu) ve eylemlere (.toggleSidebar(), .handleItemClick()) doğrudan erişebilirsiniz. Pinia'nın Composition API ile sorunsuz entegrasyonu sayesinde kodunuz temiz ve okunabilir kalır.
Yan Etkiler (Effects): Pencere boyutlandırma ve rota değişim olaylarını dinleyen onMounted ve watch hook'ları doğrudan store'un içerisinde tanımlanmıştır; bu da ilgili mantığın merkezi olmasını sağlar.
🌐 Uluslararasılaştırma (i18n)
Uygulama, vue-i18n kullanarak çoklu dil desteği sağlar.

Çeviri dosyaları src/locales dizininde bulunur (tr.json, en.json).
Bileşenlerinizde $t('anahtar_adi') şeklinde çevirileri kullanabilirsiniz.
Dil değiştirme mekanizması uygulamanızın genel ayarlarında yapılandırılabilir.
💅 Stil (Tailwind CSS)
Yardımcı sınıf temelli (utility-first) bir yaklaşım olan Tailwind CSS ile hızlı ve tutarlı UI geliştirme sağlanır.
tailwind.config.ts dosyasında özelleştirmeler yapılabilir.
🤝 Katkıda Bulunma
Geliştirmelere katkıda bulunmak isterseniz, lütfen şu adımları izleyin:

Depoyu forklayın.
Yeni bir dal oluşturun (git checkout -b feature/AmazingFeature).
Değişikliklerinizi commit edin (git commit -m 'Add some AmazingFeature').
Dala push edin (git push origin feature/AmazingFeature).
Bir Pull Request (Çekme İsteği) açın.
