import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from './routers/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </BrowserRouter>
)
