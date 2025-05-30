import { defineStore } from 'pinia'
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { MENU_SECTIONS } from '@/constants/menu'

export const useSidebarStore = defineStore('sidebar', () => {
  const isOpen = ref(true)
  const activeMenu = ref('')
  const route = useRoute()
  const router = useRouter()

  const currentPath = computed(() => route.path)

  const allParentMenuItems = computed(() => {
    return MENU_SECTIONS.flatMap((section) => section.items)
  })

  const handleItemClick = (path: string) => {
    router.push(path)

    const parentItem = allParentMenuItems.value.find((menuItem) =>
      menuItem.subItems?.some((sub) => sub.path === path),
    )

    if (parentItem) {
      activeMenu.value = parentItem.path
    } else {
      activeMenu.value = ''
    }

    if (window.innerWidth < 768) {
      isOpen.value = false
    }
  }

  const handleToggleExpand = (path: string) => {
    activeMenu.value = activeMenu.value === path ? '' : path
  }

  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }

  const closeSidebar = () => {
    isOpen.value = false
  }

  const handleResize = () => {
    if (window.innerWidth < 768) {
      isOpen.value = false
    } else {
      isOpen.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  watch(
    currentPath,
    (newPath) => {
      const allParentItems = allParentMenuItems.value
      let foundActiveParentPath = ''

      for (const item of allParentItems) {
        if (item.subItems && item.subItems.some((subItem) => newPath.startsWith(subItem.path))) {
          foundActiveParentPath = item.path
          break
        }
      }

      if (foundActiveParentPath && foundActiveParentPath !== activeMenu.value) {
        activeMenu.value = foundActiveParentPath
      } else if (!foundActiveParentPath && activeMenu.value) {
        activeMenu.value = ''
      }
    },
    { immediate: true },
  )

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
