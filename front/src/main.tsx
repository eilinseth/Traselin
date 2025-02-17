import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import WebFont from 'webfontloader'
import { BrowserRouter, Route, Routes } from 'react-router'

WebFont.load({
  google : {
    families : ["Poppins:400,700","Pacifico:400,700","Raleway:400,700","Lora:400,700"]
  }
})

createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
    <StrictMode>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
