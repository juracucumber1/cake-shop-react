import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'
import { AppLayout } from './app/shares/componet/AppLayout'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppLayout>
        <App />
      </AppLayout>
    </BrowserRouter>
  </QueryClientProvider>,
)
