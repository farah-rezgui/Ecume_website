import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Contact = () => {
  return (
    <footer className='bg-gray-900 text-white pt-16 pb-8'>
      <div className='container-custom'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Contact</h3>
            <ul className='space-y-4'>
              <li className='flex items-start'>
                <MapPin className='h-5 w-5 text-yellow-400 mr-3 mt-1' />
                <span>123 Rue de Carthage, Tunis 1000, Tunisie</span>
              </li>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 text-yellow-400 mr-3' />
                <span>+216 71 123 456</span>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 text-yellow-400 mr-3' />
                <span>contact@ecume-lab.com</span>
              </li>
            </ul>
            <div className='flex space-x-4 mt-6'>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <Facebook className='h-5 w-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <Twitter className='h-5 w-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <Instagram className='h-5 w-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition'>
                <Youtube className='h-5 w-5' />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Navigation</h3>
            <ul className='space-y-3'>
              <li>
                <Link to='/' className='hover:text-yellow-400 transition'>
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to='/parcours'
                  className='hover:text-yellow-400 transition'>
                  Parcours
                </Link>
              </li>
              <li>
                <Link
                  to='/experiences'
                  className='hover:text-yellow-400 transition'>
                  Expériences
                </Link>
              </li>
              <li>
                <Link to='/news' className='hover:text-yellow-400 transition'>
                  Actualités
                </Link>
              </li>
              <li>
                <Link to='/about' className='hover:text-yellow-400 transition'>
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-yellow-400 transition'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Liens utiles</h3>
            <ul className='space-y-3'>
              <li>
                <a href='#' className='hover:text-yellow-400 transition'>
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-400 transition'>
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-400 transition'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-400 transition'>
                  Partenaires
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-yellow-400 transition'>
                  Carrières
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-gray-800 text-center text-gray-400 text-sm'>
          <div className='flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0'>
            <div className='flex items-center'>
              <span className='text-xl font-bold mr-2'>
                <span className='text-white'>ecume</span>
                <span className='text-yellow-400'>.</span>
              </span>
              <span className='text-xs tracking-widest'>
                DIGITAL CULTURAL LAB
              </span>
            </div>
            <span className='md:ml-4'>
              ©2024 ECUME Digital Cultural Lab. Tous droits réservés.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

