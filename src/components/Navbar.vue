<template>
  <nav class="flex items-center justify-between bg-white p-4 lg:rounded-lg shadow-sm">
    <div class="flex items-center">
      <div class="flex md:hidden items-center space-x-2 mr-6">
        <Logo :isOpen="true" />
      </div>

      <div class="hidden lg:flex flex-col">
        <h2 class="text-xl font-semibold text-gray-800">{{ $t('products') }}</h2>
        <p class="text-sm text-gray-500 mb-2">{{ $t('manageYourProducts') }}</p>
      </div>
    </div>

    <div class="flex items-center space-x-4">
      <div class="hidden lg:flex items-center space-x-4">
        <button
          class="flex items-center p-1 bg-gray-200 rounded-full cursor-pointer relative w-16 h-8 focus:outline-none"
          @click="toggleThemeMode"
          role="switch"
          :aria-checked="isDarkMode"
        >
          <span
            :class="`absolute flex items-center justify-center h-6 w-6 rounded-full transition-transform duration-300 ${
              isDarkMode ? 'translate-x-full bg-indigo-600' : 'translate-x-0 bg-white shadow'
            }`"
          >
            <component
              :is="isDarkMode ? SunIcon : MoonIcon"
              :class="isDarkMode ? 'h-4 w-4 text-white' : 'h-4 w-4 text-gray-600'"
            />
          </span>
        </button>

        <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-md" @click="toggleLocale">
          <LanguageIcon class="h-6 w-6" />
        </button>

        <div class="relative">
          <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <BellIcon class="h-6 w-6" />
          </button>
          <span
            class="absolute -top-1 -right-1 bg-[#CDFF65] text-black text-xs font-bold px-1.5 py-0.5 rounded-full"
          >
            12
          </span>
        </div>

        <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <ChatBubbleBottomCenterTextIcon class="h-6 w-6" />
        </button>

        <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <AdjustmentsHorizontalIcon class="h-6 w-6" />
        </button>
      </div>

      <div class="flex items-center space-x-2 ml-4 hidden md:flex">
        <div class="h-9 w-9 rounded-full bg-gray-300 flex items-center justify-center">
          <UserCircleIcon class="h-7 w-7 text-gray-600" />
        </div>
        <div class="flex flex-col text-right">
          <span class="text-sm font-semibold text-gray-800"> Davut DURGUN </span>
          <span class="text-xs text-gray-500">Super Admin</span>
        </div>
      </div>

      <button
        class="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
        @click="emit('menuToggle')"
      >
        <Bars3Icon class="h-6 w-6" />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  BellIcon,
  SunIcon,
  MoonIcon,
  LanguageIcon,
  UserCircleIcon,
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/vue/24/outline'

import Logo from '@/components/Logo.vue'

interface Emits {
  (e: 'menuToggle'): void
}

const emit = defineEmits<Emits>()

const isDarkMode = ref(false)

const { locale } = useI18n()

const toggleThemeMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

const toggleLocale = () => {
  locale.value = locale.value === 'tr' ? 'en' : 'tr'
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDarkMode.value = true
  }
  document.documentElement.classList.toggle('dark', isDarkMode.value)

  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    locale.value = savedLocale
  }
})

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})
</script>
