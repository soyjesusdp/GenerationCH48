import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComponentOne from './components/ComponentOne.jsx'
import Apod from './components/Apod.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Apod />
      <ComponentOne />
    </div>
  </StrictMode>,
)
