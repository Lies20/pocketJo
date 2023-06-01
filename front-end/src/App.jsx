import './App.css'
import Athletes from './pages/Athletes'
import Homepage from './pages/Homepage'
import { Routes, Route } from "react-router-dom"
import Sports from './pages/Sports'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/sports' element={<Sports/>}/>
      <Route path='/athletes' element={<Athletes/>}/>
    </Routes>
 
  )
}

export default App
