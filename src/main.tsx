import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

import '@styles/global.scss'
import { ModalContextProvider } from './context/ModalContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalContextProvider>
  </StrictMode>,
)
