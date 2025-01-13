import Amenities from '@/components/Amenities';
import { Utensils, Dumbbell, Mountain, Wifi, Car, Coffee } from 'lucide-react';

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
    icon: Coffee,
    title: 'Room Service',
    description: '24-hour in-room dining service',
  },
];

export default function AmenitiesPage() {
  return (
    <Amenities/>
  );
}