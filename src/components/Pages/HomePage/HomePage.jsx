import "./HomePage.module.scss";
import React from "react";
import { HomeSection } from "../../HomeSection/HomeSection";
import { AboutSection } from "../../AboutSection/AboutSection";
import { ExperienceSection } from "../../ExperienceSection/ExperienceSection";
import { SeminarSection } from "../../SeminarSection/SeminarSection";
import { FaqSection } from "../../FaqSection/FaqSection";
import { ContactSection } from "../../ContactSection/ContactSection";

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SeminarSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

export { HomePage };
