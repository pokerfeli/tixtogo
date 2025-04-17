import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const timeSlots = [
  { id: 1, time: '09:00 AM', available: true },
  { id: 2, time: '11:00 AM', available: true },
  { id: 3, time: '01:00 PM', available: false },
  { id: 4, time: '03:00 PM', available: true },
  { id: 5, time: '05:00 PM', available: true },
];

interface BookingPanelProps {
  onAddToCart: () => void;
  attractionName: string;
  price: number;
}

export function BookingPanel({ onAddToCart, attractionName, price }: BookingPanelProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleAddToCart = () => {
    // In a real application, we would validate date/time selection here
    onAddToCart();
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const monthYear = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isSelected = selectedDate && 
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();
      
      const isPast = isPastDate(date);
      
      days.push(
        <button
          key={day}
          onClick={() => {
            if (!isPast) {
              setSelectedDate(date);
              setShowCalendar(false);
            }
          }}
          disabled={isPast}
          className={`h-10 rounded-lg flex items-center justify-center transition-colors ${
            isSelected
              ? 'bg-blue-600 text-white'
              : isToday(date)
              ? 'bg-blue-50 text-blue-600'
              : isPast
              ? 'text-gray-300 cursor-not-allowed'
              : 'hover:bg-gray-50'
          }`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-10">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-medium">{monthYear}</span>
          <button
            onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-sm text-gray-500">from</span>
          <span className="text-3xl font-bold text-gray-900 ml-2">${price}</span>
        </div>
        <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
          <Check className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">Instant Confirmation</span>
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date
        </label>
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-4 py-2 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="text-gray-700">
            {selectedDate ? formatDate(selectedDate) : 'Choose a date'}
          </span>
          <CalendarIcon className="w-5 h-5 text-gray-400" />
        </button>
        {showCalendar && renderCalendar()}
      </div>

      {/* Time Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Available Time Slots
        </label>
        <div className="grid grid-cols-2 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              disabled={!slot.available}
              onClick={() => setSelectedTime(slot.time)}
              className={`
                flex items-center justify-center px-4 py-2 rounded-lg
                ${
                  selectedTime === slot.time
                    ? 'bg-blue-600 text-white'
                    : slot.available
                    ? 'bg-white border border-gray-300 text-gray-700 hover:border-blue-500'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }
              `}
            >
              <Clock className="w-4 h-4 mr-2" />
              {slot.time}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}