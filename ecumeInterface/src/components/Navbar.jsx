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
      className={`${"fixed "} w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}>
      <div className='flex items-center justify-between container-custom'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <div className='text-3xl font-bold'>
            <img
              src='/public/images/digital-long.png'
              alt='logo'
              className='object-scale-down w-48 h-24'
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='items-center justify-center flex-1 hidden lg:flex'>
          <ul className='flex space-x-8'>
            <li>
              <Link
                to='/'
                className='font-medium transition hover:text-yellow-500'>
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to='/actualite'
                className='font-medium transition hover:text-yellow-500'>
                Actualité
              </Link>
            </li>
            <li>
              <Link
                to='/produits'
                className='font-medium transition hover:text-yellow-500'>
                Nos jeux
              </Link>
            </li>
            <li>
              <Link
                to='/reservation'
                className='font-medium transition hover:text-yellow-500'>
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to='/apropos'
                className='font-medium transition hover:text-yellow-500'>
                A propos
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='font-medium transition hover:text-yellow-500'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Cart and Member buttons */}
        <div className='items-center hidden space-x-4 md:flex'>
          <button
            onClick={() => setIsCartOpen(true)}
            className='relative p-2 text-black transition-colors hover:text-yellow'>
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
              <span className='absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-black rounded-full -top-1 -right-1 bg-yellow'>
                {cart.items.length}
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("/contact")}
            className='px-6 py-3 font-semibold text-black duration-300 bg-yellow-500 hover:bg-black hover:text-white'>
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
        <div className='absolute left-0 w-full bg-white shadow-md lg:hidden top-full'>
          <div className='py-4 container-custom'>
            <ul className='mb-6 space-y-4'>
              <li>
                <Link
                  to='/'
                  className='block font-medium transition hover:text-yellow-500'
                  onClick={() => setIsOpen(false)}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to='/parcours'
                  className='block font-medium transition hover:text-yellow-500'
                  onClick={() => setIsOpen(false)}>
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  to='/news'
                  className='block font-medium transition hover:text-yellow-500'
                  onClick={() => setIsOpen(false)}>
                  News
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block font-medium transition hover:text-yellow-500'
                  onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className='flex items-center pt-4 space-x-6 border-t'>
              <button
                onClick={toggleLanguage}
                className='flex items-center space-x-1'>
                <Globe size={18} />
                <span className='text-sm font-medium'>{language}</span>
              </button>
              <button className='transition hover:text-yellow-500'>
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
