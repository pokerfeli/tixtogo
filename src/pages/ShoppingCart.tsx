import React, { useState } from 'react';
import { BookingProgress } from '../components/BookingProgress';
import { AddOns } from '../components/AddOns';
import { PaymentConfirmation } from '../components/PaymentConfirmation';
import { 
  Clock, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Ticket
} from 'lucide-react';

interface ShoppingCartProps {
  onGoToPayment: () => void;
}

export function ShoppingCart({ onGoToPayment }: ShoppingCartProps) {
  const [isGeneralInfoOpen, setIsGeneralInfoOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [addOns, setAddOns] = useState([
    {
      id: 'priority',
      title: 'Priority Access',
      description: 'Skip all lines and enjoy instant entry to all attractions',
      price: 29.99,
      originalPrice: 39.99,
      selected: false
    },
    {
      id: 'guide',
      title: 'Audio Guide',
      description: 'Detailed audio commentary in 8 languages',
      price: 9.99,
      originalPrice: 14.99,
      selected: false
    },
    {
      id: 'photo',
      title: 'Photo Package',
      description: 'Professional photos at key locations',
      price: 19.99,
      originalPrice: 24.99,
      selected: false
    }
  ]);

  const cartItems = [
    {
      id: 1,
      name: 'Empire State Building Skip-the-Line Tickets',
      date: '2024-03-25',
      time: '10:00 AM',
      quantity: 2,
      price: 45,
      image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620',
    },
  ];

  const calculateSubtotal = () => {
    const itemsTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const addOnsTotal = addOns.reduce((total, addon) => total + (addon.selected ? addon.price : 0), 0);
    return itemsTotal + addOnsTotal;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleToggleAddOn = (id: string) => {
    setAddOns(prev => prev.map(addon => 
      addon.id === id ? { ...addon, selected: !addon.selected } : addon
    ));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
    }
  };

  const handlePaymentConfirm = () => {
    onGoToPayment();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Your Booking
        </h1>

        <BookingProgress currentStep={2} />

        <form onSubmit={handleSubmit} className="mt-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Additional Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* General Information Section */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsGeneralInfoOpen(!isGeneralInfoOpen)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <Ticket className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-semibold text-gray-900">
                      General Theme Park Tickets
                    </h2>
                  </div>
                  {isGeneralInfoOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {isGeneralInfoOpen && (
                  <div className="px-6 pb-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.firstName && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.lastName && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            formErrors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="mt-1 text-sm text-red-500">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <AddOns addOns={addOns} onToggleAddOn={handleToggleAddOn} />
                  </div>
                )}
              </div>

              {/* Add-Ons Section */}
              <AddOns addOns={addOns} onToggleAddOn={handleToggleAddOn} />

              {/* Payment Confirmation Section */}
              <PaymentConfirmation 
                total={calculateTotal()} 
                onConfirm={handlePaymentConfirm} 
              />
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Selected Package
                </h2>

                {cartItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${calculateSubtotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span>${calculateTax().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-orange-600 pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}