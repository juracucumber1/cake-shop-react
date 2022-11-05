import AxiosInstance from '../../core/api/axiosinstance'
import { Product } from './Product'

export interface Recipe {
  id: string
  name: string
  description: string
  products: { _id: string, weight: number; product: Product }[]
}

const getAll = async (): Promise<Recipe[]> => {
  return (await AxiosInstance().get('recipes')).data
}

export interface RecipeGetOneReq {
  id: string
}
const getOne = async (data: RecipeGetOneReq): Promise<Recipe> => {
  return (await AxiosInstance().get(`recipes/${data.id}`)).data
}

export interface RecipeCreateReq extends Omit<Recipe, 'id' | 'products'> {
  products: {
    product: string
    weight: number
  }[]
}
const create = async (data: RecipeCreateReq): Promise<Recipe> => {
  return (await AxiosInstance().post('recipes', data)).data
}

export interface RecipeUpdateReq extends RecipeCreateReq {
  id: string
}
const update = async (data: RecipeUpdateReq): Promise<Recipe> => {
  return (await AxiosInstance().put(`recipes/${data.id}`, data)).data
}

export const RecipeAPI = {
  getAll,
  getOne,
  create,
  update,
}
