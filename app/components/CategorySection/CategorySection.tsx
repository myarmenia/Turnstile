import React from 'react'
import categorySmartHomeImg from '@/public/images/category_section_smart_homeImg.png'
import categorySecuritySystemsImg from '@/public/images/category_section_securitySystemsImg.png'
import categoryTurnstileImg from '@/public/images/category_section_turnstileImg.png'
import { RightArrowIcon } from '@/app/icons/LeftArrowIcon';
import ServerSideButton from '../ServerSideButton/ServerSideButton';
import { useTranslations } from 'next-intl';


interface ICategoryItem {
    id: string,
    title: string,
    description: string,
    path: string,
    bg: string,
}
const CategorySection = () => {    
    const t = useTranslations("CategorySection")

    

    const categoriesData: ICategoryItem[] = [
        {
            id: '1',
            title: t("items.0.title"),
            description: t("items.0.description"),
            path: `/smart-home`,
            bg: categorySmartHomeImg.src,
        },

        {
            id: '2',
            title: t("items.1.title"),
            description: t("items.1.description"),
            path: `/security-systems`,
            bg: categorySecuritySystemsImg.src,
        },

        {
            id: '3',
            title: t("items.2.title"),
            description: t("items.2.description"),
            path: `/turnstile`,
            bg: categoryTurnstileImg.src,
        },
    ]
    return (
        <div className='category_section pt-[50px]'>
            {
                categoriesData.map((category: ICategoryItem) => (
                    <div key={category.id} className='category_item h-[648px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${category.bg})` }}>
                        <div className={`container flex h-full items-center ${+category.id % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                            <div className='max-w-[300px] flex flex-col gap-[30px]'>
                                <h3 className={`font-semibold text-[24px] leading-[32px] arm_Hmks_Bebas_Neue ${+category.id % 2 !== 0 ? "text-white" : "text-black"}`}>{category.title}</h3>
                                <p className={`font-normal text-[22px] leading-[32px] freeSans ${+category.id % 2 !== 0 ? "text-white" : "text-black"}`}>{category.description}</p>
                                {
                                    category.id !== "1" && <ServerSideButton
                                    name={t("btn")}
                                    path={category.path}
                                    bg="transparent"    
                                    color={+category.id % 2 !== 0 ? "white" : "black"}
                                    size="16px"
                                    icon={<RightArrowIcon width={24} height={24} color={+category.id % 2 !== 0 ? "white" : "black"}/>}
                                    customClass='category_btn_hover'
                                    />
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategorySection