import React from 'react';
import { Clock, MapPin, Globe } from 'lucide-react';
import type { Database } from '../types/database.types';

type ProductDetail = Database['public']['Tables']['product_details']['Row'];

interface ProductDetailsProps {
  name: string;
  description?: string | null;
  productDetails?: ProductDetail | null;
}

export function ProductDetails({ name, description, productDetails }: ProductDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Product Description Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
        <div className="prose max-w-none">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600">
            {productDetails?.long_description || description || 'Experience one of New York City\'s most iconic attractions.'}
          </p>
        </div>
      </div>

      {/* Operating Hours & Location Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-8">
          {/* Operating Hours */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Operating hours</h3>
            </div>
            <div className="space-y-2">
              <div className="text-lg font-medium text-gray-800" 
                dangerouslySetInnerHTML={{ 
                  __html: productDetails?.operating_hours || 'Daily 9:00AM – 11:00PM (Last entry 10:10PM)'
                }} 
              />
              <p className="text-sm text-gray-600 italic">
                * Operating hours may change, such as early closing, depending on the circumstances 
                of the business, so be sure to check the official website before visiting.
              </p>
            </div>
          </div>

          {/* Entrance Location */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Where to enter</h3>
            </div>
            <div className="flex gap-6">
              <div className="flex-1">
                <div className="text-gray-800"
                  dangerouslySetInnerHTML={{ 
                    __html: productDetails?.entrance_info || 'After entering the entrance (marked with a red carpet), go to the ticket counter.'
                  }}
                />
              </div>
              <div className="flex-1">
                <img 
                  src="https://images.unsplash.com/photo-1555109307-f7d9da25c244"
                  alt="Entrance Location"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
            </div>
          </div>

          {/* Official Website */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-gray-700" />
              <h3 className="text-xl font-semibold text-gray-900">Official website</h3>
            </div>
            <a
              href={productDetails?.official_website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Visit Now
            </a>
          </div>
        </div>
      </div>

      {/* How to Purchase Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Purchase and Use</h2>
        
        {/* Before Purchase */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Before purchasing</h3>
          <p className="text-gray-600">
            After adding to your shopping cart, please complete the payment by entering the orderer information 
            and product usage information at the payment stage.
          </p>
          <p className="text-gray-600 mt-2 italic">
            (*You can specify the desired date/time of your visit at the payment stage.)
          </p>
        </div>

        {/* After Purchase */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">After purchase</h3>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              Please check the purchase details on the order confirmation email that will be sent 
              immediately to the email address you provided during the payment process.
            </li>
            <li>
              An additional email with the purchased e-ticket attached will be sent within 6 hours of purchase.
            </li>
          </ol>
        </div>

        {/* How to Use */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            How to use the ticket on the day of use
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 mb-3">[e-ticket]</p>
            <ol className="list-decimal list-inside space-y-3 text-gray-600">
              <li>
                After downloading the e-ticket attached to the additional email, save it on your 
                mobile phone or capture it.
              </li>
              <li>
                You can enter conveniently by presenting the e-ticket saved on your mobile phone 
                when entering. (*A separate printout is not required.)
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}