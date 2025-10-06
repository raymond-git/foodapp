import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from './components/homepage.jsx';
import AddRecipe from './components/addRecipe.jsx';
import Success from './components/success.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
         <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
