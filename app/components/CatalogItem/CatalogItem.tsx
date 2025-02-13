import React from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { our_products_data } from '@/utils/catalog';
import CatalogSearchInput from '../CatalogSearchInput/CatalogSearchInput';

interface IOurProduct {
    id: string;
    code: string;
    price1: string;
    price2: string;
    img: StaticImageData;
  }


const CatalogItem = () => {

    const t = useTranslations('OurProductsSection')


  return (
    <div className='container pb-6 flex flex-col gap-7 items-end'>
        {/* <CatalogSearchInput/> */}
        <div className="flex flex-wrap justify-center gap-[20px]">
          {our_products_data.map((item: IOurProduct) => (
            <div
              key={item.id}
              className="w-[280px] flex flex-col items-center gap-[10px] bg-white rounded border-gray-100 border-2"
            >
              <div className="w-full h-[233px] shadow-sm rounded">
                <Image
                  src={item.img}
                  alt={item.code}
                  className="w-[100%] h-[100%] rounded"
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
        </div>
    </div>
  )
}

export default CatalogItem