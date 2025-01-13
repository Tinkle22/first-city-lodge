import Image from 'next/image';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    alt: 'Lodge Exterior',
    category: 'Exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    alt: 'Deluxe Suite',
    category: 'Rooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
    alt: 'Restaurant',
    category: 'Dining',
  },
  {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
    alt: 'Spa',
    category: 'Wellness',
  },
  {
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
    alt: 'Lake View',
    category: 'Views',
  },
  {
    src: 'https://images.unsplash.com/photo-1587985064135-0366536eab42',
    alt: 'Family Cottage',
    category: 'Rooms',
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Take a visual journey through our beautiful lodge and its surroundings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-lg font-semibold">{image.alt}</p>
                    <p className="text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}