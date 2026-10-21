import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { defineCustomElements } from '@gov-design-system-ce/components/loader'
import './index.css'
import './styles/tailwind.css'
import App from './App'

window.GOV_DS_CONFIG = {
  iconsPath: '/assets/icons',
}

defineCustomElements(window)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
