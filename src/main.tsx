import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:svg-icons-register'
import App from './App.tsx'
import '@/assets/style/antd.scss'
import './index.css'



const app = createRoot(document.getElementById('root')!)

app.render(
  <StrictMode>
    <App />
  </StrictMode>,
)