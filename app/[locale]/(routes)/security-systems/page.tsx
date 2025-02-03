import Banner from '@/app/components/Banner/Banner'
import React from 'react'
import bannerBg from '@/public/images/security_systems_banner_bacground.png'
import OurSolutionsSection from '@/app/components/OurSolutionsSection/OurSolutionsSection';
import SecurityInfoSection from '@/app/components/SecurityInfoSection/SecurityInfoSection';
import WhyChooseUsSection from '@/app/components/WhyChooseUsSection/WhyChooseUsSection';
import MobileAppSection from '@/app/components/MobileAppSection/MobileAppSection';
import FrequentlyAsked from '@/app/components/FrequentlyAsked/FrequentlyAsked';

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
        <div className='security_systems overflow-hidden'>
            <Banner bg={bannerBg.src} content={content}/>
            <OurSolutionsSection/>
            <SecurityInfoSection/>
            <WhyChooseUsSection/>
            <MobileAppSection/>
            <FrequentlyAsked/>
        </div>
    );
}

export default SecuritySystems;
