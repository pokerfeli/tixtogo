import React, { useState } from 'react';
import {
  Lock,
  Mail,
  Phone,
  Clock,
  Package,
  Truck,
  Calendar,
  AlertCircle,
  Send,
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  retailPrice: number;
  moq: number;
  description: string;
  specifications: string[];
  packaging: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Empire State Building Skip-the-Line Tickets',
    image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620',
    retailPrice: 45,
    moq: 10,
    description: 'Priority access tickets for the Empire State Building observation deck.',
    specifications: [
      'Valid for 1 year from purchase',
      'Digital delivery',
      'Instant confirmation',
      'Skip-the-line access'
    ],
    packaging: 'Digital tickets delivered in bulk via secure portal'
  },
  {
    id: 2,
    name: 'NYC Explorer Pass: 3 Attractions',
    image: 'https://images.unsplash.com/photo-1555109307-f7d9da25c244',
    retailPrice: 89,
    moq: 5,
    description: 'Choose any 3 attractions from over 80 options.',
    specifications: [
      'Valid for 30 days from first use',
      'Mobile tickets',
      'Instant delivery',
      'Free cancellation'
    ],
    packaging: 'Bulk digital codes with activation instructions'
  }
];

export function WholesalePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  const calculateWholesalePrice = (price: number) => {
    return (price * 0.8).toFixed(2); // 20% discount
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Wholesale Partners Portal
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Click below to access exclusive wholesale pricing
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Access Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Our Wholesale Program
          </h1>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start space-x-3">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-gray-600">Mon-Fri: 9AM - 6PM EST</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-gray-600">sales@yourdomain.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-gray-600">1-800-555-0123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Retail Price:</span>
                    <span className="text-lg font-semibold">${product.retailPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Wholesale Price:</span>
                    <span className="text-lg font-bold text-green-600">
                      ${calculateWholesalePrice(product.retailPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Minimum Order:</span>
                    <span>{product.moq} units</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Information */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Shipping & Delivery Information
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Package className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Bulk Packaging</h3>
                <p className="text-gray-600">
                  All orders are carefully packaged for safe delivery
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Truck className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Shipping Methods</h3>
                <p className="text-gray-600">
                  Express and standard shipping available worldwide
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Delivery Time</h3>
                <p className="text-gray-600">
                  2-5 business days for digital delivery
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Wholesale Terms & Conditions
          </h2>
          <div className="prose max-w-none text-gray-600">
            <ul className="list-disc pl-5 space-y-2">
              <li>Minimum order quantities (MOQ) apply to all products</li>
              <li>20% discount applies to orders meeting MOQ requirements</li>
              <li>Payment terms: Net 30 for approved accounts</li>
              <li>Prices are subject to change without notice</li>
              <li>Bulk orders may require 24-48 hours for processing</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="fixed bottom-8 right-8">
          <a
            href="mailto:sales@yourdomain.com"
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Sales</span>
          </a>
        </div>

        {/* Quote Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-xl font-bold mb-4">Request Wholesale Quote</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product
                  </label>
                  <p className="text-gray-900">{selectedProduct.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min={selectedProduct.moq}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Minimum order: {selectedProduct.moq} units
                  </p>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // Handle quote request
                      setSelectedProduct(null);
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}