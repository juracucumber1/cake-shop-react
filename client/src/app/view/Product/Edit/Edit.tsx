import { Button, TextField } from '@mui/material'
import { PageLayout } from '../../../shares/componet/PageLayout'
import { useForm } from 'react-hook-form'
import {
  Product,
  ProductAPI,
  ProductCreateReq,
  ProductUpdateReq,
} from '../../../service/api/Product'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import React, { useEffect } from 'react'

export const Edit = () => {
  const { id } = useParams() as { id: string }

  const { isLoading, data } = useQuery(['ProductAPI.getOne', id], () =>
    ProductAPI.getOne({ id }),
  )
  const edit = useMutation<Product, unknown, ProductUpdateReq, unknown>(
    ProductAPI.update,
  )

  const control = useForm<ProductCreateReq>()
  const { getValues, register, handleSubmit, watch, setValue } = control

  useEffect(() => {
    Object.entries(data || {}).forEach(([key, value]) => {
      setValue(key as keyof ProductCreateReq, value.toString())
    })
  }, [data, setValue])

  const handlerSubmit = async () => {
    await edit.mutateAsync({ ...getValues(), id })
  }

  return (
    <PageLayout title="Ингридиент" loading={isLoading || edit.isLoading}>
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
