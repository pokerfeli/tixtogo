import React from 'react';
import { Check } from 'lucide-react';

interface BookingProgressProps {
  currentStep: number;
}

export function BookingProgress({ currentStep }: BookingProgressProps) {
  const steps = [
    { label: 'Choose booking', step: 1 },
    { label: 'Enter info', step: 2 },
    { label: 'Pay', step: 3 },
  ];

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.step}>
            {/* Step Circle */}
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  currentStep > step.step
                    ? 'bg-green-500 border-green-500'
                    : currentStep === step.step
                    ? 'bg-blue-600 border-blue-600'
                    : 'bg-white border-gray-300'
                }`}
              >
                {currentStep > step.step ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      currentStep === step.step ? 'text-white' : 'text-gray-500'
                    }`}
                  >
                    {step.step}
                  </span>
                )}
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-600 whitespace-nowrap">
                {step.label}
              </span>
            </div>
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`w-24 h-[2px] mx-2 ${
                  currentStep > step.step + 1
                    ? 'bg-green-500'
                    : currentStep > step.step
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}