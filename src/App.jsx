import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Layout/Header'
import View from './Pages/View'
import AddMovie from './Pages/AddMovie'
import Update from './Pages/Update'
import GoogleLogin from './Pages/GoogleLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/form' element={<AddMovie/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/google' element={<GoogleLogin/>}/>
      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
