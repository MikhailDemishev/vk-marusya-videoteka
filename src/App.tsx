import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { ModalManager } from './app/ModalManager'

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <ModalManager />
    </MainLayout>
  )
}

export default App
