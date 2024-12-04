import { Routes, Route } from 'react-router-dom'
import { ThemeSwitcher } from './components/common/ThemeSwitcher'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Grainy background */}
      <div className="grainy-bg"></div>
      {/* <Routes>
      </Routes> */}
      <ThemeSwitcher />
    </div>
  );
}

export default App
