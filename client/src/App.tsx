import './App.css'
import WhatWeOffer from './components/WhatWeOffer';
import Navbar from "./components/Navbar";

import ContactForm from "./components/ContactUs.tsx"
import SupportUs from "./components/SupportUs.tsx";

import HeroSection from "./components/HeroSection";
import FindTeamMates from './components/FindTeamMates.tsx';

function App() {
  

  return (
    <>

    <Navbar />
    <HeroSection />
    <WhatWeOffer />
    <ContactForm />
    <SupportUs />
    <FindTeamMates />
    </>
  )
}

export default App
