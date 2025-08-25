'use client';

import React, { useEffect, useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {our_products_data } from '@/utils/catalog';
import { useRouter } from 'next/navigation';



const CatalogItem = () => {
  const t = useTranslations('OurProductsSection');
  const router = useRouter();
  const [lang, setLang] = useState('am');
  const [activeIndexes, setActiveIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] || 'am';
    setLang(cookieLang);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) => {
        const updated: { [key: string]: number } = {};

        our_products_data.forEach((item) => {
          if (item.img.length > 1) {
            const currentIndex = prev[item.id] || 0;
            updated[item.id] = (currentIndex + 1) % item.img.length;
          } else {
            updated[item.id] = 0;
          }
        });

        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container pb-6 flex flex-col gap-7 items-end">
      <div className="flex flex-wrap justify-center gap-[20px]">
        {our_products_data.map((item) => {
          const activeImgIndex = activeIndexes[item.id] || 0;

          return (
            <div
              key={item.id}
              className="w-[280px] flex flex-col items-center gap-[10px] bg-white rounded border-gray-100 border-2 cursor-pointer"
            >
              <div
                className="w-full h-[233px] shadow-sm rounded relative overflow-hidden"
                onClick={() => router.push(`/${lang}/catalog/${item.code}`)}
              >
                {item.img.map((imageSrc, index) => (
                  <Image
                    key={index}
                    src={imageSrc}
                    alt={item.code}
                    className={`w-full h-full object-cover rounded absolute top-0 left-0 transition-opacity duration-1000 ${
                      index === activeImgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center gap-[10px] w-full justify-center p-[20px]">
                <h3 className="freeSans font_color font-normal text-[16px] leading-[19.2px] text-center">
                  {item.code}
                </h3>
                <ButtonComponent
                  name={t('order_btn')}
                  bg="transparent"
                  color="#5939F5"
                  size="14px"
                  border="1px solid #5939F5"
                  width="100%"
                  py="9px"
                  px="0"
                  order={item.code}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogItem;
