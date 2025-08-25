"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ButtonComponent from "@/app/components/ButtonComponent/ButtonComponent";
import { our_products_data } from "@/utils/catalog";
import { useParams } from "next/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslations } from "next-intl";
import VideoComponent from "@/app/components/VideoComonent/VideoComonent";
import Link from "next/link";

const OneProduct = () => {
  const params = useParams();
  const id = params?.id as string | undefined;

  const t = useTranslations();

 
      const [lang, setLang] = useState('am');
  
       useEffect(() => {
      const cookieLang = document.cookie
        .split('; ')
        .find(row => row.startsWith('lang='))
        ?.split('=')[1] || 'am';
      setLang(cookieLang);
    }, []);

  const product = id
    ? our_products_data.find((item) => item.code === id)
    : undefined;

  if (!product) {
    return (
      <div className="one_product_page">
        <div className="container py-6 px-[20px]">
          <h2 className="text-center text-red-500">Product not found</h2>
        </div>
      </div>
    );
  }

  const productCodes = ['PZ-3', 'PZ-4', 'PZ-21', 'PZ-6', 'PZ-20', "TV-1", 'PZ-26']


  return (
    <div className="one_product_page">
      <div className="container py-6 flex flex-col gap-7 px-[20px]">
        <div className="flex max-md:flex-col justify-center items-start gap-[80px]">
          <div className="w-[45%] max-md:w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              navigation
              loop
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="productImageSlider h-full max-md:h-[300px]"
              modules={[Autoplay, Navigation]}
            >
              {product.img.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`${product.code}-${index}`}
                    className="w-full h-[500px] rounded object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-[45%] h-[full] flex flex-col gap-[20px] max-md:w-full justify-center">
            <h1 className="arm_Hmks_Bebas_Neue font-semibold text-[30px] leading-[37.6px] font_color uppercase">
              {product.code}
            </h1>
            <div className="flex flex-col gap-[20px]">
              <h2 className="arm_Hmks_Bebas_Neue font-semibold text-[20px] leading-[28.8px] font_color uppercase">
                {product.code === "TM-11" ? t("SecurityInfoSection.smartShelvesTitle") : !productCodes.includes(product.code) ? ('') : t("singleProductPageTitles.0")}
              </h2>

              {product.code === "TM-11" ? (
                <p className="arm_Hmks_Bebas_Neue font-medium text-[16px] font_color">
                  {t("SecurityInfoSection.smartShelvesParagraph")}
                </p>
              ) : product.code === "TM-22" ? (
                <ul className='freeSans font_color leading-[28px] font-normal text-[16px] flex flex-col gap-[10px]'>
                  <li>{t("SecurityInfoSection.tm22Info.0")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.1")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.2")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.3")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.4")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.5")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.6")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.7")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.8")}</li>
                  <li>{t("SecurityInfoSection.tm22Info.9")}</li>
                </ul>
              )

                : !productCodes.includes(product.code) ? ('') : (
                  <ul className="flex flex-col gap-[10px]">
                    {new Array(11).fill(0).map((_, i) => (
                      <li
                        key={i}
                        className="arm_Hmks_Bebas_Neue font-medium text-[16px] font_color"
                      >
                        {t(`catalog.${product.code.toLowerCase()}.${i}`)}
                      </li>
                    ))}
                  </ul>
                )}

            </div>

            <ButtonComponent
              name={t("OurProductsSection.order_btn")}
              bg="transparent"
              color="#5939F5"
              size="14px"
              border="1px solid #5939F5"
              width="300px"
              py="9px"
              px="0"
              order={product.code}
            />
          </div>
        </div>

        {product?.videos &&
          <div className="w-full flex flex-wrap justify-center  gap-[20px]">
            {product.videos.map((video, index) => (
              <div key={index} className=" w-full md:w-[18%] h-[400px]">
                <VideoComponent path={video || ''} thumb={''} />
              </div>
            ))}
          </div>
        }

        {
          product.code === 'TV-1' && <div className="w-full flex flex-wrap justify-start  gap-[20px]">
            {

              product.img.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.code}-${index}`}
                  className="w-[300px] h-[300px] rounded object-cover"
                />
              ))
            }
          </div>
        }

        <div className="w-full px-4">
          <h2 className="text-2xl font-bold mb-[50px] text-blue-900">
            {t("singleProductPageTitles.1")}
          </h2>
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
      </div>
    </div>
  );
};

export default OneProduct;
