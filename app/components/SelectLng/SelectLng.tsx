'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { BottomArrowIcon } from '@/app/icons/BottomArrowIcon';

const SelectLng = () => {
  const [currentLng, setCurrentLng] = useState('am'); // Default language
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Helper function to set a cookie
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  // Helper function to get a cookie value
  const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((c) => c.startsWith(`${name}=`));
    return cookie ? cookie.split('=')[1] : null;
  };

  useEffect(() => {
    const savedLang = getCookie('lang') || 'am'; // Get language from cookies if available
    setCurrentLng(savedLang);
  }, []); // Runs only once after initial render (client-side)

  const changeLanguage = (lng: string) => {
    const slicePathname = pathname.slice(3);

    setCurrentLng(lng);
    setCookie('lang', lng, 365); // Store the language in cookies for 1 year
    router.push(`/${lng}${slicePathname}`); // Navigate to the new language route
  };
  console.log("----",currentLng);
  

  return (
    <div className="relative">
      {/* Display current language */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 font_color flex items-center gap-2"
      >
        {currentLng === 'am' ? 'ARM' : 'ENG'}
        <BottomArrowIcon color="black" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute bg-white rounded-md shadow-lg transform transition-all ease-in-out duration-200"
          style={{ transform: 'translateY(0)' }}
        >
          <button
            onClick={() => {
              changeLanguage(currentLng === 'am' ? 'en' : 'am');
              setIsOpen(false); // Close the dropdown after selection
            }}
            className="font_color block px-4 py-2 hover:bg-gray-100 w-full text-left"
          >
            {currentLng === 'am' ? 'ENG' : 'ARM'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectLng;
