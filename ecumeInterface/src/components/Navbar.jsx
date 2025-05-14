"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";
import CartSlider from "./cartSlider";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${"fixed "} w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
      <div className='container-custom flex  items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <div className='text-3xl font-bold'>
            <img
              src='/public/images/digital-long.png'
              alt='logo'
              className='h-24 w-48 object-scale-down'
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center justify-center flex-1'>
          <ul className='flex space-x-8'>
            <li>
              <Link
                to='/'
                className='font-medium hover:text-yellow-500 transition'>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to='/actualite'
                className='font-medium hover:text-yellow-500 transition'>
                Actualité
              </Link>
            </li>
            <li>
              <Link
                to='/produits'
                className='font-medium hover:text-yellow-500 transition'>
                Nos jeux
              </Link>
            </li>
            <li>
              <Link
                to='/reservation'
                className='font-medium hover:text-yellow-500 transition'>
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to='/apropos'
                className='font-medium hover:text-yellow-500 transition'>
                A propos
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='font-medium hover:text-yellow-500 transition'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Cart and Member buttons */}
        <div className='hidden md:flex items-center space-x-4'>
          <button
            onClick={() => setIsCartOpen(true)}
            className='relative p-2 text-black hover:text-yellow transition-colors'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
            {cart.items.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-yellow text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold'>
                {cart.items.length}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className='bg-yellow-500 px-6 py-3 text-black font-semibold hover:bg-black hover:text-white duration-300'>
            Devenir membre
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='lg:hidden bg-white absolute top-full left-0 w-full shadow-md'>
          <div className='container-custom py-4'>
            <ul className='space-y-4 mb-6'>
              <li>
                <Link
                  to='/'
                  className='block font-medium hover:text-yellow-500 transition'
                  onClick={() => setIsOpen(false)}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to='/parcours'
                  className='block font-medium hover:text-yellow-500 transition'
                  onClick={() => setIsOpen(false)}>
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  to='/news'
                  className='block font-medium hover:text-yellow-500 transition'
                  onClick={() => setIsOpen(false)}>
                  News
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block font-medium hover:text-yellow-500 transition'
                  onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className='flex items-center space-x-6 border-t pt-4'>
              <button
                onClick={toggleLanguage}
                className='flex items-center space-x-1'>
                <Globe size={18} />
                <span className='text-sm font-medium'>{language}</span>
              </button>
              <button className='hover:text-yellow-500 transition'>
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      <CartSlider isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
};

export default Navbar;
