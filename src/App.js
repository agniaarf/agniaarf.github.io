import React from "react";
import Header from './components/header/Header';
import About from './components/about/About';
import Skill from "./components/skill/Skill";
import Mywork from './components/work/Mywork';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
    <Header/>
    <About/>
    <Skill/>
    <Mywork/>
    <Contact/>
    <Footer />
    </>
  );
}

export default App;
