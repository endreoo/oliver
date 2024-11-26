import { ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  onOrder: () => void;
  featured?: boolean;
}

export default function ProductCard({ title, price, image, description, features, onOrder, featured }: ProductCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${featured ? 'border-2 border-green-500' : ''}`}>
      {featured && (
        <div className="bg-green-500 text-white text-center py-1 text-sm">
          Most Popular Choice
        </div>
      )}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">KSh {price}</span>
          <button
            onClick={onOrder}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}