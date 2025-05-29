import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import "animate.css"
import './i18n';
import { WalletProvider } from './context/walletContext';

function App() {
  return (
    <div className='w-full'>
      <WalletProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </WalletProvider>
    </div>
  )
}

export default App
