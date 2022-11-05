import { useQuery } from '@tanstack/react-query'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { ProductAPI } from '../../../service/api/Product'
import { PageLayout } from '../../../shares/componet/PageLayout'

import styles from './Root.module.scss'
import { Add as AddIcon } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from '../../../shares/enum'
import { gramToKiloPrice } from '../../../shares/utils'

export const Root = () => {
  const { data, isLoading } = useQuery(['Product.getAll'], () =>
    ProductAPI.getAll({}),
  )

  return (
    <PageLayout
      title={
        <div className={styles.title}>
          <div>Ингридиенты</div>

          <NavLink to={Routes.CREATE}>
            <IconButton color="inherit">
              <AddIcon />
            </IconButton>
          </NavLink>
        </div>
      }
      loading={isLoading}
    >
      <div>
        {data?.map(({ name, weight, price, id }, idx) => (
          <NavLink to={id} key={id}>
            <List component="nav">
              <ListItem button>
                <ListItemText
                  primary={name}
                  secondary={`${gramToKiloPrice(weight, price)} Р/кг`}
                />
                <ListItemText
                  sx={{ textAlign: 'end' }}
                  primary={`${price} Р`}
                  secondary={`${weight}г `}
                />
              </ListItem>
              {idx + 1 !== data?.length && <Divider />}
            </List>
          </NavLink>
        ))}
      </div>
    </PageLayout>
  )
}
