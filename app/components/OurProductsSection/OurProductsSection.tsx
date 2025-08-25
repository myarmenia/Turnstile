'use client'
import { LineIcon } from '@/app/icons/LineIcon';
import React, { useEffect, useState } from 'react';
import our_products_bacground from '@/public/images/our_products_section_bacground.png';
// import pz_13_img from '@/public/images/PZ-13.png';
// import pz_14_img from '@/public/images/PZ-14.png';
// import pz_3_img from '@/public/images/PZ-3.png';
// import pz_4_img from '@/public/images/PZ-4.png';
import Image from 'next/image';
// import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useTranslations } from 'next-intl';
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent';
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { our_products_data } from '@/utils/catalog';
import Link from 'next/link';




const OurProductsSection = ({ title }: { title: string }) => {
  const t = useTranslations('OurProductsSection');
    // const router = useRouter();
    const [lang, setLang] = useState('am');

     useEffect(() => {
    const cookieLang = document.cookie
      .split('; ')
      .find(row => row.startsWith('lang='))
      ?.split('=')[1] || 'am';
    setLang(cookieLang);
  }, []);


  // const our_products_data = [
  //   {
  //     id: '1',
  //     code: 'PZ-13',
  //     price1: '199.000',
  //     price2: '',
  //     img: [pz_13_img],
  //   },
  //   {
  //     id: '2',
  //     code: 'PZ-14',
  //     price1: '249.000',
  //     price2: '396.000',
  //     img: [pz_14_img],
  //   },
  //   {
  //     id: '3',
  //     code: 'PZ-3',
  //     price1: '490.000',
  //     price2: '784.000',
  //     img: [pz_3_img],
  //   },
  //   {
  //     id: '4',
  //     code: 'PZ-4',
  //     price1: '490.000',
  //     price2: '784.000',
  //     img: [pz_4_img],
  //   },
  // ];

  return (
    <div
      style={{ backgroundImage: `url(${our_products_bacground.src})` }}
      className="bg-cover bg-no-repeat py-[50px] md:p-[50px]"
    >
      <div className="container flex flex-col gap-[50px] justify-center items-center">
        <div className="flex items-center justify-center gap-3">
          <LineIcon width={27} height={2} color="#5939F5" />
          <h2 className="text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px]">
            {t(`${title}`)}
          </h2>
          <LineIcon width={27} height={2} color="#5939F5" />
        </div>

        {/* <div className="flex flex-wrap justify-center gap-[20px]">
          {our_products_data.map((item) => (
            <div
              key={item.id}
              className="w-[280px] flex flex-col items-center gap-[10px] bg-white rounded"
            >
              <div className="w-full h-[233px] shadow-sm rounded">
                <Image
                  src={item.img[0]}
                  alt={item.code}
                  className="w-full h-full rounded"
                />
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
          ))}
        </div> */}
          <div className='w-full px-4'>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {our_products_data.map((product) => (
              <SwiperSlide key={product.id}>
                <Link href={`/${lang}/catalog/${product.code}`} className="flex flex-col items-center">
                  <Image
                    src={product.img[0]}
                    alt={product.id}
                    className="object-cover h-[250px]"
                  />
                  <p className="text-lg mt-2 font-semibold">{product.code}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        <ButtonParrentComponent btnText={t('see_more_btn')}/>
      </div>
    </div>
  );
};

export default OurProductsSection;
