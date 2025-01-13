import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Bed, Users, Bath, Wifi, AirVent } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Twin ',
    description: 'A large with  a large bed',
    price: 500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    amenities: ['King Bed', 'Aircon', 'Hot Bath', 'Free Wi-Fi'],
    size: '55m²',
  },
  {
    id: 2,
    name: 'King',
    description: 'Spacious room perfect for anyone',
    price: 600,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    amenities: ['King Bed',  'Aircon', 'Hot Bath', 'Free Wi-Fi'],
  },
  {
    id: 3,
    name: 'Queen',
    description: 'Spacious cottage perfect for families',
    price: 500,
    image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42',
    amenities: ['Queen-size Bed',  'Aircon', 'Hot Bath', 'Free Wi-Fi'],
  },
  {
    id: 4,
    name: 'Double',
    description: 'Spacious cottage perfect for families',
    price: 400,
    image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42',
    amenities: ['Double Bed',  'Aircon', 'Hot Bath', 'Free Wi-Fi'],
  },
];

export default function Rooms() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Rooms & Suites
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our selection of luxurious accommodations, each designed to provide the perfect blend of comfort and natural beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <p className="text-green-700 dark:text-green-400 font-bold">
                    K{room.price}/night
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {room.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      {index === 0 && <Bed className="w-4 h-4 mr-2" />}
                      {index === 1 && <AirVent className="w-4 h-4 mr-2" />}
                      {index === 2 && <Bath className="w-4 h-4 mr-2" />}
                      {index === 3 && <Wifi className="w-4 h-4 mr-2" />}
                      {amenity}
                    </div>
                  ))}
                </div>
                {/* <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                  Book Now
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}