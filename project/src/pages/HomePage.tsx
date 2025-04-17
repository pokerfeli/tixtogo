import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Special Offers Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 15% Discount Offer */}
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <div className="text-xl font-bold mb-2">15% Discount!</div>
            <p className="mb-4">On all advance bookings</p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50">Book Now</button>
          </div>

          {/* 2x1 Tours Offer */}
          <div className="bg-purple-600 text-white p-6 rounded-lg">
            <div className="text-xl font-bold mb-2">2x1 on Tours</div>
            <p className="mb-4">Valid for groups of 4 or more</p>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50">View Tours</button>
          </div>

          {/* Family Package Offer */}
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <div className="text-xl font-bold mb-2">Family Package</div>
            <p className="mb-4">Save up to 25% on attractions</p>
            <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;