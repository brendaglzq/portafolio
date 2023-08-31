
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {



  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Home/>} path="/" />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
