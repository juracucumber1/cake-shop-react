import AxiosInstance from '../../core/api/axiosinstance'
import { querystring } from '../../shares/utils/querystring'

export interface Product {
  id: string
  name: string
  price: number
  weight: number
  // units: number
  // type: 'weight' | 'piece'
}

export interface ProductGetAllReq { name?: string }
const getAll = async (data: ProductGetAllReq = {}): Promise<Product[]> => {
  return (await AxiosInstance().get(`products?${querystring.stringify(data)}`))
    .data
}
export interface ProductGetOneReq {
  id: string
}
const getOne = async (data: ProductGetOneReq): Promise<Product> => {
  return (await AxiosInstance().get(`products/${data.id}`)).data
}

export type ProductCreateReq = Omit<Product, 'id'>
const create = async (data: ProductCreateReq): Promise<Product> => {
  return (await AxiosInstance().post('products', data)).data
}

export type ProductUpdateReq = Product
const update = async (data: ProductUpdateReq): Promise<Product> => {
  return (await AxiosInstance().put(`products/${data.id}`, data)).data
}

export const ProductAPI = {
  getAll,
  getOne,
  create,
  update,
}
