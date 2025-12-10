import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { LegalGuide } from "./components/LegalGuide";
import { FreeConsultation } from "./components/FreeConsultation";
import { LegalResources } from "./components/LegalResources";
import { Articles } from "./components/Articles";
import { VisitorTracker } from "./components/VisitorTracker";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "¡Vuelve pronto! 👨‍⚖️";
      } else {
        document.title = "Rutalegal - Tu Aliado en Justicia";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <FreeConsultation />
      <LegalGuide />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <LegalResources />
      <Articles />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
      <VisitorTracker />
    </>
  );
}

export default App;
