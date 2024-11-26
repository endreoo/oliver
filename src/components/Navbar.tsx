import { Menu, X, Bird } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onOrder: () => void;
}

export default function Navbar({ onOrder }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Bird className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Kihima Poultry</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#products" className="text-gray-700 hover:text-green-600">Products</a>
            <a href="#reviews" className="text-gray-700 hover:text-green-600">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            <button 
              onClick={onOrder}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Order Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Products</a>
            <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-green-600">Reviews</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</a>
            <button 
              onClick={onOrder}
              className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}