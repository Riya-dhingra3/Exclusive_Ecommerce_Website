import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { AuthProvider } from "./context/Authcontext";

createRoot(document.getElementById('root')!).render(
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
)
