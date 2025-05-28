
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

const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const products = [
    {
      id: 'med1',
      name: 'Infy Liv',
      type: 'Syrup',
      image: 'med1.jpg',
      benefits: [
        'Increases resistance to infection',
        'Stimulates, repairs and regenerates hepatocytes',
        'Improve the functional efficiency of the liver',
        'Promotes appetite and weight gain in patients',
        'Regulates levels of liver enzymes and antimizes assimilation',
        'Tone up metabolism',
        'Improves Appetite'
      ]
    },
    {
      id: 'med2',
      name: 'Infy Tone',
      type: 'Syrup',
      image: 'med2.jpg',
      benefits: [
        'Helps to regulate the menstrual cycle',
        'Useful in bleeding disorders & inflammation of the uterus',
        'Improves blood circulation and nourishes skin.'
      ]
    },
    {
      id: 'med3',
      name: 'FOJEERA',
      type: 'Syrup',
      image: 'med3.jpg',
      benefits: [
        'Sonth (Dried Ginger): Sonth is believed to aid digestion, reduce bloating, and alleviate gastrointestinal discomfort.',
        'Kalimirch (Black Pepper): Kalimirch is commonly used to improve digestion, stimulate appetite, and relieve gas and bloating.',
        'Makoy (Solanum nigrum): Makoy is traditionally used to support liver health and promote digestion.',
        'Kala Jeera (Black Cumin): Kala Jeera is known for its carminative properties, helping to relieve gas and improve digestion.',
        'Swet Jeera (Cumin): Swet Jeera, or white cumin, is often used to enhance digestion and alleviate digestive issues like bloating and flatulence.',
        'Ajwain (Carom Seeds): Ajwain is commonly used in Ayurveda to promote digestion, reduce gas, and relieve abdominal discomfort.',
        'Souf (Fennel Seeds): Souf, or fennel seeds, are known to have carminative properties and are often used to soothe digestive issues like bloating and indigestion.',
        'Hing (Asafoetida): Hing is believed to aid digestion, relieve gas, and reduce bloating. It is commonly used in Ayurvedic remedies for digestive problems.',
        'Nimbu Satva (Lemon Extract): Nimbu Satva, or lemon extract, is known for its digestive benefits and its ability to stimulate digestion.',
        'Shudhha Lavang (Cloves): Shudhha Lavang, or cloves, have been traditionally used to support digestion and relieve digestive discomfort.',
        'Khand (Rock Sugar): Khand, or rock sugar, is used as a sweetener in Ayurvedic preparations and provides energy.',
        'Pipal (Pippali): Pipal, or pippali, is known for its carminative properties and is used to support digestion and alleviate gas and bloating.'
      ]
    },
    {
      id: 'med4',
      name: 'VIMKUL',
      type: 'Capsule',
      image: 'med4.png',
      benefits: [
        'Samir Pannas Ras: It is an Ayurvedic medicine that contains various herbal ingredients and minerals. It is primarily used for treating respiratory disorders and is believed to help in reducing cough, congestion, and breathing difficulties.',
        'Yogaraj Guggul: It is a classical Ayurvedic formulation that contains a blend of various herbs and minerals. It is commonly used for its anti-inflammatory properties and is believed to support joint health, reduce pain, and improve mobility.',
        'Mahavatvidhvasanna Ras: It is an Ayurvedic medicine that is traditionally used for managing vata dosha-related disorders. It is believed to provide relief from pain, stiffness, and inflammation in conditions such as arthritis and neurological disorders.',
        'Ashwagandha Ghan: Ashwagandha is a popular herb in Ayurvedic medicine known for its adaptogenic properties. It is believed to help manage stress, support the nervous system, boost energy levels, and enhance overall well-being.',
        'Dashmul Ghan: Dashmula is a combination of ten Ayurvedic herbs and is traditionally used to support the musculoskeletal system. It is believed to help relieve pain, inflammation, and stiffness in conditions such as arthritis and muscular disorders.',
        'Lahsun Sudhha: Lahsun refers to garlic, which is used in Ayurveda for its numerous health benefits. It is believed to have antimicrobial, anti-inflammatory, and cardiovascular benefits.'
      ]
    },
    {
      id: 'med5',
      name: 'VIMKUL',
      type: 'Liniment',
      image: 'med5.png',
      benefits: [
        'Mahanarayan Tel: This Ayurvedic oil is commonly used for joint and muscle pain relief. It may help reduce inflammation, improve blood circulation, and provide relaxation.',
        'Gandha Birouja Tel: Also known as Gandhapura oil or Indian Wintergreen oil, it is often used topically for its analgesic properties to relieve muscular and joint pain.',
        'Aung Tel: The specific benefits of "Aung Tel" are not clear from your description. It\'s possible that it refers to sesame oil (til tel), which is commonly used as a carrier oil in Ayurvedic formulations.',
        'Dalchini Ka Tel: Dalchini is cinnamon, and its oil is known for its warming properties. It may help improve blood circulation and provide a warming sensation when applied topically.',
        'Yograj Guggul: Yograj Guggul is an Ayurvedic herbal formulation traditionally used for joint pain, arthritis, and inflammation. It contains a combination of various herbs that may support joint health.',
        'Jayphal Tel: Jayphal is nutmeg, and its oil is often used for its analgesic and anti-inflammatory properties. It may help relieve pain and reduce swelling when applied topically.',
        'Erandbeej Tel: Erandbeej oil is derived from castor seeds and is commonly used as a carrier oil. It has moisturizing properties and can be beneficial for dry and rough skin.',
        'Nilgiri Tel: Nilgiri oil, also known as eucalyptus oil, is known for its cooling and soothing properties. It may help relieve respiratory congestion and muscle aches.',
        'Wintergreen Oil: Wintergreen oil (Gandhapura oil) is primarily used for its analgesic properties and is often included in topical formulations for joint and muscle pain relief.',
        'Karpur: Karpur refers to camphor, which has a cooling effect and is commonly used for its pain-relieving properties. It may help alleviate muscle soreness and provide a soothing sensation.',
        'Pudina Phool: Pudina phool is dried mint flower, and its oil is known for its cooling and refreshing properties. It may provide a soothing effect when applied topically.',
        'Ajwain Phool: Ajwain phool is carom seeds, and its oil is often used for its antiseptic properties. It may help relieve pain.'
      ]
    }
  ];

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
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="/products" className="text-blue-600 hover:text-blue-700 font-medium transition-colors border-b-2 border-blue-600">Products</a>
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
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="/products" className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded">Products</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Products
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={product.id} className={`grid md:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center shadow-inner">
                      <span className="text-gray-400 text-lg font-medium">Product Image</span>
                    </div>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <h4 className="text-xl text-blue-600 font-semibold mb-6">{product.type}</h4>
                  <ol className="space-y-3 list-decimal list-inside">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-700 leading-relaxed text-sm">
                        {benefit}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

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

export default Products;
