import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Routes } from './app/shares/enum'
import { ProductController } from './app/view/Product'
import { RecipeController } from './app/view/Recipe'

function App() {
  return useRoutes([
    { path: `${Routes.PRODUCT}/*`, element: <ProductController /> },
    { path: `${Routes.RECIPE}/*`, element: <RecipeController /> },
    { path: '*', element: <Navigate to={Routes.RECIPE} /> },
  ])
}

export default App
