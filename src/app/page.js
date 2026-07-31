import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import SuccessStories from "@/components/SuccessStories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Features />
      <SuccessStories />
      <CTA />
      <Footer />
    </main>
  )
}