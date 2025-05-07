import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreSection from "./components/ExploreSection";
import Highlights from "./components/Highlights";
import WhyEcume from "./components/WhyEcume";
import DiscoverSection from "./components/DiscoverSection";
import CTASection from "./components/CTASection";
import NewsSection from "./components/NewsSection";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Actualite from "./components/Actualite";
import Contact from "./components/contact";
import Apropos from "./components/apropos";
import Reservation from "./components/reservation";
import JeuDeMemoir from "./components/jeuDeMemoir";
import LeboitAMysteres from "./components/leBoitAMysteres";
import FormulaireCommande from "./components/formulaireCommande";


function HomePage() {
  return (
    <div className='font-inter text-gray-900'>
      <Hero />
      <ExploreSection />
      <Highlights />
      <WhyEcume />
      <DiscoverSection />
      <CTASection />
      <NewsSection />
      <About />
      <Newsletter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen">
      <Navbar />
      <main className = "flex-grow">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/actualite' element={<Actualite />} />
        <Route path='/apropos' element={<Apropos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/jeuDeMemoir' element={<JeuDeMemoir />} />
        <Route path='/leBoitAMysteres' element={<LeboitAMysteres />} />
        <Route path='/formulaireCommande' element={<FormulaireCommande/>} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
