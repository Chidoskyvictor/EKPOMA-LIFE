import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GameProvider } from './hooks/useGame'
import { WelcomePage } from './pages/WelcomePage'
import { GamePage } from './pages/GamePage'

export default function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  )
}
