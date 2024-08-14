
import WhatWeOffer from "./WhatWeOffer";
import Featured from "./Featured.tsx";
import ContactForm from "./ContactUs.tsx";
import SupportUs from "./SupportUs.tsx";
import HeroSection from "./HeroSection";

function MainPage() {
 

  return (
    <div>
      <HeroSection></HeroSection>
      <WhatWeOffer />
      <Featured/>
      <ContactForm />
      <SupportUs />
    </div>
  )
}

export default MainPage
