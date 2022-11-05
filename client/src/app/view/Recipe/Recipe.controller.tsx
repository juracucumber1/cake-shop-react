import { useRoutes } from 'react-router'
import { Routes } from '../../shares/enum'
import React from 'react'
import { Root } from './Root'
import { Navigate } from 'react-router-dom'
import { Create } from './Create'
import { Id } from './Id'
import { Edit } from './Edit'

export const RecipeController = () => {
  return useRoutes([
    { path: Routes.ROOT, element: <Root /> },
    { path: Routes.CREATE, element: <Create /> },
    { path: Routes.ID, element: <Id /> },
    { path: `${Routes.ID}/${Routes.EDIT}`, element: <Edit /> },
    { path: '*', element: <Navigate to={Routes.ROOT} /> },
  ])
}
