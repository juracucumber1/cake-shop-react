import { Navigate, Outlet, useRoutes } from 'react-router'
import { Routes } from '../../shares/enum'
import { Create } from './Create'
import { Root } from './Root'
import { Id } from './Id'
import { Edit } from './Edit'
import React from 'react'

export const ProductController = () => {
  return useRoutes([
    { path: Routes.ROOT, element: <Root /> },
    { path: Routes.CREATE, element: <Create /> },
    {
      path: Routes.ID,
      element: <Outlet />,
      children: [
        { path: Routes.ROOT, element: <Id /> },
        { path: Routes.EDIT, element: <Edit /> },
      ],
    },
    { path: '*', element: <Navigate to={Routes.ROOT} /> },
  ])
}
