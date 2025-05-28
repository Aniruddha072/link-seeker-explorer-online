
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Mail, 
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                VLS
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="/about" className="text-blue-600 hover:text-blue-700 font-medium transition-colors border-b-2 border-blue-600">About</a>
              <a href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="/about" className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded">About</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Products</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* What is Vimukul Life Science */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  What is Vimukul Life Science?
                </h2>
                <div className="text-gray-600 leading-relaxed italic">
                  <p>
                    Vimukul Life Science is a leading provider of ophthalmic equipment, surgical knives, and blades. Established in 2019, we are dedicated to enhancing medical practices with high-quality, innovative products. With over 30 dedicated professionals, we ensure precision and reliability in every product, serving the needs of ophthalmologists and surgeons globally. Our commitment to excellence and customer satisfaction drives our continuous advancement in medical technology.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-4xl font-bold">VLS</span>
                    </div>
                    <p className="text-gray-600 font-medium">Leading Medical Innovation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Vision
              </h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-lg">
                Our commitment to excellence and customer satisfaction drives us to continuously advance our technology and support the healthcare community worldwide.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Mission
              </h2>
              <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto text-lg">
                At Vimukul Life Science, our mission is to revolutionize ophthalmic and surgical care through innovation and precision. We are dedicated to developing and delivering high-quality equipment, surgical knives, blade and pharmaceutical that enhance medical practices and improve patient outcomes. Our commitment to excellence and customer satisfaction drives us to continuously advance our technology and support the healthcare community worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-gray-200" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              &copy; Copyright <span className="font-bold">Vimukul Life Science</span>. All Rights Reserved
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
