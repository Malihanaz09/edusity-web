// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/navbar/navbar'
import AboutUs from './component/pages/aboutUs/about'
import Compus from './component/pages/compus/Compus'
import Contactus from './component/pages/contactUs/Contactus'
import Home from './component/pages/home/home'
import Program from './component/pages/program/program'
import Testimonials from './component/pages/testimonials/Testimonials'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <Navbar/>
    <Home/>
    </div>
      <div className="app">
       <Program/>
       <AboutUs/>
       <Compus/>
       <Testimonials/>
       <Contactus/>
       <hr />
       <Footer/>
      </div>
    </>
  )
}

export default App
