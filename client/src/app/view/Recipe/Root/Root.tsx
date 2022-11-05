import { PageLayout } from '../../../shares/componet/PageLayout'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { RecipeAPI } from '../../../service/api/Recipe'
import styles from '../../Product/Root/Root.module.scss'
import { NavLink } from 'react-router-dom'
import { Routes } from '../../../shares/enum'
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

export const Root = () => {
  const { isLoading, data } = useQuery(['RecipeAPI.getAll'], RecipeAPI.getAll)

  return (
    <PageLayout
      title={
        <div className={styles.title}>
          <div>Рецепты</div>

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
        {data?.map(({ name, description, id }, idx) => (
          <NavLink to={id} key={id}>
            <List component="nav">
              <ListItem button>
                <ListItemText primary={name} secondary={description} />
              </ListItem>
              {idx + 1 !== data?.length && <Divider />}
            </List>
          </NavLink>
        ))}
      </div>
    </PageLayout>
  )
}
