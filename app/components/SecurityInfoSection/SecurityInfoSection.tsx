import React from 'react'
import securityImgPhone from '@/public/images/security_phone_img.png'
import securityImgComputer from '@/public/images/security_computer_img.png'
import decorImg from '@/public/images/decor_img.png'
import Image from 'next/image'
import { useTranslations } from 'next-intl'


const SecurityInfoSection = () => {
    const t = useTranslations("SecurityInfoSection")
  return (
    <div className='security_info_section relative  mt-[70px]'>
        <div className="container flex flex-col gap-[30px] items-center relative">
            <div className='w-[94%] flex bg-white border border-[#CACACA] rounded-[4px] max-md:flex-col items-center z-10'>
                <div style={{backgroundImage: `url(${securityImgPhone.src})`}} className='w-[60%] min-h-[540px] bg-cover bg-center bg-no-repeat rounded-[4px] max-md:h-[400px] max-md:w-full'></div>
                <div className='w-[40%] flex flex-col gap-[30px] p-[20px] max-md:w-full'>
                    <h2 className='Arm_Hmks_Bebas_Neue font-semibold text-[20px] leading-[28.8px] font_color'>{t("firstTitle")}</h2>
                    <p className='freeSans font_color leading-[28px] font-normal text-[16px]'>{t("firstParagraph")}</p>
                    <div className='flex flex-col gap-[20px]'>
                        <h3 className='Arm_Hmks_Bebas_Neue font-semibold text-[16px] leading-[13.04px] font_color'>{t("firstList.title")}</h3>
                        <ul className='flex flex-col gap-[10px] font_color freeSans text-[16px] list-disc list-inside'>
                            <li>{t("firstList.list.0")}</li>
                            <li>{t("firstList.list.1")}</li>
                            <li>{t("firstList.list.2")}</li>
                            <li>{t("firstList.list.3")}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-[94%] flex bg-white border border-[#CACACA] rounded-[4px] max-md:flex-col items-center z-10'>
                <div className='w-[40%] flex flex-col gap-[30px] p-[20px] max-md:w-full'>
                    <h2 className='Arm_Hmks_Bebas_Neue font-semibold text-[20px] leading-[28.8px] font_color'>{t("secondTitle")}</h2>
                    <p className='freeSans font_color leading-[28px] font-normal text-[16px]'>{t("secondParagraph")}</p>
                    <div className='flex flex-col gap-[20px]'>
                        <h3 className='Arm_Hmks_Bebas_Neue font-semibold text-[16px] leading-[13.04px] font_color'>{t("secondList.title")}</h3>
                        <ul className='flex flex-col gap-[10px] font_color freeSans text-[16px] list-disc list-inside'>
                            <li>{t("secondList.list.0")}</li>
                            <li>{t("secondList.list.1")}</li>
                            <li>{t("secondList.list.2")}</li>
                            <li>{t("secondList.list.3")}</li>
                        </ul>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${securityImgComputer.src})`}} className='w-[60%] min-h-[540px] bg-cover bg-center bg-no-repeat rounded-[4px] max-md:h-[400px] max-md:w-full'></div>
            </div>
            <Image src={decorImg} alt='decor' className='absolute  right-[-100px] top-[-100px]'/>
            <Image src={decorImg} alt='decor' className='absolute  left-[-300px] bottom-[-70px]'/>
        </div>
    </div>
  )
}

export default SecurityInfoSection