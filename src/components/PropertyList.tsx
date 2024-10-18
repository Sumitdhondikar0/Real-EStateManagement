import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Property {
  id: number;
  type: string;
  icon: LucideIcon;
  price: number;
  location: string;
  description: string;
}

interface PropertyListProps {
  properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex items-center mb-2">
              <property.icon className="w-6 h-6 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">{property.type}</h2>
            </div>
            <p className="text-gray-600 mb-2">{property.location}</p>
            <p className="text-gray-800 mb-4">{property.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">${property.price.toLocaleString()}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;