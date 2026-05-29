import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { inject, Analytics } from '@vercel/analytics'
import './index.css'
import App from './App.jsx'

inject()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
