
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Menu, 
  X, 
  Mail, 
  Pill, 
  Droplets, 
  Activity,
  Twitter,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                VLS
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Mail className="w-4 h-4 mr-2" />
                Contact
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
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Products</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Ayurvedic,<br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Herbal Company
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
              Nature's Wisdom, Your Wellness
            </h2>
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg px-8 py-4">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Vimukul Life Science!
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Vimukul Life Science, established in 2019, is a pioneering company specializing in ophthalmic equipment and surgical knives, blades, and pharmaceuticals. With a commitment to enhancing medical practices, our products are designed with precision and innovation to meet the highest standards of quality and reliability.
                </p>
                <p>
                  Our dedicated team of over 30 professionals works diligently to ensure the continuous advancement and improvement of our product line. At Vimukul Life Science, we prioritize customer satisfaction, providing exceptional service and support to our clients.
                </p>
                <p>
                  Vimukul Life Science is more than just a supplier; we are a partner in healthcare innovation, committed to improving patient outcomes and advancing medical technology.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <Activity className="w-32 h-32 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">10</div>
              <div className="text-lg opacity-90">BRANDS</div>
            </div>
            <div className="text-center text-white animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">20</div>
              <div className="text-lg opacity-90">INDUSTRY EXPERIENCE</div>
            </div>
            <div className="text-center text-white animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">30</div>
              <div className="text-lg opacity-90">EMPLOYEES</div>
            </div>
            <div className="text-center text-white animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold mb-2">5</div>
              <div className="text-lg opacity-90">SUCCESSFUL YEARS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover-scale">
              <Pill className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cap VIMUKUL</h3>
              <p className="text-gray-600">Premium ayurvedic capsules for optimal health</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover-scale">
              <Activity className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Syp ROJEERA</h3>
              <p className="text-gray-600">Natural syrup for enhanced wellness</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover-scale">
              <Droplets className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Oil VIMUKUL</h3>
              <p className="text-gray-600">Therapeutic oils for holistic healing</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              &copy; Copyright <span className="font-bold">Vision Infinity</span>. All Rights Reserved
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

export default Index;
