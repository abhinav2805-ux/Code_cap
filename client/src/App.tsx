import { Button } from "@/components/ui/button";
import './App.css'
import WhatWeOffer from './components/WhatWeOffer';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
function App() {
  

  return (
    <>
     <Navbar />
     <HeroSection></HeroSection>
    <WhatWeOffer />
    </>
  )
}

export default App
