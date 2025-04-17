import React, { useState } from 'react';
import { AlertCircle, Check } from 'lucide-react';

interface PaymentConfirmationProps {
  total: number;
  onConfirm: () => void;
}

export function PaymentConfirmation({ total, onConfirm }: PaymentConfirmationProps) {
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!termsAccepted) {
      newErrors.push('You must accept the Terms & Conditions to continue');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      setIsProcessing(true);
      try {
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        onConfirm();
      } catch (error) {
        setErrors(['Processing failed. Please try again.']);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <div className="max-w-[800px] mx-auto">
        {/* Payment Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#2D54AF] mb-4">Payment Summary</h2>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg mb-4">
            <span className="text-2xl font-bold text-gray-900">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Legal Requirements */}
        <div className="space-y-4 mb-8">
          {/* Marketing Consent */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="marketing"
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="w-4 h-4 text-[#2D54AF] border-gray-300 rounded focus:ring-[#2D54AF]"
              />
            </div>
            <label htmlFor="marketing" className="ml-3 text-sm text-gray-600">
              I agree to receive marketing communications about special offers and updates
              (optional)
            </label>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 text-[#2D54AF] border-gray-300 rounded focus:ring-[#2D54AF]"
              />
            </div>
            <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
              I have read and agree to the{' '}
              <a href="#" className="text-[#2D54AF] hover:underline">
                Terms & Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#2D54AF] hover:underline">
                Privacy Policy
              </a>
              *
            </label>
          </div>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="w-5 h-5 text-[#D42F2F] mr-2" />
                <div className="text-[#D42F2F] text-sm">
                  {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Elements */}
        <div className="flex flex-col items-center">
          <button
            onClick={handleSubmit}
            disabled={isProcessing}
            className={`w-full h-12 rounded-lg font-medium text-white transition-colors ${
              isProcessing
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#2D54AF] hover:bg-[#1E3C7B]'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Go to Payment'
            )}
          </button>

          {/* Success Message */}
          {isProcessing && (
            <div className="mt-4 flex items-center text-[#0A8A3F]">
              <Check className="w-5 h-5 mr-2" />
              <span>Processing your request...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}