import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { router } from './routes/routes'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
      }}
      withGlobalStyles withNormalizeCSS>

      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
