import { PageLayout } from '../../../shares/componet/PageLayout'
import { useParams } from 'react-router'
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { ProductAPI } from '../../../service/api/Product'
import { gramToKiloPrice } from '../../../shares/utils'
import { MoreVert as MoreVertIcon, Edit as EditIcon } from '@mui/icons-material'
import React, { useState } from 'react'
import { Routes } from '../../../shares/enum'
import { NavLink } from 'react-router-dom'

export const Id = () => {
  const [open, setOpen] = useState<null | HTMLElement>()

  const { id } = useParams() as { id: string }

  const { isLoading, data } = useQuery(['ProductAPI.getOne', id], () =>
    ProductAPI.getOne({ id }),
  )

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget)
  }

  const handlerClose = () => setOpen(null)

  return (
    <PageLayout title="Ингридиент" loading={isLoading}>
      <Card variant="elevation" elevation={3}>
        <CardContent>
          <div className="flex justify-between items-center">
            <Typography variant="h4" component="div">
              {data?.name}
            </Typography>

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
            Вес: {data?.weight} грамм
          </Typography>
          <Typography color="text.seconчdary">Цена: {data?.price} Р</Typography>
        </CardContent>

        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="h5">
            {gramToKiloPrice(data?.weight as number, data?.price as number)}{' '}
            Р/кг
          </Typography>
        </CardActions>
      </Card>
    </PageLayout>
  )
}
