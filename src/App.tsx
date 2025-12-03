import { MainLayout } from './components/layout/MainLayout/MainLayout'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { GenresPage } from './pages/GenresPage/GenresPage'
import { ModalManager } from './app/ModalManager'
import { GenrePage } from './pages/GenrePage/GenrePage'
import { MoviePage } from './pages/MoviePage/MoviePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="genres" element={<GenresPage />} />
          <Route path="genres/:genre" element={<GenrePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
        </Route>
      </Routes>

      <ModalManager />
    </>
  )
}

export default App
