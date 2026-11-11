import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Destinations from "@/components/home/Destinations";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import HomeFaq from "@/components/home/HomeFaq";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Destinations />
      <ProcessSection />
      <AboutSection />
      <Testimonials />
      <HomeFaq />
      <CTASection />
    </>
  );
}
