import { Button, TextField } from '@mui/material'
import { PageLayout } from '../../../shares/componet/PageLayout'
import { useForm } from 'react-hook-form'
import {
  Product,
  ProductAPI,
  ProductCreateReq,
} from '../../../service/api/Product'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { Routes } from '../../../shares/enum'
import React from 'react'

export const Create = () => {
  const navigate = useNavigate()
  const create = useMutation<Product, unknown, ProductCreateReq, unknown>(
    ProductAPI.create,
  )
  const control = useForm<ProductCreateReq>()
  const { getValues, register, handleSubmit, watch } = control

  const handlerSubmit = async () => {
    const { id } = await create.mutateAsync(getValues())
    navigate(`/${Routes.PRODUCT}/${id}`)
  }

  return (
    <PageLayout title="Ингридиент" loading={create.isLoading}>
      <form onSubmit={handleSubmit(handlerSubmit)} className="col">
        <TextField label="Название" required {...register('name')} />
        <TextField
          label={`Вес (грамм) = ${watch('weight') / 1000}кг`}
          required
          {...register('weight')}
        />
        <TextField label="Цена" required {...register('price')} />

        <Button type="submit" variant="contained">
          Добавить
        </Button>
      </form>
    </PageLayout>
  )
}
