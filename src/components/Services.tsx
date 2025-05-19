"use client";

import { services } from "@/data/servicesData";
import SectionTitle from "./SectionTitle";
import { HoverEffect } from "./ui/card-hover-effect";

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-6 md:px-20 bg-background text-foreground"
    >
      <SectionTitle title="SERVICES" />
      <HoverEffect items={services} />
    </section>
  );
};

export default Services;
