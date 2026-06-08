import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './views/App.jsx'
import Header from './components/Header.jsx'
import Cart from './views/Cart.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
