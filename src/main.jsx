import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserProviderContext from './Context/UserProviderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProviderContext>
    <App />
    </UserProviderContext>
  </StrictMode>,
)
