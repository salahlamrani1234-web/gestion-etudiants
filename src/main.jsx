import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {AppFournisseur} from "./AppContext.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFournisseur>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppFournisseur>
  </StrictMode>,
)