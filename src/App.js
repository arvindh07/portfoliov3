import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-scroll';

function App() {
  const heroRef = useRef(null);

  const handleScroll = (eleRef) => {
    console.log("clicked",eleRef);
    window.scrollTo({
      top:eleRef.current.offsetTop,
      behavior:"smooth",
    })
  }
  return (
    <Router>
      <div className="w-full h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-yellow-400">
        <Header />
        <section ref={heroRef} id="hero1" className="snap-start" >
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section id="contacts" className="snap-center">
          <Contact />
        </section>
        {/* <Link to="hero" smooth="true" duration={500}> */}
          <footer onClick={() => handleScroll(heroRef)} className="sticky bottom-10 flex w-full justify-center items-center">
            <ArrowUpCircleIcon className="w-10 h-10 text  text-gray-500 cursor-pointer transition-all duration-150 hover:text-yellow-500" />
          </footer>
        {/* </Link> */}
      </div>
      </Router>
  );
}

export default App;
