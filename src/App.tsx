import { useViewportInit } from './app/hooks/useViewPortInit';
import { ModalManager } from './app/ModalManager'
import { AppRoutes } from './app/Routes/Routes'

function App() {
  useViewportInit();
  return (
    <>
      <AppRoutes />
      <ModalManager />
    </>
  )
}

export default App
