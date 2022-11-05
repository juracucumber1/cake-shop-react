/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-use-before-define */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { PageLayout } from '../../../shares/componet/PageLayout'
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { Routes } from '../../../shares/enum'
import {
  ExpandMore,
  DeleteForever,
  MoreVert,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material'
import { InputProduct } from '../../../shares/UIkit/InputProduct'
import { Recipe, RecipeAPI, RecipeCreateReq } from '../../../service/api/Recipe'
import React, { useState } from 'react'

export const Create = () => {
  const navigate = useNavigate()
  const create = useMutation<Recipe, unknown, RecipeCreateReq, unknown>(
    RecipeAPI.create,
  )
  const form = useForm<RecipeCreateReq>()
  const { getValues, register, handleSubmit, control, setValue, watch } = form

  const { fields, append, remove, swap, move, insert } = useFieldArray({
    control,
    name: 'products',
  })

  const handlerSubmit = async () => {
    const { id } = await create.mutateAsync(getValues())
    navigate(`/${Routes.RECIPE}/${id}`)
  }

  return (
    <FormProvider {...form}>
      <PageLayout title="Рецепт" loading={create.isLoading}>
        <form onSubmit={handleSubmit(handlerSubmit)} className="col">
          <TextField label="Название" required {...register('name')} />
          <TextField label="Описание" required {...register('description')} />

          <Accordion elevation={3}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>Продукты</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {fields.map((field, idx) => {
                return <FieldInput
                  idx={idx}
                  id={field.id}
                  key={field.id}
                  total={fields.length}
                  onMove={move}
                  onRemove={remove}
                />
              })}
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                onClick={() => append({ product: '', weight: 0 })}
              >
                +
              </Button>
            </AccordionDetails>
          </Accordion>

          <Button type="submit" variant="contained">
            Добавить
          </Button>
        </form>
      </PageLayout>
    </FormProvider>
  )
}

interface FieldInputProps {
  id:string
  idx: number
  total: number
  onRemove: (idx: number) => void
  onMove: (a: number, b: number) => void
}

const FieldInput: React.FC<FieldInputProps> = ({
  id,
  idx,
  total,
  onMove,
  onRemove,
}) => {
  const { watch, setValue } = useFormContext()

  const [open, setOpen] = useState<null | HTMLElement>()
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }
  const handlerClose = () => setOpen(null)

  const handlerDelete = () => {
    onRemove(idx)
    handlerClose()
  }

  const handlerMove = (a: number, b: number) => {
    onMove(a, b)
    handlerClose()
  }

  return (
    <div key={id} className="flex gap-2 mb-2 justify-between">
      <InputProduct
        productId={watch(`products.${idx}.product`)}
        weight={watch(`products.${idx}.weight`)}
        onProductId={(productId) =>
          setValue(`products.${idx}.product`, productId)
            }
        onWeight={(weight) =>
          setValue(`products.${idx}.weight`, weight)
            }
      />
      <IconButton color="inherit" onClick={handleClick}>
        <MoreVert />
      </IconButton>
      <Menu anchorEl={open} open={!!open} onClose={handlerClose}>
        <MenuItem
          disabled={idx <= 0}
          onClick={() => handlerMove(idx, idx - 1)}
          className="flex gap-3"
        >
          <ArrowUpward /> Вверх
        </MenuItem>
        <MenuItem
          disabled={total - 1 === idx}
          onClick={() => handlerMove(idx, idx + 1)}
          className="flex gap-3"
        >
          <ArrowDownward /> Вниз
        </MenuItem>
        <MenuItem onClick={handlerDelete} className="flex gap-3">
          <DeleteForever color="error" /> Удалить
        </MenuItem>
      </Menu>
    </div>
  )
}
