import React from "react";
import Hero from "../components/Hero";
import ProductsSection from "../components/ProductsSection";
import ServicesSection from "../components/ServicesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import CtaBanner from "../components/CtaBanner";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
};

export default Home;
