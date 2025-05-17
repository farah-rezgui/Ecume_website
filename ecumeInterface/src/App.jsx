import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Actualite from "./components/Actualite";
import Contact from "./components/contact";
import Apropos from "./components/apropos";
import Reservation from "./components/reservation";
import JeuDeMemoir from "./components/jeuDeMemoir";
import LeboitAMysteres from "./components/leBoitAMysteres";
import FormulaireCommande from "./components/formulaireCommande";
import HomePage from "./components/home";
import { CartProvider } from "./context/CartContext";
import Product from "./components/product";
import DetailsProduct from "./components/DetailsProduct";
import ActualiteDetails from "./components/ActualiteDetails";

import React, { useEffect } from "react";


function App() {
  useEffect(() => {
    const initCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/cart/initCart", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data._id) {
          localStorage.setItem("cart_id", data._id);
        } else {
          console.error("Failed to initialize cart:", data);
        }
      } catch (error) {
        console.error("Error initializing cart:", error);
      }
    };
    if (!localStorage.getItem("cart_id")) {
      initCart();
    }
  }, []); // Run only once when the app starts
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen app-container">
          <nav> <Navbar /></nav>
          <main className="flex-grow ">
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/actualite' element={<Actualite />} />
              <Route path='/actualite/:id' element={<ActualiteDetails />} />
              <Route path='/apropos' element={<Apropos />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/reservation' element={<Reservation />} />
              <Route path='/jeuDeMemoir' element={<JeuDeMemoir />} />
              <Route path='/leBoitAMysteres' element={<LeboitAMysteres />} />
              <Route path='/formulaireCommande' element={<FormulaireCommande />} />
              <Route path='/produits' element={<Product />} />
              <Route path='/produits/:id' element={<DetailsProduct />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
