import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tech from "./components/Tech/Tech";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"


function App(){
return (
    <section className="app">
        <Navbar/>
        <Hero/>
        <About/>
        <Tech/>
        <Project/>
        <Contact/>
        <Footer/>
        
    </section>
)
}

export default App;