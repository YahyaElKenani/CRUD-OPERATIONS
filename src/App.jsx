import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
export default function App() { 
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </Router>
  )
}