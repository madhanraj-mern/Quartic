import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/quartic-style.css'
import './assets/css/navigation.css'
import './assets/css/animations.css'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
