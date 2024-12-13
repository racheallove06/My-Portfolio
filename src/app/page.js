"use client";
import "./globals.css";
import Navbar from "../components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Freelance from "@/components/Freelance";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    <Experience />
    <Freelance              />
    </div>
  );
}
