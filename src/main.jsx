import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './components/MainPage'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <MainPage />
  </BrowserRouter>
  </React.StrictMode>
  
)

