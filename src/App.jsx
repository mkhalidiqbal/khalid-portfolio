import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testmonials from './components/testmonials/Testmonials'
import Contect from './components/contect/Contect'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <div>
     <Header/>
     <Nav/>
     <About/>
     <Experiance/>
     <Services/>
     <Portfolio/>
    <Testmonials/>
    <Contect/>
    <Footer/>
    </div>
    </>
  )
}

export default App
