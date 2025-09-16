"use client"
import { our_products_data } from '@/utils/catalog'
import { useParams } from 'next/navigation'
import React from 'react'
import { SwiperSlide ,Swiper} from 'swiper/react'
import { Autoplay, Navigation } from "swiper/modules";
import Image from 'next/image'

const SingleProductSwiper = () => {
    const params = useParams()
    const id = params?.id as string | undefined
     const product = id
        ? our_products_data.find((item) => item.code === id)
        : undefined;
  return (
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
              {product?.img.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt={`${product.code}-${index}`}
                    className="w-full h-[500px] rounded object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
  )
}

export default SingleProductSwiper
