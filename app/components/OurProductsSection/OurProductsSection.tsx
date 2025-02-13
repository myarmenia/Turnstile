import { LineIcon } from '@/app/icons/LineIcon';
import React from 'react';
import our_products_bacground from '@/public/images/our_products_section_bacground.png';
import pz_13_img from '@/public/images/PZ-13.png';
import pz_14_img from '@/public/images/PZ-14.png';
import pz_3_img from '@/public/images/PZ-3.png';
import pz_4_img from '@/public/images/PZ-4.png';
import Image, { StaticImageData } from 'next/image';
import { OneSidedTurnstileIcon } from '@/app/icons/OneSidedTurnstileIcon';
import { TwoSidedTurnstileIcon } from '@/app/icons/TwoSidedTurnstileIcon';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { useTranslations } from 'next-intl';
import ButtonParrentComponent from '../ButtonParrentComponent/ButtonParrentComponent';

interface IOurProduct {
  id: string;
  code: string;
  price1: string;
  price2: string;
  img: StaticImageData;
}


const OurProductsSection = ({ title }: { title: string }) => {
  const t = useTranslations('OurProductsSection');

  const our_products_data: IOurProduct[] = [
    {
      id: '1',
      code: 'PZ-13',
      price1: '199.000',
      price2: '',
      img: pz_13_img,
    },
    {
      id: '2',
      code: 'PZ-14',
      price1: '249.000',
      price2: '396.000',
      img: pz_14_img,
    },
    {
      id: '3',
      code: 'PZ-3',
      price1: '490.000',
      price2: '784.000',
      img: pz_3_img,
    },
    {
      id: '4',
      code: 'PZ-4',
      price1: '490.000',
      price2: '784.000',
      img: pz_4_img,
    },
  ];

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

        <div className="flex flex-wrap justify-center gap-[20px]">
          {our_products_data.map((item: IOurProduct) => (
            <div
              key={item.id}
              className="w-[280px] flex flex-col items-center gap-[10px] bg-white rounded"
            >
              <div className="w-full h-[233px] shadow-sm rounded">
                <Image
                  src={item.img}
                  alt={item.code}
                  className="w-full h-full rounded"
                />
              </div>
              <div className="flex flex-col items-center gap-[10px] w-full justify-center p-[20px]">
                <h3 className="freeSans font_color font-normal text-[16px] leading-[19.2px] text-center">
                  {item.code}
                </h3>
                {/* <div className="flex items-center gap-[15px] w-full justify-center">
                  {item?.price1 && (
                    <div className="flex gap-2">
                      <OneSidedTurnstileIcon
                        width={21}
                        height={24}
                        color="#0E0449"
                      />
                      <span className="freeSans font_color text-center text-[16px] leading-[19.2px] font-semibold">
                        {item?.price1}
                      </span>
                    </div>
                  )}

                  {item.price2 && (
                    <span className="w-[1px] bg-[#0E0449] h-[30px]"></span>
                  )}

                  {item?.price2 && (
                    <div className="flex gap-2">
                      <TwoSidedTurnstileIcon
                        width={28}
                        height={24}
                        color="#0E0449"
                      />
                      <span className=" font_color freeSans text-center text-[16px] leading-[19.2px] font-semibold">
                        {item?.price2}
                      </span>
                    </div>
                  )}
                </div> */}
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

        <ButtonParrentComponent btnText={t('see_more_btn')}/>
      </div>
    </div>
  );
};

export default OurProductsSection;
