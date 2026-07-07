import Header from "../components/Header";
import Services from "../components/Services";
import Access from "../components/Access";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import MobileCTA from "../components/MobileCTA";
import FixedContact from "../components/FixedContact";


export default function Home() {
  return (
 <main className="min-h-screen bg-black text-white">
  <Header />
  <Hero />
  <div className="space-y-32">
    <Services />
    <Access />
    <Footer />
    <Contact />
    <MobileCTA />
    {/* <FixedContact /> */}
  </div>
</main>
  );
}