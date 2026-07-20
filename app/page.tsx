import Header from "../components/Header";
import Hero from "../components/Hero";
import Purchase from "@/components/Purchase";
import PurchaseResults from "@/components/PurchaseResults";
import StockPreview from "@/components/StockPreview";
import Services from "../components/Services";
import Access from "../components/Access";
import Contact from "../components/Contact";
import MobileCTA from "../components/MobileCTA";
import Footer from "../components/Footer";
// import FixedContact from "../components/FixedContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <Hero />

      <Purchase />

      <PurchaseResults />

      <StockPreview />

      <div className="space-y-32">
        <Services />
        <Access />
      </div>

      <Contact />

      <MobileCTA />

      {/* <FixedContact /> */}

      <Footer />
    </main>
  );
}