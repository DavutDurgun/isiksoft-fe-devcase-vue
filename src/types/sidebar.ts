import type { FunctionalComponent, SVGAttributes } from 'vue'

export interface MenuItemType {
  name: string
  path: string
  icon: FunctionalComponent<SVGAttributes>
  badge?: number
  subItems?: MenuItemType[]
}

export interface MenuSection {
  title?: string
  items: MenuItemType[]
}

export interface SidebarState {
  isOpen: boolean
  activeMenu: string
}
