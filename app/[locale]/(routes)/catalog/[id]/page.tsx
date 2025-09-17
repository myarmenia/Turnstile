
import React from "react";
import Image from "next/image";
import ButtonComponent from "@/app/components/ButtonComponent/ButtonComponent";
import VideoComponent from "@/app/components/VideoComonent/VideoComonent";
import SimilarProductsSwiper from "@/app/components/SimilarProductsSwiper/SimilarProductsSwiper";
import { our_products_data } from "@/utils/catalog";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";
import { Metadata } from "next";
import SingleProductSwiper from "@/app/components/SingleProductSwiper/SingleProductSwiper";


type Props = {
  params: {
    [key: string]: string;
  };
};

const productCodeToTitleIndex: Record<string, number> = {
  "PZ-sanitaric-64": 0,
  "PZ-hygiene-66": 1,
  "PZ-26": 2,
  "TM-22": 3,
  "TV-1": 4,
  "PZ-3": 5,
  "TM-11": 6,
  "PZ-21": 7,
  "PZ-20": 8,
  "PZ-4": 9,
  "PZ-6": 10,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params

  const productCodes = [
    'PZ-3', 'PZ-4', 'PZ-21', 'PZ-6', 'PZ-20', 'TV-1',
    'PZ-26', 'TM-11', 'TM-22', 'PZ-sanitaric-64', 'PZ-hygiene-66'
  ]
  const product = id ? 
  our_products_data.find((product => product.code === id)) 
  : undefined
  
  const t = await getTranslations('')

  const titleIndex = productCodeToTitleIndex[id]
  
  let title = ''
  let description = ''
  {productCodes.includes(id) && titleIndex !== undefined ?
  title = t(`productMetaDataInfo.${titleIndex}.title`) : '' }
  {productCodes.includes(id) && titleIndex !== undefined ?
  description = t(`productMetaDataInfo.${titleIndex}.description`) : '' }
    
  return {
    title,
    description,
    openGraph: {
    title: title,
    description: description,
    url: `https://turniket.am/catalog/${product?.code}`,
    siteName: "turniket.am",
    type: "website",
    images: [
      {
        url: `${product?.img[0].src}`,
        width: 700,
        height: 650,
        alt: title
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [`${product?.img[0].src}`]
  },
  }
}

const OneProduct = async ({ params }: Props) => {
  const { id } = params

  const cookieLang = (await cookies()).get('lang')?.value || 'am';

  const t = await getTranslations({ locale: cookieLang });
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

  const productCodes = ['PZ-3', 'PZ-4', 'PZ-21', 'PZ-6', 'PZ-20', "TV-1", 
  'PZ-26', 'TM-11', 'TM-22', 'PZ-sanitaric-64', 'PZ-hygiene-66']
  const titleIndex = productCodeToTitleIndex[product.code];
  const title = productCodes.includes(product.code) && titleIndex !== undefined
  ? t(`titleInfoProducts.${titleIndex}.itemTitle`) : "";

  return (
    <div className="one_product_page">
      <div className="container py-6 flex flex-col gap-7 px-[20px]">
        <div className="flex max-md:flex-col justify-center items-start gap-[80px]">
          <div className="w-[45%] max-md:w-full" title={title}>
            <SingleProductSwiper/>
          </div>
          <div className="w-[45%] h-[full] flex flex-col gap-[20px] max-md:w-full justify-center">
            <h1 className="arm_Hmks_Bebas_Neue font-semibold text-[30px] leading-[37.6px] font_color uppercase">
              {product.code}
            </h1>
            <div className="flex flex-col gap-[20px]">
              <h2 className="arm_Hmks_Bebas_Neue font-semibold text-[20px] leading-[28.8px] font_color uppercase">
                {product.code === "TM-11" ? t("SecurityInfoSection.smartShelvesTitle")
                : !productCodes.includes(product.code) ? ('') : t("singleProductPageTitles.0") &&
                  product.code === "PZ-hygiene-66" ? t("catalogNewProductPageTitles.title") :
                  !productCodes.includes(product.code) ? ('') : t("singleProductPageTitles.0") &&
                  product.code === "PZ-sanitaric-64" ? t("catalogNewProductPageTitles.title") :
                  !productCodes.includes(product.code) ? ('') : t("singleProductPageTitles.0")}
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
          <SimilarProductsSwiper />
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
