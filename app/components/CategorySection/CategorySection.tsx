import React from 'react'
import categorySmartHomeImg from '@/public/images/category_section_smart_homeImg.png'
import categorySecuritySystemsImg from '@/public/images/category_section_securitySystemsImg.png'
import categoryTurnstileImg from '@/public/images/category_section_turnstileImg.png'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { RightArrowIcon } from '@/app/icons/LeftArrowIcon'
import { cookies } from 'next/headers'; 

interface ICategoryItem {
    id: string,
    title: string,
    description: string,
    path: string,
    bg: string,
}
const CategorySection = async() => {
    const cookieStore = await cookies();
    const lang = cookieStore.get('lang')?.value || 'am'; 

    const categoriesData: ICategoryItem[] = [
        {
            id: '1',
            title: 'Խելացի տուն',
            description: 'Ավտոմատացրեք ամեն ինչ՝ լույսից մինչև վարագույր',
            path: `${lang}/smart-home`,
            bg: categorySmartHomeImg.src,
        },

        {
            id: '2',
            title: 'Անվտանգության համակարգեր',
            description: 'Հետեվեք ձեր բնակարանում կամ աշխատավայրում տեղի ունեցող ամեն ինչ՝ ձեր հեռախոսի միջոցով',
            path: `${lang}/security-systems`,
            bg: categorySecuritySystemsImg.src,
        },

        {
            id: '3',
            title: 'Մուտքի համակարգեր',
            description: 'Մեր տուռնիկետային համակարգերը թույլ են տալիս հեշտությամբ և ճշգրիտ հետևել ձեր աշխատակիցների մուտք ու ելքին՝ ապահովելով վերահսկման բարձր մակարդակ:',
            path: `${lang}/turnstile`,
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
                                <ButtonComponent
                                    name="Ավելին"
                                    path={category.path}
                                    bg="transparent"    
                                    color={+category.id % 2 !== 0 ? "white" : "black"}
                                    size="16px"
                                    icon={<RightArrowIcon width={24} height={24} color={+category.id % 2 !== 0 ? "white" : "black"}/>}
                                    customClass='category_btn_hover'
                                />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategorySection