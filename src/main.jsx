import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './auth/context/AuthProvider'
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </ThemeProvider>
)
