import './App.css'
import WhatWeOffer from './components/WhatWeOffer';
import Navbar from "./components/Navbar";

import ContactForm from "./components/ContactUs.tsx"
import SupportUs from "./components/SupportUs.tsx";

import HeroSection from "./components/HeroSection";

function App() {
  

  return (
    <>

    <Navbar />
    <HeroSection></HeroSection>
    <WhatWeOffer />
    <ContactForm/>
    <SupportUs/>
    </>
  )
}

export default App
