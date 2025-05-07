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

const Footer = () => {
  return (
    <footer className='bg-white-600 text-black pt-16 pb-8 '>
      <div className='container-custom '>
        <div className=' flex justify-between  gap-10 mb-10   '>
          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-6 '>Contact</h3>
            <ul className='space-y-4'>
              <li className='flex items-start '>
                <MapPin className='h-5 w-5 text-yellow-400 mr-3 mt-1' />
                <span>Tunis,
                71 Av. Jean Jaurès,Tunis</span>
              </li>
              <li className='flex items-center'>
                <Phone className='h-5 w-5 text-yellow-400 mr-3' />
                <span>+216 99084410 - 22959752</span>
              </li>
              <li className='flex items-center'>
                <Mail className='h-5 w-5 text-yellow-400 mr-3' />
                <span>contact@ecume.tn 
                  Westerwelle Startup Haus Tunis,</span>
              </li>
            </ul>
            <div className='flex space-x-4 mt-6'>
              <a href='https://www.facebook.com/profile.php?id=61556609878965' className='text-gray-400 hover:text-black transition'>
                <Facebook className='h-5 w-5' />
              </a>
              <a href='#' className='text-gray-400 hover:text-black transition'>
                <Twitter className='h-5 w-5' />
              </a>
              <a href='https://www.instagram.com/ecume_culture/#' className='text-gray-400 hover:text-black transition'>
                <Instagram className='h-5 w-5' />
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
                <Link to='/news' className='hover:text-yellow-400 transition'>
                  Actualités
                </Link>
              </li>
              <li>
                <Link
                  to='/reservation'
                  className='hover:text-yellow-400 transition'>
                  Reservation
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
        </div>

        <div className='pt-8 border-t  text-center  text-sm  '>
          <div className='flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 flex justify-between'>
            <div className='flex items-center'>
              <span className='text-xl font-bold mr-2'>
                <span className='text-black'>ecume</span>
                <span className='text-yellow-400'>.</span>
              </span>
              <span className='text-xs tracking-widest'>
                DIGITAL CULTURAL LAB
              </span>
            </div>
            <span className='md:ml-4'>
              ©2025 ECUME Digital Cultural Lab. 
            </span >
            <span className='md:ml-4'>
            <a href='https://github.com/farah-rezgui' className=' hover:text-black transition'>
              Site created by  Rezgui Farah
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
