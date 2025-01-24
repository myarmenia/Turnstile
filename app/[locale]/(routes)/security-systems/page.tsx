import Banner from '@/app/components/Banner/Banner'
import React from 'react'
import bannerBg from '@/public/images/security_systems_banner_bacground.png'
import OurSolutionsSection from '@/app/components/OurSolutionsSection/OurSolutionsSection';

interface IContent {
    title: string;
    description: string;
    btn: string;
}

const SecuritySystems = () => {
    const content: IContent = {
        title: "Տարածքի ընդհանուր Անվտանգության  կառավարում՝ Ձեր Հեռախոսի միջոցով",
        description: "Խելացի լուծումներ՝ բարիերների, մեքենաների ճանաչման, դեմքի ճանաչման, ահազանգի միացման և այլնի համար",
        btn: "Գտնել լուծումը"
    }

    return (
        <div className='security_systems'>
            <Banner bg={bannerBg.src} content={content}/>
            <OurSolutionsSection/>
        </div>
    );
}

export default SecuritySystems;
