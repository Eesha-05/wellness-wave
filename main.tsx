
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import Index from './pages/Index.tsx'
import NotFound from './pages/NotFound.tsx'
import Login from './pages/Login.tsx'
import AdminDashboard from './pages/AdminDashboard.tsx'
import './index.css'
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    <Toaster />
  </BrowserRouter>
);
