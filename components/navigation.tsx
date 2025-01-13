"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-green-800 dark:text-green-400">
            First City Lodge
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            {/* <Link href="/about" className="nav-link">About Us</Link> */}
            <Link href="/rooms" className="nav-link">Rooms & Rates</Link>
            <Link href="/amenities" className="nav-link">Amenities</Link>
            <Link href="/gallery" className="nav-link">Gallery</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            {/* <Button variant="default" className="bg-green-700 hover:bg-green-800 text-white">
              Book Now
            </Button> */}
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="nav-link-mobile">Home</Link>
              <Link href="/about" className="nav-link-mobile">About Us</Link>
              <Link href="/rooms" className="nav-link-mobile">Rooms & Rates</Link>
              <Link href="/amenities" className="nav-link-mobile">Amenities</Link>
              <Link href="/gallery" className="nav-link-mobile">Gallery</Link>
              <Link href="/contact" className="nav-link-mobile">Contact</Link>
              <Button variant="default" className="bg-green-700 hover:bg-green-800 text-white w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}