import {
  HomeIcon,
  CubeIcon,
  TagIcon,
  RectangleStackIcon,
  QrCodeIcon,
  ChartBarIcon,
  MapPinIcon,
  ClipboardDocumentListIcon,
  ArrowPathIcon,
  PercentBadgeIcon,
  ArchiveBoxIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  EnvelopeIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import type { MenuSection } from '@/types/sidebar'

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: 'MAIN MENU',
    items: [
      {
        name: 'Main Page',
        path: '/',
        icon: HomeIcon,
      },
      {
        name: 'Products',
        path: '/products',
        icon: CubeIcon,
        subItems: [
          {
            name: 'All Products',
            path: '/products/all',
            icon: CubeIcon,
          },
          {
            name: 'Add New Product',
            path: '/products/add',
            icon: CubeIcon,
          },
        ],
      },
      {
        name: 'Tags',
        path: '/tags',
        icon: TagIcon,
      },
      {
        name: 'Categories',
        path: '/categories',
        icon: RectangleStackIcon,
      },
      {
        name: 'Sub Category',
        path: '/sub-category',
        icon: RectangleStackIcon,
      },
      {
        name: 'Brands',
        path: '/brands',
        icon: TagIcon,
      },
      {
        name: 'Scan Barcode',
        path: '/scan-barcode',
        icon: QrCodeIcon,
      },
      {
        name: 'Import Products',
        path: '/import-products',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    title: 'ANALYTICS',
    items: [
      {
        name: 'Sales',
        path: '/sales',
        icon: ChartBarIcon,
        badge: 65,
      },
      {
        name: 'Point of Sales',
        path: '/pos',
        icon: MapPinIcon,
      },
      {
        name: 'Leaderboards',
        path: '/leaderboards',
        icon: ChartBarIcon,
      },
      {
        name: 'Orders',
        path: '/orders',
        icon: ClipboardDocumentListIcon,
        subItems: [
          {
            name: 'All Orders',
            path: '/orders/all',
            icon: ClipboardDocumentListIcon,
          },
          {
            name: 'Pending Orders',
            path: '/orders/pending',
            icon: ClipboardDocumentListIcon,
          },
        ],
      },
      {
        name: 'Refund',
        path: '/refund',
        icon: ArrowPathIcon,
      },
      {
        name: 'Taxes',
        path: '/taxes',
        icon: PercentBadgeIcon,
      },
      {
        name: 'Stock',
        path: '/stock',
        icon: ArchiveBoxIcon,
      },
    ],
  },
  {
    title: 'APPS',
    items: [
      {
        name: 'Chat',
        path: '/chat',
        icon: ChatBubbleLeftRightIcon,
        badge: 10,
      },
      {
        name: 'Calendar',
        path: '/calendar',
        icon: CalendarIcon,
      },
      {
        name: 'Email',
        path: '/email',
        icon: EnvelopeIcon,
      },
    ],
  },
  {
    title: 'SETTINGS',
    items: [
      {
        name: 'Settings',
        path: '/settings',
        icon: Cog6ToothIcon,
      },
      {
        name: 'Log Out',
        path: '/logout',
        icon: ArrowRightOnRectangleIcon,
      },
    ],
  },
]
