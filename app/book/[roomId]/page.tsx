// 'use client';

import { useSearchParams } from 'next/navigation';
import BookingForm from '@/components/BookingForm';

// Using the same rooms data from the main page
const rooms = [
  {
    id: 1,
    name: 'Deluxe Forest Suite',
    description: 'Luxurious suite with panoramic forest views',
    price: 450,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    amenities: ['King Bed', '2-4 Guests', 'En-suite Bath', 'Free Wi-Fi'],
    size: '55m²',
  },
  {
    id: 2,
    name: 'Lake View Room',
    description: 'Elegant room overlooking the serene lake',
    price: 350,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    amenities: ['Queen Bed', '2 Guests', 'En-suite Bath', 'Free Wi-Fi'],
    size: '40m²',
  },
  {
    id: 3,
    name: 'Family Cottage',
    description: 'Spacious cottage perfect for families',
    price: 650,
    image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42',
    amenities: ['2 Bedrooms', '4-6 Guests', '2 Bathrooms', 'Free Wi-Fi'],
    size: '85m²',
  },
];

// Add this function to generate static params
export function generateStaticParams() {
  return rooms.map(room => ({
    roomId: room.id.toString(), // Ensure roomId is a string
  }));
}

export default function BookingPage({ params }) {
  const roomId = params.roomId;

  // Find the selected room
  const selectedRoom = rooms.find(room => room.id === Number(roomId));

  if (!selectedRoom) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-center">Room not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BookingForm room={selectedRoom} />
      </div>
    </div>
  );
}