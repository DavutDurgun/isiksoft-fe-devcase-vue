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
  ShieldCheckIcon,
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
    title: 'mainMenu',
    items: [
      {
        name: 'mainPage',
        path: '/',
        icon: HomeIcon,
      },
      {
        name: 'products',
        path: '/products',
        icon: CubeIcon,
        subItems: [
          {
            name: 'allProducts',
            path: '/products',
            icon: CubeIcon,
          },
          {
            name: 'addNewProduct',
            path: '/products/add',
            icon: CubeIcon,
          },
        ],
      },
      {
        name: 'tags',
        path: '/tags',
        icon: TagIcon,
      },
      {
        name: 'categories',
        path: '/categories',
        icon: RectangleStackIcon,
      },
      {
        name: 'subCategory',
        path: '/sub-category',
        icon: RectangleStackIcon,
      },
      {
        name: 'brands',
        path: '/brands',
        icon: TagIcon,
      },
      {
        name: 'scanBarcode',
        path: '/scan-barcode',
        icon: QrCodeIcon,
      },
      {
        name: 'importProducts',
        path: '/import-products',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    title: 'analytics',
    items: [
      {
        name: 'sales',
        path: '/sales',
        icon: ChartBarIcon,
        badge: 65,
      },
      {
        name: 'pointOfSales',
        path: '/pos',
        icon: MapPinIcon,
      },
      {
        name: 'leaderboards',
        path: '/leaderboards',
        icon: ChartBarIcon,
      },
      {
        name: 'orders',
        path: '/orders',
        icon: ClipboardDocumentListIcon,
        subItems: [
          {
            name: 'allOrders',
            path: '/orders/all',
            icon: ClipboardDocumentListIcon,
          },
          {
            name: 'pendingOrders',
            path: '/orders/pending',
            icon: ClipboardDocumentListIcon,
          },
        ],
      },
      {
        name: 'refund',
        path: '/refund',
        icon: ArrowPathIcon,
      },
      {
        name: 'taxes',
        path: '/taxes',
        icon: ShieldCheckIcon,
      },
      {
        name: 'stock',
        path: '/stock',
        icon: ArchiveBoxIcon,
      },
    ],
  },
  {
    title: 'apps',
    items: [
      {
        name: 'chat',
        path: '/chat',
        icon: ChatBubbleLeftRightIcon,
        badge: 10,
      },
      {
        name: 'calendar',
        path: '/calendar',
        icon: CalendarIcon,
      },
      {
        name: 'email',
        path: '/email',
        icon: EnvelopeIcon,
      },
    ],
  },
  {
    title: 'settings',
    items: [
      {
        name: 'settings',
        path: '/settings',
        icon: Cog6ToothIcon,
      },
      {
        name: 'logOut',
        path: '/logout',
        icon: ArrowRightOnRectangleIcon,
      },
    ],
  },
]
