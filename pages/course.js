import React from "react";
import Bonus from "../components/course/Bonus";
import Faq from "../components/course/Faq";
import FirstCta from "../components/course/FirstCta";
import Footer from "../components/course/Footer";
import Hero from "../components/course/Hero";
import ImpModule from "../components/course/ImpModule";
import Modules from "../components/course/Modules";
import ProgramFor from "../components/course/ProgramFor";
import Recap from "../components/course/Recap";
import Section3 from "../components/course/Section3";
import Section9 from "../components/course/Section9";
import Testimonials from "../components/course/Testimonials";
import Timeline from "../components/course/Timeline";

export default function course() {
  return (
    <div>
      <Hero />
      <FirstCta />
      <Section3 />
      <Timeline />
      <Modules />
      <ImpModule />
      <ProgramFor />
      <Section9 />
      <Recap />
      <Bonus />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
