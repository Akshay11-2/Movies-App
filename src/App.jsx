import './css/App.css'
import Favorite from './Pages/Favroite'
import Home from './Pages/HomePage'
import { Routes,Route } from 'react-router-dom'
import { MovieProvider } from './context/Moviecontext'
import Navbar from './component/Navbar'

function App() {
const movienumber = 1

  return (
    <div>
      <MovieProvider>
      <Navbar/>
    <main className='main-content'>
    <Routes>
      <Route path='/Home' element={<Home/>}/>
        <Route path='/fav' element={<Favorite/>}/>
    </Routes>
    </main>
    </MovieProvider>
    </div>
  
  )
}

export default App
