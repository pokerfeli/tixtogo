import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface PaymentTimerProps {
  initialMinutes: number;
  onExpire: () => void;
}

export function PaymentTimer({ initialMinutes, onExpire }: PaymentTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center space-x-2">
      <Clock className="w-5 h-5 text-gray-500" />
      <div>
        <div className="text-lg font-semibold">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
        {minutes <= 5 && (
          <div className="flex items-center text-red-600 text-sm mt-1">
            <AlertCircle className="w-4 h-4 mr-1" />
            <span>Please complete your payment soon!</span>
          </div>
        )}
      </div>
    </div>
  );
}