import './App.css'
import WhatWeOffer from './components/WhatWeOffer';
import Navbar from "./components/Navbar";

import ContactForm from "./components/ContactUs.tsx"
import SupportUs from "./components/SupportUs.tsx";

import HeroSection from "./components/HeroSection";
import Featured from './components/Featured.tsx';

function App() {
  

  return (
    <>

    <Navbar />
    <HeroSection></HeroSection>
    <WhatWeOffer />
    <Featured/>
    <ContactForm/>
    <SupportUs/>
    </>
  )
}

export default App
