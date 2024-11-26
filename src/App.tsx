import React, { useState } from 'react';
import { Bird, Phone, Mail, MapPin, CheckCircle, Leaf, Shield, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ReviewCard from './components/ReviewCard';
import OrderModal from './components/OrderModal';

function App() {
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOrder = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsOrderModalOpen(true);
  };

  const handleOrderSuccess = () => {
    setIsOrderModalOpen(false);
    setShowOrderSuccess(true);
    setTimeout(() => setShowOrderSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onOrder={() => setIsOrderModalOpen(true)} />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium Indigenous Kienyeji Chicks
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sustainably raised, naturally healthy, and locally adapted chicks for successful farming in Kakamega
            </p>
            <a href="#products" className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors">
              Explore Our Chicks
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Kienyeji Chicks?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Farming</h3>
              <p className="text-gray-600">Our chicks are raised naturally, promoting environmental sustainability and traditional farming methods.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Disease Resistant</h3>
              <p className="text-gray-600">Naturally strong immunity and adaptability to local conditions, reducing health risks.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600">Carefully selected breeding stock ensuring healthy, vigorous chicks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Chicks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Rainbow Kienyeji Chicks"
              price={180}
              image="https://images.unsplash.com/photo-1569396116180-210c182bedb8?auto=format&fit=crop&q=80&w=800"
              description="Multi-colored indigenous chicks perfect for free-range farming. Excellent foragers with high survival rates."
              features={["Disease resistant", "Excellent mothers", "Good egg production"]}
              onOrder={() => handleOrder('Rainbow Kienyeji')}
              featured={true}
            />
            <ProductCard
              title="Improved Kienyeji"
              price={200}
              image="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=800"
              description="Enhanced indigenous breed combining traditional hardiness with improved growth rates."
              features={["Fast growth", "Dual purpose", "Weather resistant"]}
              onOrder={() => handleOrder('Improved Kienyeji')}
            />
            <ProductCard
              title="Pure Indigenous"
              price={160}
              image="https://images.unsplash.com/photo-1612170153139-6f881ff067e0?auto=format&fit=crop&q=80&w=800"
              description="Original indigenous breed, perfect for preserving local genetics and traditional farming."
              features={["Pure genetics", "Hardy breed", "Low maintenance"]}
              onOrder={() => handleOrder('Pure Indigenous')}
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories from Our Farmers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ReviewCard
              name="John Wafula"
              location="Kakamega Central"
              review="The Kienyeji chicks from Kihima are exceptional. They've grown into healthy, productive birds with minimal care. Perfect for organic farming!"
              rating={5}
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            />
            <ReviewCard
              name="Mary Adhiambo"
              location="Mumias"
              review="Started with 50 Rainbow Kienyeji chicks, and their survival rate was amazing. Now running a successful free-range farm!"
              rating={5}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            />
            <ReviewCard
              name="David Ouma"
              location="Butere"
              review="The improved Kienyeji chicks grow faster while maintaining their natural foraging abilities. Best of both worlds!"
              rating={5}
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-green-600 mr-2" />
                    <span>+254 712 345 678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-2" />
                    <span>info@kihimapoultry.co.ke</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-2" />
                    <span>Kakamega Town, Kenya</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 8:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        onSuccess={handleOrderSuccess}
        selectedProduct={selectedProduct}
      />

      {/* Order Success Toast */}
      {showOrderSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Order placed successfully! We'll contact you shortly.</span>
        </div>
      )}
    </div>
  );
}

export default App;