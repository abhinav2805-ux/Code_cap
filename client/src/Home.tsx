import "./App.css";
import WhatWeOffer from "./components/WhatWeOffer";
import Featured from "./components/Featured.tsx";
import ContactForm from "./components/ContactUs.tsx";
import SupportUs from "./components/SupportUs.tsx";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <WhatWeOffer />
      <Featured/>
      <ContactForm />
      <SupportUs />
    </>
  );
}

export default Home;
