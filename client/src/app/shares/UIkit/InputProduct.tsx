import { Autocomplete, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Product, ProductAPI } from '../../service/api/Product'
import { useForm } from 'react-hook-form'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

export interface InputProductPops {
  onProductId?: (id: string) => void
  onWeight?: (weight: number) => void
  productId?: string
  weight?: number
}

export const InputProduct: React.FC<InputProductPops> = ({
  onProductId = () => null,
  onWeight = () => null,
  productId: productIdProps,
  weight: weightProps,
}) => {
  const form = useForm({
    defaultValues: {
      productInput: '',
      productId: '',
      weight: '',
    },
  })
  const { watch, setValue } = form
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { productId, productInput, weight } = watch()

  const { data = [], isLoading } = useQuery(
    ['Product.getAll'],
    () => ProductAPI.getAll(),
  )

  const [defaultValue, setDefaultValue] = useState<Product | undefined>(data.find((d) => d.id === productIdProps))

  useEffect(() => {
    if (weightProps) {
      setValue('weight', String(weightProps))
    }
  }, [weightProps])

  useEffect(() => {
    if (productIdProps && !isLoading) {
      setValue('productId', productIdProps)
      const value = data.find((d) => d.id === productIdProps)
      if (value) {
        setDefaultValue(value)
      }
    }
  }, [productIdProps, isLoading])

  const handlerProductInput = (
    e: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setValue('productInput', value)
  }

  const handlerProduct = (product: Product) => {
    setValue('productId', String(product?.id))
    onProductId(String(product?.id))
  }

  const handlerWeight: OutlinedInputProps['onChange'] = (e) => {
    const { value } = e.target
    setValue('weight', value)
    onWeight(Number(value))
  }

  if (isLoading || !data.length || (productIdProps && !defaultValue)) {
    return <CircularProgress size={16} />
  }

  return (
    <>
      <Autocomplete
        fullWidth
        size={'small'}
        loading={isLoading}
        options={data}
        getOptionLabel={(d) => d.name}
        onChange={(_, product) => handlerProduct(product as Product)}
        onInputChange={handlerProductInput}
        // inputValue={productInput}
        defaultValue={defaultValue}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Продукт"
          />
        )}
      />
      <TextField
        sx={{ maxWidth: '30%' }}
        fullWidth
        size={'small'}
        label="Вес (грамм)"
        onChange={handlerWeight}
        value={weight}
      />
    </>
  )
}
