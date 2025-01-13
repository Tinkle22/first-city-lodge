import { Utensils, Dumbbell, Mountain, Wifi, Car, Coffee, Presentation, Beer } from 'lucide-react';

const amenities = [
  {
    icon: Beer,
    title: 'Bar',
    description: 'A nice and relaxing bar',
  },
  {
    icon: Presentation,
    title: 'Conference',
    description: 'Execellent conference to hold your meetings',
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary high-speed internet access',
  },
  {
    icon: Coffee,
    title: 'Room Service',
    description: '24-hour in-room dining service',
  },
];

export default function Amenities() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lodge Amenities
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of amenities designed to make your stay exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <amenity.icon className="w-12 h-12 text-green-700 dark:text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}