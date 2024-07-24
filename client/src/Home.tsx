import { Button } from "@/components/ui/button";
import "./App.css";
import WhatWeOffer from "./components/WhatWeOffer";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured.tsx";
import ContactForm from "./components/ContactUs.tsx";
import SupportUs from "./components/SupportUs.tsx";
import Card from "@/components/FeaturedCard.tsx";
import HeroSection from "./components/HeroSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection></HeroSection>
      <WhatWeOffer />
      <Featured/>
      <ContactForm />
      <SupportUs />
    </>
  );
}

export default Home;
