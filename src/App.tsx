import React from 'react';
import { Home, Building, Building2, MapPin } from 'lucide-react';
import Header from './components/Header';
import PropertyList from './components/PropertyList';
import Footer from './components/Footer';

function App() {
  const properties = [
    { id: 1, type: 'Flat', icon: Home, price: 150000, location: 'City Center', description: 'Modern 2-bedroom flat with a view' },
    { id: 2, type: 'House', icon: Building, price: 300000, location: 'Suburbs', description: 'Spacious 4-bedroom family home with garden' },
    { id: 3, type: 'Building', icon: Building2, price: 1000000, location: 'Downtown', description: 'Commercial building with 10 office spaces' },
    { id: 4, type: 'Plot', icon: MapPin, price: 100000, location: 'Outskirts', description: 'Large plot of land for development' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Featured Properties</h1>
        <PropertyList properties={properties} />
      </main>
      <Footer />
    </div>
  );
}

export default App;