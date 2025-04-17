import React, { useState } from 'react';
import { BookingProgress } from '../components/BookingProgress';
import { PaymentTimer } from '../components/PaymentTimer';
import { CreditCard, Wallet, AlertCircle } from 'lucide-react';

const paymentMethods = [
  {
    id: 'credit-card',
    name: 'Credit Card',
    icon: CreditCard,
    description: 'Pay securely with your credit card',
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: Wallet,
    description: 'Fast and secure payment with PayPal',
  },
];

export function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<string>('credit-card');
  const [isExpired, setIsExpired] = useState(false);

  const handleExpire = () => {
    setIsExpired(true);
  };

  const bookingSummary = {
    items: [
      {
        name: 'Empire State Building Skip-the-Line Tickets',
        quantity: 2,
        price: 45,
      },
    ],
    addOns: [
      {
        name: 'Priority Access',
        price: 29.99,
      },
    ],
    subtotal: 119.99,
    tax: 9.60,
    total: 129.59,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Complete Your Payment
        </h1>

        <BookingProgress currentStep={3} />

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          {/* Left Column - Payment Methods */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Timer */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <PaymentTimer initialMinutes={15} onExpire={handleExpire} />
                {!isExpired && (
                  <p className="text-sm text-gray-600 mt-2">
                    Please complete your payment to secure your booking
                  </p>
                )}
                {isExpired && (
                  <div className="flex items-center text-red-600 mt-2">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Payment session expired. Please start over.</span>
                  </div>
                )}
              </div>

              {/* Payment Methods */}
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Select Payment Method
              </h2>
              <div className="space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <div
                      key={method.id}
                      className={`relative rounded-lg border p-4 cursor-pointer transition-colors ${
                        selectedMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <Icon className="w-6 h-6 text-gray-700" />
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {method.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Booking Summary
              </h2>

              {/* Items */}
              <div className="space-y-4 mb-6">
                {bookingSummary.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <p className="text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <span className="text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                {/* Add-ons */}
                {bookingSummary.addOns.map((addon, index) => (
                  <div key={index} className="flex justify-between text-gray-600">
                    <span>{addon.name}</span>
                    <span>${addon.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${bookingSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${bookingSummary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                  <span>Total</span>
                  <span>${bookingSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}