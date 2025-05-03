import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreSection from "./components/ExploreSection";
import Highlights from "./components/Highlights";
import WhyEcume from "./components/WhyEcume";
import DiscoverSection from "./components/DiscoverSection";
import RecommendedDestinations from "./components/RecommendedDestinations";
import CTASection from "./components/CTASection";
import NewsSection from "./components/NewsSection";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className='font-inter text-gray-900'>
      <Hero />
      <ExploreSection />
      <Highlights />
      <WhyEcume />
      <DiscoverSection />
      <RecommendedDestinations />
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
        <Route path='/actualite' element={<actualite />} />
        <Route path='/apropos' element={<apropos />} />
        <Route path='/contact' element={<contact />} />
        {/* Add more routes as needed for future scalability */}
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
