import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { PageLayout } from '../../../shares/componet/PageLayout'
import { RecipeAPI } from '../../../service/api/Recipe'
import { Card, CardActions, CardContent, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { Edit as EditIcon, MoreVert as MoreVertIcon } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { Routes } from '../../../shares/enum'
import { gramToKiloPrice } from '../../../shares/utils'

export const Id = () => {
  const [open, setOpen] = useState<null | HTMLElement>()

  const { id } = useParams() as { id: string }

  const { isLoading, data } = useQuery(['RecipeAPI.getOne', id], () =>
    RecipeAPI.getOne({ id }),
  )

  const totalPrice = data?.products.reduce(
    (acc, { product, weight }) => acc + gramToKiloPrice(product.weight, product.price) * (weight / 1000),
    0,
  ).toFixed(0)

  const totalWeight = data?.products.reduce((acc, { weight }) => acc + weight, 0).toFixed(0)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handlerClose = () => setOpen(null)

  return (
    <PageLayout title="Рецепт" loading={isLoading}>
      <Card variant="elevation" elevation={3}>
        <CardContent>
          <div className="flex justify-between items-center mb-5">
            <div>
              <Typography variant="h5" component="div">
                {data?.name}
              </Typography>
              <Typography variant="h6" component="div">
                {data?.description}
              </Typography>
            </div>

            <IconButton color="inherit" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={open} open={!!open} onClose={handlerClose}>
              <NavLink to={Routes.EDIT}>
                <MenuItem onClick={handlerClose} className="flex gap-3">
                  <EditIcon /> Изменить
                </MenuItem>
              </NavLink>
            </Menu>
          </div>

          <Typography color="text.secondary">
            Вес: {totalWeight} грамм
          </Typography>
          <Typography color="text.seconчdary">Цена: {totalPrice} Р</Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="h5">
            {gramToKiloPrice(Number(totalWeight), Number(totalPrice))} Р/кг
          </Typography>
        </CardActions>
      </Card>

      <Card elevation={3} variant="elevation" className="mt-5 p-3">
        <Typography variant="h4" component="div" className="mb-5">
          Ингридиенты
        </Typography>
        {data?.products.map(({ product, weight, _id }) => (
          <div className="flex justify-between items-center mb-5" key={_id}>
            <Typography variant="h5" component="div">
              {product?.name}
            </Typography>
            <Typography variant="h6" component="div">
              {weight} грамм
            </Typography>
          </div>
        ))}
      </Card>
    </PageLayout>
  )
}
