import { LineIcon } from '@/app/icons/LineIcon'
import React from 'react'
import ourSolutionBachgroundImg from '@/public/images/ourSolutionsSectionBacground.png'
import { ShlaqBawnScanIcon } from '@/app/icons/ShlaqBawnScanIcon'
import { CarScanIcon } from '@/app/icons/CarScanIcon'
import { FaceScanIcon } from '@/app/icons/FaceScanIcon'
import { EyeScanIcon } from '@/app/icons/EyeScanIcon'
import Link from 'next/link'
import { RightChvronIcon } from '@/app/icons/RightChvronIcon'

interface SolutionItem {
    id: string,
    title: string,
    icon: any,
    route: string,
    description: string,

}
const OurSolutionsSection = () => {

    const solutions: SolutionItem[] = [
        {
            id: '1',
            title: 'Բարիերների Կառավարում',
            icon: <ShlaqBawnScanIcon />,
            route: '/',
            description: 'Օգտագործեք ձեր հեռախոսը՝ ավտոմատ բարիերների բացման և փակման համար։ Մեր համակարգերը ապահովում են արագ արձագանք, շարժման հսկողություն և ճշգրիտ տվյալների հավաքագրում։',
        },

        {
            id: '2',
            title: 'Մեքենաների Ճանաչում',
            icon: <CarScanIcon />,
            route: '/',
            description: 'Մեքենաների համար նախատեսված խելացի ճանաչման լուծումները թույլ են տալիս ավտոմատացված մուտք և ելք, իսկ արհեստական բանականությունը գրանցում է համարանիշներն ու վարքի մոդելները։',
        },

        {
            id: '3',
            title: 'Դեմքի Ճանաչում',
            icon: <FaceScanIcon />,
            route: '/',
            description: 'Դեմքի ճանաչման տեխնոլոգիան ապահովում է անվտանգության բարձր մակարդակ՝ թույլատրելով միայն հաստատված անձանց մուտք, ինչը կանխում է անցանկալի մուտքերը։',
        },

        {
            id: '4',
            title: 'Ինֆրակարմիր ճառագայթներ',
            icon: <EyeScanIcon />,
            route: '/',
            description: 'Ինֆրակարմիր ճառագայթներով անվտանգային լուծումները հիանալի են մեծ տարածքների համար։ Ապահովում են շարժման հայտնաբերում և ազդանշանային համակարգեր՝ անմիջապես ձեր հեռախոսից։',
        },

        {
            id: '5',
            title: 'Լազերային Հսկողություն',
            icon: <EyeScanIcon />,
            route: '/',
            description: 'Լազերային հիմքով անվտանգային լուծումները հիանալի են մեծ տարածքների համար։ Ապահովում են շարժման հայտնաբերում և ազդանշանային համակարգեր՝ անմիջապես ձեր հեռախոսից։',
        },

        {
            id: '6',
            title: 'Մեքենաների Ճանաչում',
            icon: <CarScanIcon />,
            route: '/',
            description: 'Մեքենաների համար նախատեսված խելացի ճանաչման լուծումները թույլ են տալիս ավտոմատացված մուտք և ելք, իսկ արհեստական բանականությունը գրանցում է համարանիշներն ու վարքի մոդելները։',
        },

        {
            id: '7',
            title: 'Դեմքի Ճանաչում',
            icon: <FaceScanIcon />,
            route: '/',
            description: 'Դեմքի ճանաչման տեխնոլոգիան ապահովում է անվտանգության բարձր մակարդակ՝ թույլատրելով միայն հաստատված անձանց մուտք, ինչը կանխում է անցանկալի մուտքերը։',
        },

        {
            id: '8',
            title: 'Ինֆրակարմիր ճառագայթներ',
            icon: <EyeScanIcon />,
            route: '/',
            description: 'Ինֆրակարմիր ճառագայթներով անվտանգային լուծումները հիանալի են մեծ տարածքների համար։ Ապահովում են շարժման հայտնաբերում և ազդանշանային համակարգեր՝ անմիջապես ձեր հեռախոսից։',
        },

    ]

    return (
        <div className='pb-[50px] flex flex-col gap-[50px]'>
            <div className="container">
                <div className="flex items-center justify-center gap-3">
                    <LineIcon width={27} height={2} color="#5939F5" />
                    <h2 className="text-[24px] font_color font-normal arm_Hmks_Bebas_Neue leading-[28.8px] uppercase">
                        Մեր Լուծումները
                    </h2>
                    <LineIcon width={27} height={2} color="#5939F5" />
                </div>
            </div>

            <div style={{ backgroundImage: `url(${ourSolutionBachgroundImg.src})` }} className='px-[50px] py-[70px] max-sm:px-[20px] bg-cover bg-no-repeat bg-center'>
                <div className="container flex flex-wrap gap-[20px] ">
                    {
                        solutions.map((solution) => (
                            <div key={solution.id} className='grow basis-72 bg-white p-[20px] rounded flex flex-col gap-[15px] items-center'>
                                <span>{solution.icon}</span>
                                <h3 className='text-[20px] font_color font-semibold freeSans leading-[24px] text-center'>{solution.title}</h3>
                                <p className='text-center font-normal freeSans text-[16px] leading-[24px] font_color'>{solution.description}</p>
                                <Link href={solution.route} className='text-[16px] text-[#5939F5] font-normal freeSans leading-[24px] text-center uppercase hover:text-blue-700 flex items-center gap-1'>
                                    <span>Մանրամասն</span>
                                    <RightChvronIcon/> 
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurSolutionsSection