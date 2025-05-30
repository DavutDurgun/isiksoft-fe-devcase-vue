export interface Product {
  id: number
  imageUrl: string
  name: string
  category: string
  productCode: string
  price: number
  status: boolean
}

export interface ApiResponse<T> {
  message: string
  status: string
  data: T
}

export interface ProductsResponseData {
  message: string
  status: string
  currentPage: number
  totalPages: number
  totalItems: number
  data: Product[]
}
