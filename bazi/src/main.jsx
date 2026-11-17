import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Service from './Service'
import About from './About'
import Gallery from './Gallery'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Gallery />
    <About />
    <Service />
  </StrictMode>,
)
