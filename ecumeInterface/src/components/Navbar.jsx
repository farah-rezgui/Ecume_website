"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState("Fr");

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

  const toggleLanguage = () => {
    setLanguage(language === "Fr" ? "En" : "Fr");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
      <div className='container-custom flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <div className='text-3xl font-bold'>
            <span className='text-black'>ecume</span>
            <span className='text-yellow-400'>.</span>
          </div>
          <div className='text-xs tracking-widest ml-1 mt-auto mb-1'>
            DIGITAL CULTURAL LAB
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
                to='/parcours'
                className='font-medium hover:text-yellow-500 transition'>
                Parcours
              </Link>
            </li>
            <li>
              <Link
                to='/news'
                className='font-medium hover:text-yellow-500 transition'>
                News
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

        {/* Right Side - Language & Search */}
        <div className='hidden lg:flex items-center space-x-6'>
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
    </nav>
  );
};

export default Navbar;
