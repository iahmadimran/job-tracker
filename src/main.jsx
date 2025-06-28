import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { JobProvider } from './context/JobContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JobProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </JobProvider>
    </BrowserRouter>
  </StrictMode>,
)
