import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpen = ref(true)
  const activeMenu = ref('')
  const route = useRoute()
  const router = useRouter()

  const currentPath = computed(() => route.path)

  const handleItemClick = (path: string) => {
    console.log(`Item body clicked (navigate): ${path}`)
    router.push(path)

    if (window.innerWidth < 768) {
      isOpen.value = false
    }
  }

  const handleToggleExpand = (path: string) => {
    console.log(`Expand icon clicked (toggle): ${path}`)

    activeMenu.value = activeMenu.value === path ? '' : path
  }

  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  const closeSidebar = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    activeMenu,
    currentPath,
    handleItemClick,
    handleToggleExpand,
    toggleSidebar,
    closeSidebar,
  }
})
