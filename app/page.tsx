import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Coffee, Wifi, Utensils } from 'lucide-react';
import {  Dumbbell, Mountain, Car } from 'lucide-react';
import Contact from '@/components/Contact';
import Rooms from '@/components/Rooms';
import Gallery from '@/components/Gallery';
import Amenities from '@/components/Amenities';

const amenities = [
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Farm-to-table restaurant with local cuisine',
  },

  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: '24/7 state-of-the-art fitness facility',
  },

  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet access',
  },

  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Complimentary valet parking service',
  },
  
  {
    icon: Coffee,
    title: 'Room Service',
    description: '24-hour in-room dining service',
  },
];


export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d"
          alt="Luxury lodge exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Escape to Serenity
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Experience luxury in harmony with nature at our exclusive eco-friendly retreat
              </p>
              {/* <Button className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6">
                Book Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Luxury Living
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the perfect blend of modern comfort and natural beauty at our exclusive lodge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable luxury living' },
              { icon: Coffee, title: 'Premium Service', desc: '24/7 concierge available' },
              { icon: Wifi, title: 'Modern Amenities', desc: 'Stay connected in nature' },
              { icon: Utensils, title: 'Fine Dining', desc: 'Farm-to-table cuisine' },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-green-700 dark:text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    <Amenities/>
    <Rooms/>
    <Gallery/>
    <Contact/>
    </>
  );
}