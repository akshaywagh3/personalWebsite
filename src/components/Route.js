import { Outlet } from "react-router-dom";
import Header from "./Header";
import React from 'react'
import Footer from "./Footer";
// import Home from "./Home";
// import About from './About';
// import Projects from "./Projects";
// import Contact from "./Contact";
const Route = () => {
  return (
    <>
        <Header/>
        
        {/* <Home/>
        <About/>
        <Projects/>
        <Contact/> */}
        <main><Outlet/></main>
        <Footer/>
    
    </>
    
  )
}

export default Route