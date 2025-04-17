import React from 'react';
import { Ticket, Clock, Calendar, QrCode } from 'lucide-react';

export function ProductSummary() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Summary</h2>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
            <Ticket className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-700">e-ticket</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-700">Use on specified date</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-700">Ticketing within 6 hours</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
            <QrCode className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-gray-700">Present your e-ticket</span>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Please read!</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full mr-3"></span>
            <p className="text-gray-700">
              This product is popular and may sell out quickly, so please reserve in advance.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full mr-3"></span>
            <p className="text-gray-700">
              This product is a product that receives an e-ticket via an additional email, and it takes about 6 hours to issue and send the ticket.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full mr-3"></span>
            <p className="text-gray-700">
              For urgent reservations (same-day reservations), please request 'urgent (priority) ticketing' through the At Home Trip KakaoTalk channel.
            </p>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-400 rounded-full mr-3"></span>
            <p className="text-gray-700">
              Please check the cancellation/refund policy below before purchasing.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}